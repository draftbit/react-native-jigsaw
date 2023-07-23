import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { convertBackwardCompatiblePropsToStyle } from "./LayoutCommon";

const Center: React.FC<ViewProps> = ({ style, ...rest }) => {
  const backwardsCompatibleStyle = convertBackwardCompatiblePropsToStyle(rest);
  return (
    <View {...rest} style={[styles.center, backwardsCompatibleStyle, style]} />
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Center;
