import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

import Config from "../Config";

type SVGComponentProps = {
  source: string;
  style?: StyleProp<ViewStyle>;
};

const SVG = ({ source, style }: SVGComponentProps) => {
  let svgSource =
    source === null || source === undefined ? Config.placeholderSvgURL : source;

  return (
    <View style={style}>
      <SvgUri width="100%" height="100%" uri={svgSource} />
    </View>
  );
};

export default SVG;
