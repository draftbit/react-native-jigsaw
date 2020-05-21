import * as React from "react";
import { Animated, StyleSheet } from "react-native";
import shadow from "../styles/shadow";
import { withTheme } from "../core/theming";

function Elevation({ style, theme, ...rest }) {
  const flattenedStyles = StyleSheet.flatten(style) || {};
  const { elevation } = flattenedStyles;

  const styles = [style];
  if (elevation) {
    styles.push(shadow(elevation, theme));
  }

  return <Animated.View {...rest} style={styles} />;
}

export default withTheme(Elevation);
