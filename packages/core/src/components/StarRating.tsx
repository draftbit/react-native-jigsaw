import * as React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import {
  COMPONENT_TYPES,
  createStaticNumberProp,
  createNumberProp,
} from "@draftbit/types";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: (newValue: number) => void;
} & IconSlot;

const StarRating: React.FC<Props> = ({
  Icon,
  starSize = 16,
  maxStars = 5,
  rating = 0,
  theme,
  style,
  onPress,
  ...rest
}) => {
  const ratingRounded = Math.round(rating * 2) / 2;

  return (
    <View style={[styles.container, style]} {...rest}>
      {[...Array(maxStars)].map((_, i) => (
        <View key={i} style={{ display: "flex" }}>
          <Icon
            name={
              ratingRounded - i === 0.5
                ? "MaterialIcons/star-half"
                : "MaterialIcons/star"
            }
            size={starSize}
            color={
              ratingRounded > i ? theme.colors.primary : theme.colors.divider
            }
          />
          <View style={styles.touchContainer}>
            <Pressable
              style={{ flex: 1, height: "100%", width: "50%" }}
              onPress={() => !!onPress && onPress(i + 0.5)}
            />
            <Pressable
              style={{ flex: 1, height: "100%", width: "50%" }}
              onPress={() => !!onPress && onPress(i + 1)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 111,
  },
});

export default withTheme(StarRating);

export const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: COMPONENT_TYPES.button,
  props: {
    starSize: createStaticNumberProp({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1,
    }),
    maxStars: createStaticNumberProp({
      label: "Max stars",
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
