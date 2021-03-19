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
      style={[theme.typography.headline5, { color: theme.colors.text }, style]}
    >
      {text}
    </Text>
  );
});

export const Subtitle = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      numberOfLines={1}
      style={[theme.typography.body2, { color: theme.colors.medium }, style]}
    >
      {text}
    </Text>
  );
});

export const Caption = withTheme(({ text, theme, style }: Props) => {
  return (
    <Text
      style={[theme.typography.subtitle2, { color: theme.colors.light }, style]}
    >
      {text}
    </Text>
  );
});
