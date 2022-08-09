import React from "react";
import { View, ImageProps, ImageSourcePropType } from "react-native";
import { SvgUri } from "react-native-svg";

import Config from "./Config";

const Svg: React.FC<ImageProps> = ({ source, style }) => {
  let svgSource =
    source === null || source === undefined ? Config.placeholderSvgURL : source;

  return (
    <View style={style}>
      <SvgUri
        width="100%"
        height="100%"
        uri={svgSource as ImageSourcePropType}
      />
    </View>
  );
};

export default Svg;
