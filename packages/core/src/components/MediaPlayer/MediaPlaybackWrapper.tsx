import * as React from "react";
import type { Playback } from "expo-av/src/AV";

import { MediaPlayerRef } from "./MediaPlayerCommon";

interface MediaPlaybackWrapperProps {
  media?: Playback;
  isPlaying?: boolean;
  onTogglePlayback?: () => void;
}

/**
 * Wrapper component that handles common media playback operations that is reusable with audio and video players
 */
const MediaPlaybackWrapper = React.forwardRef<
  MediaPlayerRef,
  React.PropsWithChildren<MediaPlaybackWrapperProps>
>(({ media, isPlaying, onTogglePlayback, children }, ref) => {
  const togglePlayback = React.useCallback(async () => {
    onTogglePlayback?.();

    if (isPlaying) {
      await media?.pauseAsync();
    } else {
      await media?.playAsync();
    }
  }, [media, isPlaying, onTogglePlayback]);

  const seekToPosition = React.useCallback(
    async (positionMillis: number) => {
      await media?.setPositionAsync(positionMillis);
    },
    [media]
  );

  React.useEffect(() => {
    return media
      ? () => {
          media.unloadAsync();
        }
      : undefined;
  }, [media]);

  React.useImperativeHandle(
    ref,
    () => ({
      seekToPosition,
      togglePlayback,
    }),
    [seekToPosition, togglePlayback]
  );

  return <>{children}</>;
});

export default MediaPlaybackWrapper;
