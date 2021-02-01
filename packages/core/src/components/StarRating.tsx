import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import type { IconSlot } from "../interfaces/Icon";
import { withTheme } from "../theming";
import theme from "../styles/DefaultTheme";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
} & IconSlot;

const StarRating: React.FC<Props> = ({
  Icon,
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
