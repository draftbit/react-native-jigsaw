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
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  theme: typeof themeT;
} & ViewProps;

const Elevation: React.FC<Props> = ({ style, theme, ...rest }) => {
  const { elevation = 4 } = (StyleSheet.flatten(style) || {}) as ViewStyle;
  const { dark: isDarkTheme, mode, colors } = theme;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          backgroundColor:
            isDarkTheme && mode === "adaptive"
              ? overlay(elevation, colors.surface)
              : colors.surface,
        },
        elevation ? shadow(elevation) : null,
        style,
      ]}
    />
  );
};

export default withTheme(Elevation);
