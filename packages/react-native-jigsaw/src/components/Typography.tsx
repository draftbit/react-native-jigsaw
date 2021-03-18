import React from "react";
import { Text } from "react-native";
import { withTheme } from "../core/theming";
import Theme from "../styles/DefaultTheme";

type Props = {
  text: string;
  theme: typeof Theme;
};

export const Title = withTheme(({ text, theme }: Props) => {
  return (
    <Text
      numberOfLines={1}
      style={[theme.typography.headline4, { color: theme.colors.text }]}
    >
      {text}
    </Text>
  );
});

export const Subtitle = withTheme(({ text, theme }: Props) => {
  return (
    <Text
      numberOfLines={1}
      style={[theme.typography.body2, { color: theme.colors.medium }]}
    >
      {text}
    </Text>
  );
});

export const Caption = withTheme(({ text, theme }: Props) => {
  return (
    <Text
      numberOfLines={1}
      style={[theme.typography.subtitle2, { color: theme.colors.light }]}
    >
      {text}
    </Text>
  );
});
