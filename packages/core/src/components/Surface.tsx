/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";

import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
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

  const { colors } = theme;

  const elevation = propElevation ?? styleElevation;

  const getBackgroundColor = () => {
    if (backgroundColor) {
      return backgroundColor;
    } else {
      return colors.background.brand;
    }
  };

  return (
    <Animated.View
      {...rest}
      style={[
        {
          backgroundColor: getBackgroundColor(),
          ...shadow(elevation),
          ...restStyle,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const SHADOW_COLOR = "#000";
const SHADOW_OPACITY = 0.24;

function shadow(elevation: number) {
  if (elevation === 0) {
    return {};
  }

  let height, radius;
  switch (elevation) {
    case 1:
      height = 0.5;
      radius = 0.75;
      break;
    case 2:
      height = 0.75;
      radius = 1.5;
      break;
    default:
      height = elevation - 1;
      radius = elevation;
  }

  return {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: radius,
    elevation,
  };
}

export default withTheme(Surface);
