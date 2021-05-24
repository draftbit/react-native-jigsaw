import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { withTheme } from "../theming";
import Theme from "../styles/DefaultTheme";

type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: typeof Theme;
};

export const Title = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: 20,
          letterSpacing: 0,
          lineHeight: 26,
          color: theme.colors.text,
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
          color: theme.colors.medium,
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
          color: theme.colors.light,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
});
