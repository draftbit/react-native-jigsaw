import React from "react"
import { withTheme } from "../core/theming"
import Touchable from "./Touchable"
import Config from "./Config"

class Card extends React.Component {
  static defaultProps = {
    numColumns: 3
  }

  render() {
    const {
      numColumns,
      children,
      onPress,
      theme: { spacing },
      style
    } = this.props

    let cardStyle
    if (numColumns === 1) {
      cardStyle = {
        width: (Config.windowWidth - spacing.gutters * 2 - spacing.small * 2) / 3
      }
    } else if (numColumns === 2) {
      cardStyle = {
        width: (Config.windowWidth - spacing.gutters * 2 - spacing.small) / 2
      }
    } else {
      cardStyle = { width: Config.windowWidth - spacing.gutters * 2 }
    }

    return (
      <Touchable
        disabled={!onPress}
        numColumns={numColumns}
        onPress={onPress}
        style={[cardStyle, style]}>
        {children}
      </Touchable>
    )
  }
}

export default withTheme(Card)
