import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import NativeSlider from "@react-native-community/slider";
import isNumber from "lodash.isnumber";
import toNumber from "lodash.tonumber";

import {
  COMPONENT_TYPES,
  GROUPS,
  createNumberProp,
  createColorProp,
  createFieldNameProp,
  createIconProp,
} from "@draftbit/types";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import { usePrevious } from "../hooks";

export type Props = {
  style?: StyleProp<ViewStyle>;
  value?: number;
  initialValue?: number;
  minimumTrackTintColor: string;
  maximumTrackTintColor: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  thumbTintColor?: string;
  tapToSeek?: boolean;
  minimumValue: number;
  maximumValue: number;
  step: number;
  onValueChange?: (value: number) => void;
  theme: Theme;
} & IconSlot;

function maybeParseValue(value: any) {
  if (value === undefined) {
    return undefined;
  }

  if (isNumber(value)) {
    return value;
  }

  try {
    const maybe = toNumber(value);
    if (isNumber(maybe)) {
      return maybe;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function Slider({
  Icon,
  leftIcon,
  rightIcon,
  leftIconColor,
  rightIconColor,
  value,
  initialValue,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  minimumValue = 0,
  maximumValue = 100,
  tapToSeek,
  step = 1,
  onValueChange = () => {},
  style,
  theme,
  ...rest
}: Props) {
  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onValueChange(initialValue);
    }
  }, [initialValue, previousInitialValue, onValueChange]);

  const minTrackColor = minimumTrackTintColor || theme.colors.primary;
  const maxTrackColor = maximumTrackTintColor || theme.colors.light;
  const thumbColor = thumbTintColor || theme.colors.primary;

  const leftIconThemeColor = leftIconColor || theme.colors.light;
  const rightIconThemeColor = rightIconColor || theme.colors.light;

  const parsedValue = maybeParseValue(value);

  return (
    <View style={[styles.container, style]} {...rest}>
      {leftIcon ? (
        <Icon color={leftIconThemeColor} name={leftIcon} size={24} />
      ) : null}
      <NativeSlider
        value={parsedValue}
        step={step}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        tapToSeek={tapToSeek}
        minimumTrackTintColor={minTrackColor}
        maximumTrackTintColor={maxTrackColor}
        thumbTintColor={thumbColor}
        onSlidingComplete={onValueChange}
        style={styles.slider}
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
    marginLeft: 12,
    marginRight: 12,
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
  category: COMPONENT_TYPES.input,
  layout: {},
  props: {
    fieldName: createFieldNameProp({
      defaultValue: "sliderValue",
      handlerPropName: "onValueChange",
      valuePropName: "value",
    }),
    minimumValue: createNumberProp({
      group: GROUPS.basic,
      label: "Min Value",
      min: 0,
      max: 1000,
    }),
    maximumValue: createNumberProp({
      group: GROUPS.basic,
      label: "Max Value",
      min: 1,
      max: 10000,
    }),
    step: createNumberProp({
      group: GROUPS.basic,
      label: "Step",
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
    }),
    leftIcon: createIconProp({
      label: "Left Icon",
      defaultValue: null,
    }),
    rightIcon: createIconProp({
      label: "Right Icon",
      defaultValue: null,
    }),
    minimumTrackTintColor: createColorProp({
      label: "Min Track Color",
      defaultValue: null,
    }),
    maximumTrackTintColor: createColorProp({
      label: "Max Track Color",
      defaultValue: null,
    }),
    thumbTintColor: createColorProp({
      label: "Thumb Color",
      defaultValue: null,
    }),
  },
};
