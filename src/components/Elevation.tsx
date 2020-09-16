import * as React from "react";
import {
  Animated,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import shadow from "../styles/shadow";
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  theme: typeof themeT;
}

const Elevation: React.FC<Props> = ({ style, theme, ...rest }) => {
  const flattenedStyles = StyleSheet.flatten(style) || {};
  const { elevation } = flattenedStyles;

  const styles = [style, { zIndex: 100 }];
  if (elevation) {
    styles.push(shadow(elevation, theme));
  }

  return <Animated.View {...rest} style={styles} />;
};

export default withTheme(Elevation);
