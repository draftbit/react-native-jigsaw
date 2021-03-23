import React from "react";
import { Text } from "react-native";
import { withTheme } from "../core/theming";
import Theme from "../styles/DefaultTheme";

type Props = {
  text: string;
  theme: typeof Theme;
};

export const Title = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      numberOfLines={1}
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
      numberOfLines={1}
      style={[
        {
          fontSize: 14,
          letterSpacing: 0,
          lineHeight: 22,
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
          lineHeight: 16,
          color: theme.colors.light,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
});
