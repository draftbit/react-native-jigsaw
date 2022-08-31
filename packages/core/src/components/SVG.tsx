import * as React from "react";
import { View, Platform, Image, StyleProp, ImageStyle } from "react-native";
import { SvgUri } from "react-native-svg";

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
      {Platform.OS === "ios" && (
        <View style={style}>
          <SvgUri width="100%" height="100%" uri={svgSource} />
        </View>
      )}
      {Platform.OS === "android" && (
        <View style={style}>
          <SvgUri width="100%" height="100%" uri={svgSource} />
        </View>
      )}
      {Platform.OS === "web" && (
        <Image style={style} source={{ uri: svgSource }} />
      )}
    </>
  );
};

export default SVG;
