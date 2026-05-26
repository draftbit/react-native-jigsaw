import * as React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

import Config from "./Config";

type SVGComponentProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
  className?: string;
};

const SVG: React.FC<React.PropsWithChildren<SVGComponentProps>> = ({
  source = Config.placeholderSvgURL,
  style,
  className,
}) => {
  return (
    <Image
      style={style}
      source={{ uri: source }}
      // @ts-ignore
      className={className}
    />
  );
};

export default SVG;
