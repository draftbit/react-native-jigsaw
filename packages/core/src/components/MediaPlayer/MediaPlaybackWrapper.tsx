import * as React from "react";
import type { AudioPlayer } from "expo-audio";
import type { VideoPlayer } from "expo-video";

import type { MediaPlayerRef } from "./MediaPlayerCommon";

interface MediaPlaybackWrapperProps {
  player?: AudioPlayer | VideoPlayer;
  isPlaying?: boolean;
  onTogglePlayback?: () => void;
}

/**
 * Wrapper component that handles common media playback operations that is reusable with audio and video players
 */
const MediaPlaybackWrapper = React.forwardRef<
  MediaPlayerRef,
  React.PropsWithChildren<MediaPlaybackWrapperProps>
>(({ player, isPlaying, onTogglePlayback, children }, ref) => {
  const togglePlayback = React.useCallback(() => {
    onTogglePlayback?.();

    if (isPlaying) {
      player?.pause();
    } else {
      player?.play();
    }
  }, [isPlaying, onTogglePlayback]);

  const pause = React.useCallback(() => {
    onTogglePlayback?.();
    player?.pause();
  }, [player, onTogglePlayback]);

  const play = React.useCallback(() => {
    onTogglePlayback?.();
    player?.play();
  }, [player, onTogglePlayback]);

  const seekToPosition = React.useCallback(
    (positionMillis: number) => {
      if (typeof (player as any)?.seekTo === "function") {
        (player as AudioPlayer).seekTo(positionMillis / 1000);
      } else if (player) {
        player.currentTime = positionMillis / 1000;
      }
    },
    [player]
  );

  React.useImperativeHandle(
    ref,
    () => ({
      seekToPosition,
      togglePlayback,
      pause,
      play,
    }),
    [seekToPosition, togglePlayback, pause, play]
  );

  return <>{children}</>;
});

export default MediaPlaybackWrapper;
