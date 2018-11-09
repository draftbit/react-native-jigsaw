/* @flow */

import React from "react";
import { View } from "react-native";
import Touchable from "./Touchable";
import Config from "./Config";

type Props = {
  numColumns: 1 | 2 | 3,
  children: React.Node,
  onPress: () => void,
  style: any
};

class Card extends React.Component<Props> {
  static defaultProps = {
    numColumns: 3
  };

  render() {
    const { numColumns, children, onPress, style } = this.props;

    let cardStyle;
    if (numColumns === 1) {
      cardStyle = { width: Config.cardOneThirdWidth };
    } else if (numColumns === 2) {
      cardStyle = { width: Config.cardTwoThirdsWidth };
    } else {
      cardStyle = { width: Config.cardFullWidth };
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

export default Card;
