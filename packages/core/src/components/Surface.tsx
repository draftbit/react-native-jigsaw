/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
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
  elevation,
  style,
  theme,
  children,
  ...rest
}) => {
  const { elevation: styleElevation = 3, borderRadius: radius = 0 } =
    (StyleSheet.flatten(style) || {}) as ViewStyle;
  const { dark: isDarkTheme, mode, colors } = theme;
  const borderRadius = radius;
  const ele = elevation || styleElevation;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          borderRadius,
          backgroundColor:
            isDarkTheme && mode === "adaptive"
              ? overlay(ele, colors.surface)
              : colors.surface,
        },
        elevation ? shadow(elevation) : null,
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default withTheme(Surface);
