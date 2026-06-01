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

export interface SwiperProps
  extends Omit<ViewProps, "style" | "children" | "className"> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const SwiperItem = ({ children, style, className, ...rest }: SwiperProps) => (
  <View
    style={[styles.wrapper, style]}
    // @ts-ignore
    className={className}
    {...rest}
  >
    {children}
  </View>
);

export default SwiperItem;
