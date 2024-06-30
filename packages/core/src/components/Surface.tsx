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
          elevation,
          ...restStyle,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default withTheme(Surface);
