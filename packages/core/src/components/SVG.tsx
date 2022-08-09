import React from "react";
import { SvgUri } from "react-native-svg";

import Config from "./Config";

const Svg: React.FC<ImageProps> = ({
  source,
  style,
  ...props
}) => {
  let svgSource =
    source === null || source === undefined
      ? Config.placeholderSvgURL
      : source;

  return (
    <View style={style}>
      <SvgUri
        width="100%"
        height="100%"
        uri={source as ImageSourcePropType}
      />
  </View>

  );
};

export default Image;
