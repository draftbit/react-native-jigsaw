import * as React from "react";
import {
  Audio,
  AVPlaybackStatus,
  InterruptionModeIOS,
  InterruptionModeAndroid,
} from "expo-av";
import { HeadlessAudioPlayerProps } from "./AudioPlayerCommon";
import {
  mapToMediaPlayerStatus,
  normalizeBase64Source,
  useSourceDeepCompareEffect,
} from "../MediaPlayerCommon";
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
      isLooping = false,
      volume = 1.0,
    },
    ref
  ) => {
    const [currentSound, setCurrentSound] = React.useState<Audio.Sound>();
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
      if (
        currentSound &&
        typeof currentSound?.setIsLoopingAsync === "function"
      ) {
        currentSound.setIsLoopingAsync(isLooping);
      }
    }, [currentSound, isLooping]);

    React.useEffect(() => {
      if (currentSound && typeof currentSound?.setVolumeAsync === "function") {
        currentSound.setVolumeAsync(volume);
      }
    }, [currentSound, volume]);

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

    const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
      const mappedStatus = mapToMediaPlayerStatus(status);
      onPlaybackStatusUpdateProp?.(mappedStatus);

      if (status.isLoaded) {
        if (status.didJustFinish) {
          if (isLooping) {
            return;
          }
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

      const finalSource = await normalizeBase64Source(source, "audio");

      const { sound } = await Audio.Sound.createAsync(finalSource);
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

export default HeadlessAudioPlayer;
