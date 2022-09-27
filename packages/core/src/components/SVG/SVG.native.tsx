import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

type SvgComponentProps = {
  source: string;
  style?: StyleProp<ViewStyle>;
};

const SVG: React.FC<React.PropsWithChildren<SvgComponentProps>> = ({
  source = "https://static.draftbit.com/images/placeholder-image.svg",
  style,
}) => {
  return (
    <View style={style}>
      <SvgUri width="100%" height="100%" uri={source} />
    </View>
  );
};

export default SVG;
