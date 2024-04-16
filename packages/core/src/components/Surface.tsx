/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";

import { withTheme, shadow, overlay } from "@draftbit/theme";
import type { Theme } from "@draftbit/theme";

type Props = {
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & ViewProps;

const Surface: React.FC<React.PropsWithChildren<Props>> = ({
  elevation: propElevation,
  style,
  theme,
  children,
  ...rest
}) => {
  const {
    elevation: styleElevation = 3,
    backgroundColor,
    ...restStyle
  } = (StyleSheet.flatten(style) || {}) as ViewStyle;

  const { dark: isDarkTheme, mode, colors } = theme;

  const elevation = propElevation ?? styleElevation;

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
        {
          backgroundColor: getBackgroundColor(),
          elevation,
          ...evalationStyles,
          ...restStyle,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default withTheme(Surface);
