import * as React from "react";
import { useAudioPlayer, setAudioModeAsync, AudioStatus } from "expo-audio";
import { HeadlessAudioPlayerProps } from "./AudioPlayerCommon";
import {
  normalizeBase64Source,
  useSourceDeepCompareMemoize,
} from "../MediaPlayerCommon";
import type { MediaPlayerRef, MediaPlayerStatus } from "../MediaPlayerCommon";
import MediaPlaybackWrapper from "../MediaPlaybackWrapper";

/**
 * Audio Player component without an interface (UI).
 * Only handles playing of the audio and provides callbacks and ref functions
 */
const HeadlessAudioPlayer = React.forwardRef<
  MediaPlayerRef,
  HeadlessAudioPlayerProps
>(
  (
    {
      source,
      interruptionMode = "lower volume",
      playsInBackground = false,
      playsInSilentModeIOS = false,
      playThroughEarpieceAndroid = false,
      onPlaybackStatusUpdate: onPlaybackStatusUpdateProp,
      onPlaybackFinish,
      isLooping = false,
      volume = 1.0,
    },
    ref
  ) => {
    const stableSource = useSourceDeepCompareMemoize(
      normalizeBase64Source(source, "audio")
    );
    const player = useAudioPlayer(stableSource);

    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
      player.loop = isLooping;
    }, [player, isLooping]);

    React.useEffect(() => {
      player.volume = volume;
    }, [player, volume]);

    // Emit loading state immediately
    React.useEffect(() => {
      onPlaybackStatusUpdateProp?.({
        isPlaying: false,
        isLoading: true,
        isBuffering: false,
        currentPositionMillis: 0,
        durationMillis: 0,
        bufferedDurationMillis: 0,
        isError: false,
      });
    }, []);

    React.useEffect(() => {
      // 'useAudioPlayer' builds a new player whenever the source changes, so the
      // mirrored playing state has to be resynced
      setIsPlaying(player.playing);

      const subscription = player.addListener(
        "playbackStatusUpdate",
        (status) => {
          const mappedStatus = mapToMediaPlayerStatus(status);
          onPlaybackStatusUpdateProp?.(mappedStatus);

          if (status.isLoaded) {
            if (status.didJustFinish && !isLooping) {
              onPlaybackFinish?.();
            }
            setIsPlaying(status.playing);
          }
        }
      );
      return () => subscription.remove();
    }, [player]);

    const updateAudioMode = React.useCallback(async () => {
      try {
        await setAudioModeAsync({
          shouldPlayInBackground: playsInBackground,
          interruptionMode:
            interruptionMode === "lower volume" ? "duckOthers" : "doNotMix",
          playsInSilentMode: playsInSilentModeIOS,
          shouldRouteThroughEarpiece: playThroughEarpieceAndroid,
        });
      } catch (e) {
        if ((e as { code?: string })?.code === "E_AUDIO_AUDIOMODE") {
          console.warn(
            "Background audio playback only works in published apps, not in preview mode. For iOS apps, add 'audio' under UI Background Modes in Project Settings > Apple App Store."
          );
        } else {
          console.error(
            "Failed to set audio mode. interruptionMode, playsInBackground, playsInSilentModeIOS, playThroughEarpieceAndroid might not be set. Failed with",
            e
          );
        }
      }
    }, [
      interruptionMode,
      playsInBackground,
      playsInSilentModeIOS,
      playThroughEarpieceAndroid,
    ]);

    const onTogglePlayback = () => {
      // Has to be called everytime a player is played to reconfigure the global Audio config based on each player's configuration
      updateAudioMode();
    };

    return (
      <MediaPlaybackWrapper
        ref={ref}
        isPlaying={isPlaying}
        player={player}
        onTogglePlayback={onTogglePlayback}
      />
    );
  }
);

export function mapToMediaPlayerStatus(status: AudioStatus): MediaPlayerStatus {
  if (status.isLoaded) {
    return {
      isPlaying: status.playing,
      isLoading: false,
      isBuffering: status.isBuffering,
      currentPositionMillis: status.currentTime * 1000,
      durationMillis: status.duration * 1000,
      bufferedDurationMillis: status.duration * 1000,
      isError: false,
    };
  }

  return {
    isPlaying: false,
    isLoading: true,
    isBuffering: false,
    currentPositionMillis: 0,
    durationMillis: 0,
    bufferedDurationMillis: 0,
    isError: false,
  };
}

export default HeadlessAudioPlayer;
