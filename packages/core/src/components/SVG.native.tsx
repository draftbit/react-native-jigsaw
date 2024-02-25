import * as React from "react";
import { View, StyleProp, ImageStyle } from "react-native";
import { SvgUri } from "react-native-svg";

import Config from "./Config";

type SVGComponentProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const SVG: React.FC<React.PropsWithChildren<SVGComponentProps>> = ({
  source = Config.placeholderSvgURL,
  style,
}) => {
  return (
    <View style={style}>
      <SvgUri width="100%" height="100%" uri={source} />
    </View>
  );
};

export default SVG;
