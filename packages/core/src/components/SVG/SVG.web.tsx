import * as React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

type SvgComponentProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const SVG: React.FC<React.PropsWithChildren<SvgComponentProps>> = ({
  svgSource = "https://static.draftbit.com/images/placeholder-image.svg",
  style,
}) => {
  return <Image style={style} source={{ uri: svgSource }} />;
};

export default SVG;
