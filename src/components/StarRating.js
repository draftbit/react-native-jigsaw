import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import Config from "./Config";
import { withTheme } from "../core/theming";

class StarRating extends React.PureComponent {
  static defaultProps = {
    maxStars: 5,
    rating: 0,
  };

  render() {
    const { maxStars, rating, theme, style } = this.props;
    const { colors } = theme;

    const ratingRounded = Math.round(rating * 2) / 2;

    return (
      <View style={[styles.containerStyle, style]}>
        {[...Array(maxStars)].map((s, i) => (
          <Icon
            key={i}
            name={
              ratingRounded - i === 0.5
                ? "MaterialIcons/star-half"
                : "MaterialIcons/star"
            }
            size={Config.ratingStarSize}
            color={ratingRounded > i ? colors.primary : colors.divider}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(StarRating);
