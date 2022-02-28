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
  elevation: number;
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
    borderRadius,
    overflow,
    height,
    width,
  } = (StyleSheet.flatten(style) || {}) as ViewStyle;

  const { dark: isDarkTheme, mode, colors } = theme;

  const elevation = propElevation || styleElevation;

  const evalationStyles = elevation ? shadow(elevation) : {};

  return (
    <Animated.View
      {...rest}
      style={[
        style,
        {
          backgroundColor:
            isDarkTheme && mode === "adaptive"
              ? overlay(elevation, colors.surface)
              : colors.surface,
          overflow: Platform.OS === "web" ? "hidden" : "visible",
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
