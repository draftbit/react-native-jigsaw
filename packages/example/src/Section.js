import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "@draftbit/ui";

export function Container({ style, children }) {
  return <View style={[styles.space, style]}>{children}</View>;
}

function Section({ title, children, theme, style }) {
  return (
    <View style={{ marginBottom: theme.spacing.medium }}>
      <Text
        style={[
          theme.typography.headline5,
          { marginBottom: theme.spacing.small },
        ]}
      >
        {title}
      </Text>
      <View style={style}>{children}</View>
    </View>
  );
}

export default withTheme(Section);

export const styles = StyleSheet.create({
  space: {
    margin: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
