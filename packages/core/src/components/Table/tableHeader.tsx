import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";

export interface TableHeaderProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const TableHeader = ({ children, style, theme, ...rest }: TableHeaderProps) => (
  <View
    {...rest}
    style={[styles.wrapper, { borderBottomColor: theme.colors.medium }, style]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
});

export default withTheme(TableHeader);
