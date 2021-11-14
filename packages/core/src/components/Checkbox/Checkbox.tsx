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

export interface CheckboxProps {
  status?: boolean;
  disabled?: boolean;
  onPress?: (checked: boolean) => void;
  color?: string;
  uncheckedColor?: string;
  checkedIcon?: string;
  uncheckedIcon?: string;
  defaultValue?: boolean;
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
    defaultValue,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    size = 24,
    style,
    ...rest
  }) => {
    const [internalValue, setInternalValue] = React.useState<boolean>(
      status || defaultValue || false
    );

    React.useEffect(() => {
      if (status != null) {
        setInternalValue(status);
      }
    }, [status]);

    // This special logic is to handle weird APIs like Airtable that return
    // true or undefined for a boolean
    const previousDefaultValue = usePrevious(defaultValue) as
      | boolean
      | undefined;
    React.useEffect(() => {
      if (defaultValue !== previousDefaultValue) {
        setInternalValue(Boolean(defaultValue));
      }
    }, [defaultValue, previousDefaultValue]);

    const { colors } = useTheme();

    const checkboxColor = internalValue
      ? color || colors.primary
      : uncheckedColor || colors.primary;

    const handlePress = () => {
      setInternalValue(!internalValue);
      onPress(!internalValue);
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
          name={internalValue ? checkedIcon : uncheckedIcon}
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
