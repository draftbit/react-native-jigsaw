import { StyleProp, ViewStyle } from "react-native";

export interface YoutubePlayerProps {
  videoId?: string;
  playlist?: string;
  autoplay?: boolean;
  style?: StyleProp<ViewStyle>;
}
