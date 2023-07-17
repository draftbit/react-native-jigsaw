import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

const HStack: React.FC<ViewProps> = ({ style, ...rest }) => {
  return <View {...rest} style={[styles.hStack, style]} />;
};

const styles = StyleSheet.create({
  hStack: {
    flexDirection: "row",
  },
});

export default HStack;
