/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import shadow from "../styles/shadow";
import overlay from "../styles/overlay";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import { COMPONENT_TYPES, createElevationType } from "@draftbit/types";

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
          minHeight: 40,
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
      <View style={{ overflow: "hidden", borderRadius }}>{children}</View>
    </Animated.View>
  );
};

export default withTheme(Surface);

export const SEED_DATA = {
  name: "Surface",
  tag: "Surface",
  description: "An elevated container",
  category: COMPONENT_TYPES.layout,
  layout: {},
  props: {
    elevation: createElevationType(0),
  },
};
