/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  View,
  Platform,
} from "react-native";
import shadow from "../styles/shadow";
import overlay from "../styles/overlay";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & ViewProps;

const Surface: React.FC<Props> = ({
  elevation: propElevation,
  style,
  theme,
  children,
  ...rest
}) => {
  const {
    elevation: styleElevation = 3,
    backgroundColor,
    borderRadius,
    overflow,
    height,
    width,
  } = (StyleSheet.flatten(style) || {}) as ViewStyle;

  const { dark: isDarkTheme, mode, colors } = theme;

  const elevation = propElevation || styleElevation;

  const evalationStyles = elevation ? shadow(elevation) : {};

  const getBackgroundColor = () => {
    if (backgroundColor) {
      return backgroundColor;
    } else if (isDarkTheme && mode === "adaptive") {
      return overlay(elevation, colors.surface);
    } else {
      return colors.surface;
    }
  };

  return (
    <Animated.View
      {...rest}
      style={[
        style,
        {
          backgroundColor: getBackgroundColor(),
          overflow:
            Platform.OS === "web" && overflow === "hidden"
              ? "hidden"
              : "visible",
          elevation,
          ...evalationStyles,
        },
      ]}
    >
      <View
        style={[
          {
            overflow,
            borderRadius,
            height,
            width,
          },
        ]}
      >
        {children}
      </View>
    </Animated.View>
  );
};

export default withTheme(Surface);
