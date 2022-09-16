import * as React from "react";
import {
  View,
  Platform,
  Image,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { withTheme } from "../theming";

import Config from "./Config";

type SvgComponentProps = {
  source: string | ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

const Svg = ({ source, style }: SvgComponentProps) => {
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

export default withTheme(Svg);
