import { StyleProp, ViewStyle } from "react-native";

export interface YoutubePlayerProps {
  videoId?: string;
  playlist?: string;
  mute?: boolean;
  autoplay?: boolean;
  style?: StyleProp<ViewStyle>;
}
