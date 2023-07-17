import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

const Center: React.FC<ViewProps> = ({ style, ...rest }) => {
  return <View {...rest} style={[styles.center, style]} />;
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Center;
