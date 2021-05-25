import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import NativeSlider from "@react-native-community/slider";

import {
  COMPONENT_TYPES,
  colorTypes,
  createNumberProp,
  createColorProp,
  createFieldNameProp,
} from "@draftbit/types";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

export type Props = {
  style?: StyleProp<ViewStyle>;
  value?: number;
  minimumTrackTintColor: colorTypes;
  maximumTrackTintColor: colorTypes;
  leftIcon?: string;
  rightIcon?: string;
  leftIconColor?: colorTypes;
  rightIconColor?: colorTypes;
  thumbTintColor?: colorTypes;
  tapToSeek?: boolean;
  minimumValue: number;
  maximumValue: number;
  step: number;
  onValueChange?: (value: number) => void;
  theme: Theme;
} & IconSlot;

function Slider({
  Icon,
  leftIcon = "Ionicons/sunny-outline",
  rightIcon = "Ionicons/sunny",
  leftIconColor = "light",
  rightIconColor = "light",
  value,
  minimumTrackTintColor = "primary",
  maximumTrackTintColor = "light",
  thumbTintColor = "primary",
  minimumValue = 0,
  maximumValue = 100,
  tapToSeek,
  step = 1,
  onValueChange = () => {},
  style,
  theme,
  ...rest
}: Props) {
  const minTrackColor = theme.colors[minimumTrackTintColor];
  const maxTrackColor = theme.colors[maximumTrackTintColor];
  const thumbColor = theme.colors[thumbTintColor];

  const leftIconThemeColor = theme.colors[leftIconColor];
  const rightIconThemeColor = theme.colors[rightIconColor];

  return (
    <View style={[styles.container, style]}>
      {leftIcon ? (
        <Icon color={leftIconThemeColor} name={leftIcon} size={24} />
      ) : null}
      <NativeSlider
        value={value}
        step={step}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        tapToSeek={tapToSeek}
        minimumTrackTintColor={minTrackColor}
        maximumTrackTintColor={maxTrackColor}
        thumbTintColor={thumbColor}
        onSlidingComplete={onValueChange}
        style={styles.slider}
        {...rest}
      />
      {rightIcon ? (
        <Icon color={rightIconThemeColor} name={rightIcon} size={24} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  slider: {
    flex: 1,
    marginHorizontal: 12,
  },
});

export default withTheme(Slider);

export const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: COMPONENT_TYPES.basic,
  layout: {},
  props: {
    fieldName: createFieldNameProp({
      defaultValue: 0,
      handlerPropName: "onValueChange",
    }),
    minimumValue: createNumberProp({
      label: "Min Value",
      min: 0,
      max: 1000,
    }),
    maximumValue: createNumberProp({
      label: "Max Value",
      min: 1,
      max: 10000,
    }),
    step: createNumberProp({
      label: "Step",
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
    }),
    minimumTrackTintColor: createColorProp({
      defaultValue: null,
    }),
    maximumTrackTintColor: createColorProp({
      defaultValue: null,
    }),
    thumbTintColor: createColorProp({
      defaultValue: null,
    }),
  },
};
