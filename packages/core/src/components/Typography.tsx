import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: ReadTheme;
};

export const Title = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: 20,
          letterSpacing: 0,
          lineHeight: 26,
          color: theme.colors.text.normal,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
});

export const Subtitle = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: 14,
          letterSpacing: 0,
          lineHeight: 16,
          color: theme.colors.text.medium,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
});

export const Caption = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: 12,
          letterSpacing: 0,
          lineHeight: 14,
          color: theme.colors.text.light,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
});
