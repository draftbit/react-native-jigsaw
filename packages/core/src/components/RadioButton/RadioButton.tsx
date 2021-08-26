import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

import Config from "../Config";
import IconButton from "../IconButton";
import { useRadioButtonGroupContext } from "./context";

import {
  GROUPS,
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createIconProp,
  createTextProp,
  Triggers,
} from "@draftbit/types";
import type { IconSlot } from "../../interfaces/Icon";

export type RadioButtonProps = {
  selected?: boolean;
  disabled?: boolean;
  color?: string;
  value?: string;
  unselectedColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
  selectedIcon?: string;
  unselectedIcon?: string;
} & IconSlot;

const RadioButton: React.FC<RadioButtonProps> = ({
  Icon,
  disabled = false,
  color,
  value,
  selected,
  unselectedColor,
  onPress = () => {},
  size = Config.radioButtonSize,
  selectedIcon = "MaterialIcons/radio-button-checked",
  unselectedIcon = "MaterialIcons/radio-button-unchecked",
  style,
  ...rest
}) => {
  const { value: contextValue, onValueChange } = useRadioButtonGroupContext();

  const handlePress = () => {
    onPress && onPress();

    if (onValueChange && value) {
      onValueChange(value);
    }
  };

  const isSelected =
    selected || (contextValue != null && contextValue === value);

  return (
    <IconButton
      Icon={Icon}
      icon={isSelected ? selectedIcon : unselectedIcon}
      color={isSelected ? color : unselectedColor}
      disabled={disabled}
      onPress={handlePress}
      size={size}
      style={style}
      {...rest}
    />
  );
};

export default RadioButton;

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.input,
  triggers: [Triggers.OnPress],
  props: {
    value: createTextProp({
      label: "Value",
      description: "Value of the radio button",
      defaultValue: null,
      required: true,
    }),
    color: createColorProp({
      group: GROUPS.basic,
      description: "Color for the button",
      defaultValue: "primary",
    }),
    unselectedColor: createColorProp({
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Unselected Color for the button",
      defaultValue: "primary",
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether radio button is disabled",
    }),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Specifies the size of the button",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
    selectedIcon: createIconProp({
      label: "Selected Icon",
      description: "Icon to show when the radio button is selected",
      defaultValue: "MaterialIcons/radio-button-checked",
    }),
    unselectedIcon: createIconProp({
      label: "Unselected Icon",
      description: "Icon to show when the radio button is unselected",
      defaultValue: "MaterialIcons/radio-button-unchecked",
    }),
  },
};
