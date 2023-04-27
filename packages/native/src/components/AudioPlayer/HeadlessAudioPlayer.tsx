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
    }, [
      interruptionMode,
      playsInBackground,
      playsInSilentModeIOS,
      playThroughEarpieceAndroid,
    ]);

    const onPlaybackStatusUpdate = React.useCallback(
      (status: AVPlaybackStatus) => {
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
      },
      [onPlaybackStatusUpdateProp, onPlaybackFinish]
    );

    const loadAudio = React.useCallback(async () => {
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
    }, [onPlaybackStatusUpdateProp, onPlaybackStatusUpdate, source]);

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

    const isUriBasedSource = (object: any): boolean => {
      return !!(object as any).uri;
    };

    // 2 useEffects with the same purpose
    // First one used in the case that the source is an object with 'uri', and has 'uri' as the dependenancy
    // Second is used in any other case. For example if source is in the format require('X'). And uses the source itself as the dependenancy
    //
    // This prevents useEffect from infinite calls caused when a 'uri' based source is created in an inline object that results in a new source object everytime
    React.useEffect(() => {
      if (isUriBasedSource(source)) {
        loadAudio();
      }

      // Intentionally leaving out source
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(source as any).uri, loadAudio]);

    React.useEffect(() => {
      if (!isUriBasedSource(source)) {
        loadAudio();
      }
    }, [source, loadAudio]);

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

export default HeadlessAudioPlayer;
