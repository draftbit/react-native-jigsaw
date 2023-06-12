import React from "react";
import { StyleProp, ViewStyle, View, StyleSheet } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import CodeInputText from "./CodeInputText";

interface CodeInputCellProps {
  style: StyleProp<ViewStyle>;
}

const CodeInputCell: React.FC<React.PropsWithChildren<CodeInputCellProps>> = ({
  style,
  children,
}) => {
  return <View style={[styles.cell, style]} children={children} />;
};

interface DefaultCodeInputCellProps {
  cellValue: string;
  isFocused: boolean;
  theme: Theme;
}

export const DefaultCodeInputCell = withTheme(
  ({ cellValue, isFocused, theme }: DefaultCodeInputCellProps) => {
    return (
      <View
        style={[
          styles.cell,
          {
            padding: 10,
            backgroundColor: isFocused ? "transparent" : theme.colors.disabled,
            borderWidth: isFocused ? 2 : 0,
            borderColor: theme.colors.primary,
            borderRadius: 5,
            alignContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <CodeInputText
          style={{
            color: theme.colors.strong,
            fontSize: 30,
          }}
          isFocused={isFocused}
        >
          {cellValue}
        </CodeInputText>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  cell: { marginStart: 5, marginEnd: 5 },
});

export default CodeInputCell;
