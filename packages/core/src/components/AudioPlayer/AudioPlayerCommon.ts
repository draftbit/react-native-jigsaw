import { AVPlaybackSource } from "expo-av";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";

export type AudioInterruptionMode = "lower volume" | "stop";

export interface AudioPlayerStatus {
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  currentPositionMillis: number;
  durationMillis: number;
  bufferedDurationMillis: number;
  isError: boolean;
  error?: string;
}

export interface HeadlessAudioPlayerRef {
  seekToPosition: (positionMillis: number) => void;
  togglePlayback: () => void;
}

export interface HeadlessAudioPlayerProps {
  onPlaybackStatusUpdate?: (status: AudioPlayerStatus) => void;
  onPlaybackFinish?: () => void;
  source: AVPlaybackSource;
  interruptionMode?: AudioInterruptionMode;
  playsInBackground?: boolean;
  playsInSilentModeIOS?: boolean;
  playThroughEarpieceAndroid?: boolean;
}

export interface AudioPlayerInterfaceProps {
  style?: StyleProp<ViewStyle & TextStyle>;
  sliderColor?: string;
  completedTrackColor?: string;
  remainingTrackColor?: string;
  togglePlaybackIconSize?: number;
  togglePlaybackIconColor?: string;
  hidePlaybackIcon?: boolean;
  hideDuration?: boolean;
  hideSlider?: boolean;
  theme: Theme;
}
