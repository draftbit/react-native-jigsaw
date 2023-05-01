import * as React from "react";
import {
  Audio,
  AVPlaybackStatus,
  InterruptionModeIOS,
  InterruptionModeAndroid,
} from "expo-av";
import {
  HeadlessAudioPlayerProps,
  HeadlessAudioPlayerRef,
} from "./AudioPlayerCommon";

/**
 * Audio Player component without an interface (UI).
 * Only handles playing of the audio and provides callbacks and ref functions
 */
const HeadlessAudioPlayer = React.forwardRef<
  HeadlessAudioPlayerRef,
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
      if (status.isLoaded) {
        onPlaybackStatusUpdateProp?.({
          isPlaying: status.isPlaying,
          isLoading: false,
          isBuffering: status.isBuffering,
          currentPositionMillis: status.positionMillis || 0,
          durationMillis: status.durationMillis || 0,
          bufferedDurationMillis: status.playableDurationMillis || 0,
          isError: false,
        });

        if (status.didJustFinish) {
          onPlaybackFinish?.();
        }

        setIsPlaying(status.isPlaying);
      } else if (status.error) {
        onPlaybackStatusUpdateProp?.({
          isPlaying: false,
          isLoading: false,
          isBuffering: false,
          currentPositionMillis: 0,
          durationMillis: 0,
          bufferedDurationMillis: 0,
          isError: true,
          error: status.error,
        });
      }
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

    const togglePlayback = React.useCallback(async () => {
      //Has to be called everytime a player is played to reconfigure the global Audio config based on each player's configuration
      await updateAudioMode();

      if (isPlaying) {
        await currentSound?.pauseAsync();
      } else {
        await currentSound?.playAsync();
      }
    }, [currentSound, updateAudioMode, isPlaying]);

    const seekToPosition = React.useCallback(
      async (positionMillis: number) => {
        await currentSound?.setPositionAsync(positionMillis);
      },
      [currentSound]
    );

    useSourceDeepCompareEffect(() => {
      loadAudio();

      // Ignore dependency of loadAudio
    }, [source]);

    React.useEffect(() => {
      return currentSound
        ? () => {
            currentSound.unloadAsync();
          }
        : undefined;
    }, [currentSound]);

    React.useImperativeHandle(
      ref,
      () => {
        return {
          seekToPosition,
          togglePlayback,
        };
      },
      [seekToPosition, togglePlayback]
    );

    return null;
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
