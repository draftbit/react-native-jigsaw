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
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  theme: typeof themeT;
} & ViewProps;

/* directly copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx#L62 */
const Elevation: React.FC<Props> = ({ style, theme, children, ...rest }) => {
  const { elevation = 4, borderRadius: radius } =
    StyleSheet.flatten(style) || {};
  const { colors } = theme;
  const borderRadius = radius || theme.borderRadius;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          borderRadius,
          backgroundColor: colors.surface,
        },
        elevation ? shadow(elevation) : null,
        style,
      ]}
    >
      <View style={{ overflow: "hidden", borderRadius }}>{children}</View>
    </Animated.View>
  );
};

export default withTheme(Elevation);
