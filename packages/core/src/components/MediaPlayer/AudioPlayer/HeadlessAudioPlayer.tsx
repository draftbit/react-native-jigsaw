import * as React from "react";
import {
  Audio,
  AVPlaybackStatus,
  InterruptionModeIOS,
  InterruptionModeAndroid,
} from "expo-av";
import { HeadlessAudioPlayerProps } from "./AudioPlayerCommon";
import { mapToMediaPlayerStatus } from "../MediaPlayerCommon";
import type { MediaPlayerRef } from "../MediaPlayerCommon";
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
    },
    ref
  ) => {
    const [currentSound, setCurrentSound] = React.useState<Audio.Sound>();
    const [isPlaying, setIsPlaying] = React.useState(false);

    const updateAudioMode = React.useCallback(async () => {
      try {
        await Audio.setAudioModeAsync({
          staysActiveInBackground: playsInBackground,
          interruptionModeIOS:
            interruptionMode === "lower volume"
              ? InterruptionModeIOS.DuckOthers
              : InterruptionModeIOS.DoNotMix,
          interruptionModeAndroid:
            interruptionMode === "lower volume"
              ? InterruptionModeAndroid.DuckOthers
              : InterruptionModeAndroid.DoNotMix,
          playsInSilentModeIOS,
          playThroughEarpieceAndroid,
        });
      } catch (e) {
        console.error(
          "Failed to set audio mode. interruptionMode, playsInBackground, playsInSilentModeIOS, playThroughEarpieceAndroid might not be set. Failed with",
          e
        );
      }
    }, [
      interruptionMode,
      playsInBackground,
      playsInSilentModeIOS,
      playThroughEarpieceAndroid,
    ]);

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

    const onTogglePlayback = () => {
      //Has to be called everytime a player is played to reconfigure the global Audio config based on each player's configuration
      updateAudioMode();
    };

    const loadAudio = async () => {
      onPlaybackStatusUpdateProp?.({
        isPlaying: false,
        isLoading: true,
        isBuffering: false,
        currentPositionMillis: 0,
        durationMillis: 0,
        bufferedDurationMillis: 0,
        isError: false,
      });

      const { sound } = await Audio.Sound.createAsync(source);
      setCurrentSound(sound);
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    };

    useSourceDeepCompareEffect(() => {
      loadAudio();

      // Ignore dependency of loadAudio
    }, [source]);

    return (
      <MediaPlaybackWrapper
        ref={ref}
        isPlaying={isPlaying}
        media={currentSound}
        onTogglePlayback={onTogglePlayback}
      />
    );
  }
);

// The source provided into the AudioPlayer can be of type {uri: "some uri"}
// In the case that this object is created inline, each rerender provides a new source object because a new object is initialized everytime
// This creates an issue with being a useEffect dependency
//
// This creates variants of useEffect that checks deep equality of 'uri' to determine if dependency changed or not
// Follows: https://stackoverflow.com/a/54096391
function sourceDeepCompareEquals(a: any, b: any) {
  if (a?.uri && b?.uri) {
    return a.uri === b.uri;
  }
  return a === b;
}

function useSourceDeepCompareMemoize(value: any) {
  const ref = React.useRef();
  if (!sourceDeepCompareEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

function useSourceDeepCompareEffect(
  callback: React.EffectCallback,
  dependencies: React.DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, dependencies.map(useSourceDeepCompareMemoize));
}

export default HeadlessAudioPlayer;
