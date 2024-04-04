import * as React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";

import { withTheme } from "../theming";
import theme from "../styles/DefaultTheme";

const CONSTANTS = {
  baseSize: 20,
};

type BaseProps = {
  title: string;
  style?: TextStyle;
  size?: number;
  theme: typeof theme;
};

function Badge({
  title,
  style,
  size = CONSTANTS.baseSize,
  ...rest
}: BaseProps): JSX.Element {
  const {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
    ...viewStyles
  } = StyleSheet.flatten(style || ({} as TextStyle));

  const titleStyles: TextStyle = {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
  };
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.primary,
          height: size,
          minWidth: size,
          borderRadius: size / 2,
        },
        styles.container,
        viewStyles,
      ]}
      {...rest}
    >
      {title ? (
        <Text
          numberOfLines={1}
          style={[{ color: "#FFF", paddingHorizontal: 4 }, titleStyles]}
        >
          {title}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "baseline",
  },
});

export default withTheme(Badge);
