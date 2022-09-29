import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
export interface TableRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const TableRow = ({ children, style, theme, ...rest }: TableRowProps) => (
  <View
    {...rest}
    style={[styles.container, { borderBottomColor: theme.colors.light }, style]}
  >
    <View style={styles.content}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
});

export default withTheme(TableRow);
