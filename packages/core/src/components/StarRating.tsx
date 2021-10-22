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
  createFieldNameProp,
  createStaticBoolProp,
  Triggers,
  createColorProp,
  GROUPS,
} from "@draftbit/types";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  defaultValue?: number;
  isEditable?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: (newValue: number) => void;
} & IconSlot;

const StarRating: React.FC<Props> = ({
  Icon,
  starSize = 16,
  maxStars = 5,
  rating = 0,
  defaultValue,
  isEditable = false,
  activeColor,
  inactiveColor,
  style,
  onPress,
  ...rest
}) => {
  const [localRating, setLocalRating] = React.useState<number>(
    rating || defaultValue || 0
  );

  React.useEffect(() => {
    if (rating != null) {
      setLocalRating(rating);
    }
  }, [rating]);

  const ratingHandler = React.useCallback(
    (r) => {
      setLocalRating(r);
      !!onPress && onPress(r);
    },
    [onPress]
  );

  const ratingRounded = Math.round(localRating * 2) / 2;

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
            color={ratingRounded > i ? activeColor : inactiveColor}
          />
          {isEditable && (
            <View style={styles.touchContainer}>
              <Pressable
                style={styles.pressable}
                onPress={() => ratingHandler(i + 0.5)}
              />
              <Pressable
                style={styles.pressable}
                onPress={() => ratingHandler(i + 1)}
              />
            </View>
          )}
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
    zIndex: 1,
  },
  pressable: {
    flex: 1,
    height: "100%",
    width: "50%",
  },
});

export default withTheme(StarRating);

export const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: COMPONENT_TYPES.button,
  triggers: [Triggers.OnPress],
  props: {
    starSize: createStaticNumberProp({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1,
    }),
    fieldName: createFieldNameProp({
      defaultValue: "ratingValue", // this is the name of the variable declared on the screen in Draftbit
      handlerPropName: "onPress", // the change handler prop in this component
      valuePropName: "rating", // the value prop in this component
    }),
    maxStars: createStaticNumberProp({
      label: "Max stars",
      description: "The max number of stars",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
    }),
    rating: createStaticNumberProp({
      group: GROUPS.data,
      label: "Rating",
    }),
    isEditable: createStaticBoolProp({
      label: "Editable",
    }),
    activeColor: createColorProp({
      label: "Active Color",
      defaultValue: "primary",
    }),
    inactiveColor: createColorProp({
      label: "Inactive Color",
      defaultValue: "divider",
    }),
  },
};
