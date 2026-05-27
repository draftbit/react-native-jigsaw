import React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ViewProps,
} from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export interface SwiperProps extends Omit<ViewProps, "style" | "children"> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SwiperItem = ({ children, style, ...rest }: SwiperProps) => (
  <View style={[styles.wrapper, style]} {...rest}>
    {children}
  </View>
);

export default SwiperItem;
