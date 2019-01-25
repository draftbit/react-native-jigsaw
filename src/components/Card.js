/* @flow */

import React from "react";
import { View, Dimensions } from "react-native";
import { withTheme } from "../core/theming";
import Touchable from "./Touchable";
import type { Theme } from "../types";

const { width } = Dimensions.get("window");

type Props = {
  numColumns: 1 | 2 | 3,
  children: React.Node,
  onPress: () => void,
  style: any,
  theme: Theme
};

class Card extends React.Component<Props> {
  static defaultProps = {
    numColumns: 3
  };

  render() {
    const {
      numColumns,
      children,
      onPress,
      theme: { spacing },
      style
    } = this.props;

    let cardStyle;
    if (numColumns === 1) {
      cardStyle = {
        width: (width - spacing.gutters * 2 - spacing.small * 2) / 3
      };
    } else if (numColumns === 2) {
      cardStyle = { width: (width - spacing.gutters * 2 - spacing.small) / 2 };
    } else {
      cardStyle = { width: width - spacing.gutters * 2 };
    }

    return (
      <Touchable
        disabled={!onPress}
        numColumns={numColumns}
        onPress={onPress}
        style={[cardStyle, style]}
      >
        {children}
      </Touchable>
    );
  }
}

export default withTheme(Card);
