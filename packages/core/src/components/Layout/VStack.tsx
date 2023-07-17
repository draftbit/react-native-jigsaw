import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

const VStack: React.FC<ViewProps> = ({ style, ...rest }) => {
  return <View {...rest} style={[styles.vStack, style]} />;
};

const styles = StyleSheet.create({
  vStack: {
    flexDirection: "column",
  },
});

export default VStack;
