import React from "react";
import { ImageResizeMode } from "react-native";
import {
  Video as VideoPlayerComponent,
  VideoProps as ExpoVideoProps,
  ResizeMode as ExpoResizeMode,
  AVPlaybackStatus,
  VideoFullscreenUpdate,
} from "expo-av";
import { extractSizeStyles } from "../../../utilities";
import MediaPlaybackWrapper from "../MediaPlaybackWrapper";
import type { Playback } from "expo-av/src/AV";
import {
  MediaPlayerProps,
  MediaPlayerRef,
  mapToMediaPlayerStatus,
} from "../MediaPlayerCommon";

type ResizeMode = "contain" | "cover" | "stretch";
type ExpoVideoPropsOmitted = Omit<
  ExpoVideoProps,
  "videoStyle" | "resizeMode" | "onPlaybackStatusUpdate" | "source"
>;

interface VideoPlayerProps extends ExpoVideoPropsOmitted, MediaPlayerProps {
  resizeMode?: ResizeMode;
  posterResizeMode?: ImageResizeMode;
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
      onPlaybackStatusUpdate: onPlaybackStatusUpdateProp,
      onPlaybackFinish,
      ...rest
    },
    ref
  ) => {
    const [videoMediaObject, setVideoMediaObject] =
      React.useState<VideoPlayerComponent | null>();
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const mediaPlaybackWrapperRef = React.useRef<MediaPlayerRef>(null);

    const sizeStyles = extractSizeStyles(style);

    let mappedResizeMode;
    switch (resizeMode) {
      case "contain":
        mappedResizeMode = ExpoResizeMode.CONTAIN;
        break;
      case "cover":
        mappedResizeMode = ExpoResizeMode.COVER;
        break;
      case "stretch":
        mappedResizeMode = ExpoResizeMode.STRETCH;
        break;
    }

    const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
      const mappedStatus = mapToMediaPlayerStatus(status);
      onPlaybackStatusUpdateProp?.(mappedStatus);

      if (status.isLoaded) {
        if (status.didJustFinish) {
          onPlaybackFinish?.();
        }
        setIsPlaying(status.isPlaying);
      }
    };

    const onFullscreenUpdate = (fullscreenUpdate: VideoFullscreenUpdate) => {
      switch (fullscreenUpdate) {
        case VideoFullscreenUpdate.PLAYER_DID_PRESENT:
        case VideoFullscreenUpdate.PLAYER_WILL_PRESENT:
          setIsFullscreen(true);
          break;
        case VideoFullscreenUpdate.PLAYER_DID_DISMISS:
        case VideoFullscreenUpdate.PLAYER_WILL_DISMISS:
          setIsFullscreen(false);
          break;
      }
    };

    const toggleFullscreen = React.useCallback(async () => {
      if (isFullscreen) {
        await videoMediaObject?.dismissFullscreenPlayer();
      } else {
        await videoMediaObject?.presentFullscreenPlayer();
      }
    }, [isFullscreen, videoMediaObject]);

    React.useImperativeHandle(
      ref,
      () => ({
        toggleFullscreen,
        seekToPosition:
          mediaPlaybackWrapperRef.current?.seekToPosition || (() => {}),
        togglePlayback:
          mediaPlaybackWrapperRef.current?.togglePlayback || (() => {}),
      }),
      // Include 'isPlaying' as dependency because 'togglePlayback' changes when it changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [toggleFullscreen, isPlaying]
    );

    return (
      <MediaPlaybackWrapper
        media={videoMediaObject as Playback | undefined}
        isPlaying={isPlaying}
        ref={mediaPlaybackWrapperRef}
      >
        <VideoPlayerComponent
          // https://docs.expo.dev/versions/latest/sdk/av/#example-video to see why ref is handled this way
          ref={(component) => setVideoMediaObject(component)}
          style={style}
          videoStyle={sizeStyles}
          resizeMode={mappedResizeMode}
          posterStyle={[sizeStyles, { resizeMode: posterResizeMode }]}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          onFullscreenUpdate={(e) => onFullscreenUpdate(e.fullscreenUpdate)}
          {...rest}
        />
      </MediaPlaybackWrapper>
    );
  }
);

export default VideoPlayer;
