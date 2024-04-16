import { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { Theme } from "@draftbit/theme";
import { MediaPlayerProps } from "../MediaPlayerCommon";

export type AudioInterruptionMode = "lower volume" | "stop";

export interface HeadlessAudioPlayerProps extends MediaPlayerProps {
  interruptionMode?: AudioInterruptionMode;
  playsInBackground?: boolean;
  playsInSilentModeIOS?: boolean;
  playThroughEarpieceAndroid?: boolean;
}

export interface AudioPlayerInterfaceProps {
  style?: StyleProp<ViewStyle & TextStyle>;
  thumbColor?: string;
  completedTrackColor?: string;
  remainingTrackColor?: string;
  togglePlaybackIconSize?: number;
  togglePlaybackIconColor?: string;
  hidePlaybackIcon?: boolean;
  hideDuration?: boolean;
  hideSlider?: boolean;
  theme: Theme;
}
