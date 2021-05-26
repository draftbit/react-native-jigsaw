import * as React from "react";
import {
  Animated,
  View,
  StyleSheet,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
  createIconProp,
  createNumberProp,
  createTextEnumProp,
  createColorProp,
  GROUPS,
} from "@draftbit/types";
import { useTheme } from "../../theming";
import type { IconSlot } from "../../interfaces/Icon";

import Touchable from "../Touchable";

const ANIMATION_DURATION = 100;

export enum CheckboxStatus {
  Checked = "checked",
  Unchecked = "unchecked",
  Indeterminate = "indeterminate",
}

export interface CheckboxProps {
  status?: CheckboxStatus;
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
  uncheckedColor?: string;
  indeterminateColor?: string;
  checkedIcon?: string;
  uncheckedIcon?: string;
  indeterminateIcon?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps & TouchableHighlightProps & IconSlot> =
  ({
    Icon,
    status = CheckboxStatus.Unchecked,
    disabled = false,
    onPress = () => {},
    color,
    uncheckedColor,
    indeterminateColor,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    indeterminateIcon = "AntDesign/minussquareo",
    size = 29,
    style,
    ...rest
  }) => {
    const { current: scaleAnim } = React.useRef<Animated.Value>(
      new Animated.Value(1)
    );
    const isFirstRendering = React.useRef<boolean>(true);
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

    const checkboxColor = colorsMap[status];
    const borderWidth = scaleAnim.interpolate({
      inputRange: [0.8, 1],
      outputRange: [7, 0],
    });

    React.useEffect(() => {
      // Do not run animation on very first rendering
      if (isFirstRendering.current) {
        isFirstRendering.current = false;
        return;
      }
      const checked = status === CheckboxStatus.Checked;
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.85,
          duration: checked ? ANIMATION_DURATION : 0,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: checked ? ANIMATION_DURATION : ANIMATION_DURATION * 1.75,
          useNativeDriver: false,
        }),
      ]).start();
    }, [status, scaleAnim]);

    return (
      <Touchable
        {...rest}
        onPress={onPress}
        disabled={disabled}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        accessibilityLiveRegion="polite"
        style={[styles.container, style]}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Icon
            style={styles.icon}
            name={iconsMap[status]}
            size={size}
            color={checkboxColor}
          />
          <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
            <Animated.View
              style={[
                styles.fill,
                { opacity: disabled ? 0.5 : 1 },
                { borderColor: checkboxColor },
                { borderWidth },
              ]}
            />
          </View>
        </Animated.View>
      </Touchable>
    );
  };

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    width: 36,
    height: 36,
    padding: 6,
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

export const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: COMPONENT_TYPES.button,
  layout: {
    width: 24,
    height: 24,
  },
  props: {
    status: createTextEnumProp({
      label: "Status",
      description: "Current status of the checkbox",
      options: ["checked", "unchecked", "indeterminate"],
      defaultValue: null,
    }),
    color: createColorProp({
      group: GROUPS.basic,
      description: "Color for the button (used when the checkbox is checked)",
      defaultValue: null,
    }),
    uncheckedColor: createColorProp({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
      defaultValue: null,
    }),
    indeterminateColor: createColorProp({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is indeterminate",
      defaultValue: null,
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the checkbox is disabled",
    }),
    onPress: createActionProp(),
    size: createNumberProp({
      label: "Size",
      description: "Specifies the size of the icon",
      defaultValue: null,
    }),
    checkedIcon: createIconProp({
      label: "Checked Icon",
      description: 'Icon to show when the checkbox status is "checked"',
      defaultValue: null,
    }),
    uncheckedIcon: createIconProp({
      label: "Unchecked Icon",
      description: 'Icon to show when the checkbox status is "unchecked"',
      defaultValue: null,
    }),
    indeterminateIcon: createIconProp({
      label: "Indeterminate Icon",
      description: 'Icon to show when the checkbox status is "indeterminate"',
      defaultValue: null,
    }),
  },
};
