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

const StarRating: React.FC<React.PropsWithChildren<Props>> = ({
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

  React.useEffect(() => {
    if (defaultValue != null) {
      setLocalRating(defaultValue);
    }
  }, [defaultValue]);

  const ratingHandler = React.useCallback(
    (r: number) => {
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
