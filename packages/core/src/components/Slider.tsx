import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import NativeSlider from "@react-native-community/slider";
import isNumber from "lodash.isnumber";
import toNumber from "lodash.tonumber";

import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

export type Props = {
  style?: StyleProp<ViewStyle>;
  value?: number;
  defaultValue?: number;
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
  defaultValue,
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
  const [internalValue, setInternalValue] = React.useState<number | undefined>(
    value || defaultValue
  );

  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const minTrackColor = minimumTrackTintColor || theme.colors.primary;
  const maxTrackColor = maximumTrackTintColor || theme.colors.light;
  const thumbColor = thumbTintColor || theme.colors.primary;

  const leftIconThemeColor = leftIconColor || theme.colors.light;
  const rightIconThemeColor = rightIconColor || theme.colors.light;

  const parsedValue = maybeParseValue(internalValue);

  const handleSlidingComplete = (newValue: number) => {
    setInternalValue(newValue);
    onValueChange(newValue);
  };

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
        onSlidingComplete={handleSlidingComplete}
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
  },
  slider: {
    flex: 1,
    marginHorizontal: 12,
  },
});

export default withTheme(Slider);
