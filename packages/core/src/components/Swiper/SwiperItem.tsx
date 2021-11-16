import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export interface SwiperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SwiperItem = ({ children, style }: SwiperProps) => (
  <View style={[styles.wrapper, style]}>{children}</View>
);

export default SwiperItem;
