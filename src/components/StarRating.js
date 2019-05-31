// @flow
import * as React from "react"
import { Text, View, StyleSheet } from "react-native"
import type { Theme } from "../types"
import Icon from "./Icon"
import Config from "./Config"
import { withTheme } from "../core/theming"

type Props = {
  /**
   * Maximum number of stars to be displayed
   */
  maxStars: number,
  /**
   * Number of stars to be filled in
   */
  rating: number,
  /**
   * Number of ratings
   */
  numberOfRatings?: ?number,
  theme: Theme,
  style?: any
}

class StarRating extends React.PureComponent<Props> {
  static defaultProps = {
    maxStars: 5,
    rating: 0
  }

  render() {
    const { maxStars, rating, theme, style } = this.props
    const { colors } = theme

    const ratingRounded = Math.round(rating * 2) / 2

    return (
      <View style={[styles.containerStyle, style]}>
        {[...Array(maxStars)].map((s, i) => (
          <Icon
            key={i}
            name={ratingRounded - i === 0.5 ? "MaterialIcons/star-half" : "MaterialIcons/star"}
            size={Config.ratingStarSize}
            color={ratingRounded > i ? colors.primary : colors.divider}
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default withTheme(StarRating)
