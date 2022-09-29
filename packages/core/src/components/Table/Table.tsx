import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";

export interface TableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Table = ({ children, style, ...rest }: TableProps) => (
  <View {...rest} style={[styles.wrapper, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
});

export default Table;
