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
import themeT from "../styles/DefaultTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  theme: typeof themeT;
} & ViewProps;

const Surface: React.FC<Props> = ({ style, theme, children, ...rest }) => {
  const { elevation = 3, borderRadius: radius } = (StyleSheet.flatten(style) ||
    {}) as ViewStyle;
  const { dark: isDarkTheme, mode, colors } = theme;
  const borderRadius = radius || theme.roundness;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          borderRadius,
          backgroundColor:
            isDarkTheme && mode === "adaptive"
              ? overlay(elevation, colors.surface)
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
