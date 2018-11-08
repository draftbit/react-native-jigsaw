/* @flow */

import * as React from "react";
import { Animated, StyleSheet } from "react-native";
import shadow from "../styles/shadow";
import { withTheme } from "../core/theming";
import type { Theme } from "./types";

type Props = {
  children: React.Node,
  style?: any,
  theme: Theme
};

class Elevation extends React.Component<Props> {
  render() {
    const { style, theme, ...rest } = this.props;
    const flattenedStyles = StyleSheet.flatten(style) || {};
    const { elevation } = flattenedStyles;

    return (
      <Animated.View
        {...rest}
        style={[
          { backgroundColor: theme.colors.surface },
          elevation && shadow(elevation, theme),
          style
        ]}
      />
    );
  }
}

export default withTheme(Elevation);
