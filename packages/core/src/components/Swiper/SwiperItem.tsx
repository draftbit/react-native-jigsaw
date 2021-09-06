import { COMPONENT_TYPES } from "@draftbit/types";
import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export const SEED_DATA = {
  name: "Swiper Item",
  tag: "SwiperItem",
  description: "Swiper item",
  category: COMPONENT_TYPES.button,
  props: {},
};
