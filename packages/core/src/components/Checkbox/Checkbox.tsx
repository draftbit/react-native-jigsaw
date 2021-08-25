import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  COMPONENT_TYPES,
  createBoolProp,
  createIconProp,
  createStaticNumberProp,
  createColorProp,
  createFieldNameProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";
import { useTheme } from "../../theming";
import type { IconSlot } from "../../interfaces/Icon";

import Touchable from "../Touchable";
import { usePrevious } from "../../hooks";

export enum CheckboxStatus {
  Checked = "checked",
  Unchecked = "unchecked",
  Indeterminate = "indeterminate",
}

console.log(Triggers);

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
  initialValue?: boolean;
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
    initialValue,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    indeterminateIcon = "AntDesign/minussquareo",
    size = 24,
    style,
    ...rest
  }) => {
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

    const checkboxColor = colorsMap[status];

    return (
      <Touchable
        {...rest}
        onPress={() => onPress(status === "unchecked" ? true : false)}
        disabled={disabled}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        accessibilityLiveRegion="polite"
        style={[styles.container, style, { width: size, height: size }]}
      >
        <Icon
          style={styles.icon}
          name={iconsMap[status]}
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

export const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: COMPONENT_TYPES.input,
  triggers: ["ON_PRESS"],
  screenStates: [
    {
      trigger: "ON_PRESS",
      valueName: "checkboxValue",
      propName: "status",
      initialValue: false,
      initialValueType: "BOOLEAN",
    },
  ],
  props: {
    fieldName: createFieldNameProp({
      defaultValue: "checkboxValue", //
      valuePropName: "status", //
      handlerPropName: "onPress", //
    }),
    color: createColorProp({
      group: GROUPS.basic,
      label: "Color",
      description: "Color for the button (used when the checkbox is checked)",
      defaultValue: null,
    }),
    uncheckedColor: createColorProp({
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
      defaultValue: null,
    }),
    indeterminateColor: createColorProp({
      group: GROUPS.basic,
      label: "Indeterminate Color",
      description: "Color for the button when the checkbox is indeterminate",
      defaultValue: null,
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the checkbox is disabled",
    }),
    size: createStaticNumberProp({
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
