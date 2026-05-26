import * as React from "react";
import { View, StyleProp, ViewStyle, ImageStyle } from "react-native";
import { SvgUri } from "react-native-svg";

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
    <View
      style={style as StyleProp<ViewStyle>}
      {...(className ? ({ className } as any) : {})}
    >
      <SvgUri width="100%" height="100%" uri={source} />
    </View>
  );
};

export default SVG;
