/* @flow */

import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";

type Props = {
  left: Function,
  right: Function,
  style?: any
};

class Row extends React.Component<Props> {
  render() {
    const {
      left,
      right,
      style,
      theme: { spacing }
    } = this.props;

    return (
      <View style={[styles.container, { padding: spacing.large }, style]}>
        {left && left()}
        {right && right()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withTheme(Row);
