import React from "react";
import {
  Image,
  ImageProps,
  ImageResizeMode,
  StyleSheet,
  View,
} from "react-native";
import {
  VideoView as VideoPlayerComponent,
  VideoViewProps as ExpoVideoProps,
  VideoContentFit,
  useVideoPlayer,
  TimeUpdateEventPayload,
  VideoPlayer as VideoPlayerType,
  VideoSource,
} from "expo-video";
import { setAudioModeAsync } from "expo-audio";
import { extractSizeStyles } from "../../../utilities";
import MediaPlaybackWrapper from "../MediaPlaybackWrapper";
import {
  normalizeBase64Source,
  useSourceDeepCompareEffect,
  useSourceDeepCompareMemoize,
} from "../MediaPlayerCommon";
import type {
  MediaPlayerRef,
  MediaPlayerProps,
  MediaPlayerStatus,
} from "../MediaPlayerCommon";

type ResizeMode = "contain" | "cover" | "stretch";
type ExpoVideoPropsOmitted = Omit<ExpoVideoProps, "player" | "nativeControls">;

interface VideoPlayerProps extends ExpoVideoPropsOmitted, MediaPlayerProps {
  resizeMode?: ResizeMode;
  posterResizeMode?: ImageResizeMode;
  posterSource?: ImageProps["source"];
  usePoster?: boolean;
  playsInSilentModeIOS?: boolean;
  isMuted?: boolean;
  useNativeControls?: boolean;
  shouldPlay?: boolean;
  isLooping?: boolean;
  positionMillis?: number;
  rate?: number;
  volume?: number;
  allowsFullscreen?: boolean;
}

export interface VideoPlayerRef extends MediaPlayerRef {
  toggleFullscreen: () => void;
}

const VideoPlayer = React.forwardRef<VideoPlayerRef, VideoPlayerProps>(
  (
    {
      style,
      resizeMode = "contain",
      posterResizeMode = "cover",
      posterSource,
      usePoster = false,
      onPlaybackStatusUpdate: onPlaybackStatusUpdateProp,
      onPlaybackFinish,
      source,
      playsInSilentModeIOS = false,
      isMuted = false,
      useNativeControls = true,
      shouldPlay = false,
      isLooping = false,
      positionMillis,
      allowsFullscreen = true,
      rate = 1,
      volume = 1,
      ...rest
    },
    ref
  ) => {
    // @ts-ignore
    const { className, ...videoPlayerProps } = rest;

    const stableSource = useSourceDeepCompareMemoize(
      normalizeBase64Source(source, "video")
    );

    const player = useVideoPlayer(stableSource, (p) => {
      p.loop = isLooping;
      p.muted = isMuted;
      p.volume = volume;
      p.playbackRate = rate;
    });

    const videoPlayerRef = React.useRef<VideoPlayerComponent>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const [showPoster, setShowPoster] = React.useState(
      usePoster && !!posterSource
    );

    const mediaPlaybackWrapperRef = React.useRef<MediaPlayerRef>(null);

    const sizeStyles = extractSizeStyles(style);

    React.useEffect(() => {
      player.muted = isMuted;
    }, [player, isMuted]);

    React.useEffect(() => {
      player.loop = isLooping;
    }, [player, isLooping]);

    React.useEffect(() => {
      player.volume = volume;
    }, [player, volume]);

    React.useEffect(() => {
      player.playbackRate = rate;
    }, [player, rate]);

    // Refs so statusChange can read latest shouldPlay/positionMillis
    const shouldPlayRef = React.useRef(shouldPlay);
    const positionMillisRef = React.useRef(positionMillis);
    shouldPlayRef.current = shouldPlay;
    positionMillisRef.current = positionMillis;

    const hasAppliedInitialState = React.useRef(false);

    React.useEffect(() => {
      const timeUpdateSub = player.addListener("timeUpdate", (status) => {
        onPlaybackStatusUpdateProp?.(mapToMediaPlayerStatus(status, player));
      });

      const playingChangeSub = player.addListener(
        "playingChange",
        ({ isPlaying: playing }) => {
          setIsPlaying(playing);
          onPlaybackStatusUpdateProp?.(mapPlayerToMediaPlayerStatus(player));
        }
      );

      const playToEndSub = player.addListener("playToEnd", () => {
        onPlaybackFinish?.();
      });

      const statusChangeSub = player.addListener(
        "statusChange",
        ({ status, error }) => {
          if (status === "readyToPlay") {
            setShowPoster(false);
            if (!hasAppliedInitialState.current) {
              hasAppliedInitialState.current = true;
              if (positionMillisRef.current) {
                player.currentTime = positionMillisRef.current / 1000;
              }
              if (shouldPlayRef.current) {
                player.play();
              }
            }
          }
          const mappedStatus = mapPlayerToMediaPlayerStatus(player);
          onPlaybackStatusUpdateProp?.(
            status === "error" && error
              ? { ...mappedStatus, isError: true, error: error.message }
              : mappedStatus
          );
        }
      );

      return () => {
        timeUpdateSub.remove();
        playingChangeSub.remove();
        playToEndSub.remove();
        statusChangeSub.remove();
      };
    }, []);

    // Replace video source when it changes (deep comparison on URI to avoid unnecessary reloads)
    const isFirstSourceRender = React.useRef(true);
    useSourceDeepCompareEffect(() => {
      if (isFirstSourceRender.current) {
        isFirstSourceRender.current = false;
        return;
      }
      hasAppliedInitialState.current = false;
      player.replace(normalizeBase64Source(source, "video") as VideoSource);
    }, [source]);

    let mappedVideoContentFit: VideoContentFit;
    switch (resizeMode) {
      case "contain":
        mappedVideoContentFit = "contain";
        break;
      case "cover":
        mappedVideoContentFit = "cover";
        break;
      case "stretch":
        mappedVideoContentFit = "fill";
        break;
    }

    const onFullscreenUpdate = (type: "entered" | "exited") => {
      switch (type) {
        case "entered":
          setIsFullscreen(true);
          break;
        case "exited":
          setIsFullscreen(false);
          break;
      }
    };

    const toggleFullscreen = React.useCallback(async () => {
      if (videoPlayerRef) {
        if (isFullscreen) {
          await videoPlayerRef.current?.exitFullscreen();
        } else {
          await videoPlayerRef.current?.enterFullscreen();
        }
      }
    }, [isFullscreen]);

    const updateAudioMode = React.useCallback(async () => {
      try {
        await setAudioModeAsync({
          playsInSilentMode: playsInSilentModeIOS,
        });
      } catch (e) {
        console.error("Failed to set audio mode. Error details:", e);
      }
    }, [playsInSilentModeIOS]);

    React.useImperativeHandle(
      ref,
      () => ({
        toggleFullscreen,
        seekToPosition:
          mediaPlaybackWrapperRef.current?.seekToPosition || (() => {}),
        togglePlayback:
          mediaPlaybackWrapperRef.current?.togglePlayback || (() => {}),
        pause: mediaPlaybackWrapperRef.current?.pause || (() => {}),
        play: mediaPlaybackWrapperRef.current?.play || (() => {}),
      }),
      // Include 'isPlaying' as dependency because 'togglePlayback' changes when it changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [toggleFullscreen, isPlaying]
    );

    return (
      <MediaPlaybackWrapper
        player={player}
        isPlaying={isPlaying}
        ref={mediaPlaybackWrapperRef}
        onTogglePlayback={updateAudioMode}
      >
        <View
          style={[style, styles.container]}
          // @ts-ignore
          className={className}
        >
          <VideoPlayerComponent
            ref={videoPlayerRef}
            player={player}
            nativeControls={useNativeControls}
            style={sizeStyles}
            contentFit={mappedVideoContentFit}
            onFullscreenEnter={() => onFullscreenUpdate("entered")}
            onFullscreenExit={() => onFullscreenUpdate("exited")}
            fullscreenOptions={{ enable: allowsFullscreen }}
            {...videoPlayerProps}
          />
          {showPoster && posterSource && (
            <View style={[StyleSheet.absoluteFill, { pointerEvents: "none" }]}>
              <Image
                source={posterSource}
                resizeMode={posterResizeMode}
                style={[StyleSheet.absoluteFill, sizeStyles]}
              />
            </View>
          )}
        </View>
      </MediaPlaybackWrapper>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});

function mapPlayerToMediaPlayerStatus(
  player: VideoPlayerType
): MediaPlayerStatus {
  return {
    isPlaying: player.playing,
    isLoading: player.status === "loading",
    isBuffering: player.status === "loading",
    currentPositionMillis: player.currentTime * 1000,
    durationMillis: player.duration * 1000,
    bufferedDurationMillis: player.bufferedPosition * 1000,
    isError: player.status === "error",
  };
}

export function mapToMediaPlayerStatus(
  status: TimeUpdateEventPayload,
  player: VideoPlayerType
): MediaPlayerStatus {
  return {
    ...mapPlayerToMediaPlayerStatus(player),
    currentPositionMillis: status.currentTime * 1000,
    bufferedDurationMillis: status.bufferedPosition * 1000,
  };
}

export default VideoPlayer;
