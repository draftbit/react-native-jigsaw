/* @flow */

import * as React from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";

type Props = {
  style?: any,
  /**
   * @optional
   */
  theme: Theme
};

class Divider extends React.Component<Props> {
  render() {
    const {
      style,
      theme: { colors }
    } = this.props;

    return (
      <View
        style={[{ backgroundColor: colors.divider }, styles.divider, style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth
  }
});

export default withTheme(Divider);
