import * as React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

import Config from "./Config";

type SVGComponentProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const SVG: React.FC<React.PropsWithChildren<SVGComponentProps>> = ({
  source = Config.placeholderSvgURL,
  style,
}) => {
  return <Image style={style} source={{ uri: source }} />;
};

export default SVG;
