import { AVPlaybackSource, AVPlaybackStatus } from "expo-av";

export interface MediaPlayerStatus {
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  currentPositionMillis: number;
  durationMillis: number;
  bufferedDurationMillis: number;
  isError: boolean;
  error?: string;
}

export interface MediaPlayerRef {
  seekToPosition: (positionMillis: number) => void;
  togglePlayback: () => void;
  pause: () => void;
  play: () => void;
}

export interface MediaPlayerProps {
  onPlaybackStatusUpdate?: (status: MediaPlayerStatus) => void;
  onPlaybackFinish?: () => void;
  source: AVPlaybackSource;
}

export function mapToMediaPlayerStatus(
  status: AVPlaybackStatus
): MediaPlayerStatus {
  if (status.isLoaded) {
    return {
      isPlaying: status.isPlaying,
      isLoading: false,
      isBuffering: status.isBuffering,
      currentPositionMillis: status.positionMillis || 0,
      durationMillis: status.durationMillis || 0,
      bufferedDurationMillis: status.playableDurationMillis || 0,
      isError: false,
    };
  }

  return {
    isPlaying: false,
    isLoading: false,
    isBuffering: false,
    currentPositionMillis: 0,
    durationMillis: 0,
    bufferedDurationMillis: 0,
    isError: true,
    error: status.error,
  };
}
