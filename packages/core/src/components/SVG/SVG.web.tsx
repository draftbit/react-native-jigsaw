import * as React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

import Config from "./Config";

type SVGComponentProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const SVG = ({ source, style }: SVGComponentProps) => {
  let svgSource =
    source === null || source === undefined ? Config.placeholderSvgURL : source;

  return (
    <>
      <Image style={style} source={{ uri: svgSource }} />
    </>
  );
};

export default SVG;
