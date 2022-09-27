import * as React from "react";
import { View, Platform, Image } from "react-native";
import { SvgUri } from "react-native-svg";

const Svg = ({ source, style }: { source: any; style: any }) => {
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
