import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../theming";
import type { IconSlot } from "../../interfaces/Icon";

import Touchable from "../Touchable";
import { usePrevious } from "../../hooks";

export enum CheckboxStatus {
  Checked = "checked",
  Unchecked = "unchecked",
  Indeterminate = "indeterminate",
}

export interface CheckboxProps {
  status?: CheckboxStatus;
  disabled?: boolean;
  onPress?: (checked: boolean) => void;
  color?: string;
  uncheckedColor?: string;
  indeterminateColor?: string;
  checkedIcon?: string;
  uncheckedIcon?: string;
  indeterminateIcon?: string;
  initialValue?: boolean; // deprecated
  defaultValue?: CheckboxStatus;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps & TouchableHighlightProps & IconSlot> =
  ({
    Icon,
    status,
    disabled = false,
    onPress = () => {},
    color,
    uncheckedColor,
    indeterminateColor,
    initialValue,
    defaultValue,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    indeterminateIcon = "AntDesign/minussquareo",
    size = 24,
    style,
    ...rest
  }) => {
    const [internalValue, setInternalValue] = React.useState<CheckboxStatus>(
      status || defaultValue || CheckboxStatus.Unchecked
    );

    React.useEffect(() => {
      if (status != null) {
        setInternalValue(status);
      }
    }, [status]);

    React.useEffect(() => {
      if (defaultValue != null) {
        setInternalValue(defaultValue);
      }
    }, [defaultValue]);

    const previousInitialValue = usePrevious(initialValue);
    React.useEffect(() => {
      if (initialValue !== previousInitialValue) {
        onPress(initialValue);
      }
    }, [initialValue, previousInitialValue, onPress]);
    const { colors } = useTheme();

    const colorsMap = {
      [CheckboxStatus.Checked]: color || colors.primary,
      [CheckboxStatus.Unchecked]: uncheckedColor || colors.primary,
      [CheckboxStatus.Indeterminate]: indeterminateColor || colors.light,
    };

    const iconsMap = {
      [CheckboxStatus.Checked]: checkedIcon,
      [CheckboxStatus.Unchecked]: uncheckedIcon,
      [CheckboxStatus.Indeterminate]: indeterminateIcon,
    };

    const checkboxColor = colorsMap[internalValue];

    const handlePress = () => {
      setInternalValue(
        internalValue === CheckboxStatus.Unchecked
          ? CheckboxStatus.Checked
          : CheckboxStatus.Unchecked
      );
      onPress(internalValue === CheckboxStatus.Unchecked);
    };

    return (
      <Touchable
        {...rest}
        onPress={handlePress}
        disabled={disabled}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        accessibilityLiveRegion="polite"
        style={[styles.container, style, { width: size, height: size }]}
      >
        <Icon
          style={styles.icon}
          name={iconsMap[internalValue]}
          size={size}
          color={checkboxColor}
        />
        <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
          <View
            style={[
              styles.fill,
              { opacity: disabled ? 0.5 : 1 },
              { borderColor: checkboxColor },
            ]}
          />
        </View>
      </Touchable>
    );
  };

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
  fill: {
    borderRadius: 5,
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});

export default Checkbox;
