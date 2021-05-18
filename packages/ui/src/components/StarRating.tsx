import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import Theme from "../styles/DefaultTheme";

import { COMPONENT_TYPES, createNumberProp } from "../core/component-types";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  theme: typeof Theme;
  style?: StyleProp<ViewStyle>;
};

const StarRating: React.FC<Props> = ({
  starSize = 16,
  maxStars = 5,
  rating = 0,
  theme: { colors },
  style,
}) => {
  const ratingRounded = Math.round(rating * 2) / 2;

  return (
    <View style={[styles.containerStyle, style]}>
      {[...Array(maxStars)].map((_, i) => (
        <Icon
          key={i}
          name={
            ratingRounded - i === 0.5
              ? "MaterialIcons/star-half"
              : "MaterialIcons/star"
          }
          size={starSize}
          color={ratingRounded > i ? colors.primary : colors.divider}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(StarRating);

export const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: COMPONENT_TYPES.deprecated,
  props: {
    starSize: createNumberProp({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1,
    }),
    maxStars: createNumberProp({
      label: "Max Stars",
      description: "The max number of stars",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
    }),
    rating: createNumberProp({
      label: "Rating",
      description: "The number of stars that should be colored in",
      min: 0,
      max: 10,
      step: 1,
    }),
  },
};
