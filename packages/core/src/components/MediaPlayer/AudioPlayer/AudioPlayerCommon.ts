import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { MediaPlayerProps } from "../MediaPlayerCommon";

export type AudioInterruptionMode = "lower volume" | "stop";

export interface HeadlessAudioPlayerProps extends MediaPlayerProps {
  interruptionMode?: AudioInterruptionMode;
  playsInBackground?: boolean;
  playsInSilentModeIOS?: boolean;
  playThroughEarpieceAndroid?: boolean;
  isLooping?: boolean;
  volume?: number;
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
}
