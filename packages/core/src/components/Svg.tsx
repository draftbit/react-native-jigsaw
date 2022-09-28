import * as React from "react";
import {
  View,
  Platform,
  Image,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { SvgUri } from "react-native-svg";

import Config from "./Config";

type SvgComponentProps = {
  source: string;
  style?: StyleProp<ViewStyle | ImageStyle>;
};

const Svg: React.FC<React.PropsWithChildren<SvgComponentProps>> = ({
  source = Config.placeholderSvgURL,
  style,
}) => {
  return (
    <>
      {Platform.OS === "ios" && (
        <View style={style}>
          <SvgUri width="100%" height="100%" uri={source} />
        </View>
      )}
      {Platform.OS === "android" && (
        <View style={style}>
          <SvgUri width="100%" height="100%" uri={source} />
        </View>
      )}
      {Platform.OS === "web" && (
        <Image style={style} source={{ uri: source }} />
      )}
    </>
  );
};

export default Svg;
