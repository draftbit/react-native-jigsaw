import React from "react";
import UnsupportedView from "./UnsupportedView.web";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  aspectRatio?: number;
  style?: StyleProp<ViewStyle>;
}
const Video: React.FC<Props> = ({ aspectRatio, style }) => {
  return <UnsupportedView tag="Video" style={[style, { aspectRatio }]} />;
};

export default Video;
