import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
} & ViewProps;

/* directly copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx#L62 */
const Elevation: React.FC<React.PropsWithChildren<Props>> = ({
  style,
  theme,
  children,
  ...rest
}) => {
  const { elevation = 4, borderRadius: radius } =
    StyleSheet.flatten(style) || {};
  const { colors } = theme;
  const borderRadius = radius;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          borderRadius,
          backgroundColor: colors.background.brand,
        },
        elevation ? { elevation } : null,
        style,
      ]}
    >
      <View style={{ overflow: "hidden", borderRadius }}>{children}</View>
    </Animated.View>
  );
};

export default withTheme(Elevation);
