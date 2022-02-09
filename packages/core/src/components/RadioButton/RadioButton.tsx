import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

import Config from "../Config";
import IconButton from "../IconButton";
import { getValueForRadioButton } from "../../utilities";
import { useRadioButtonGroupContext } from "./context";

import type { IconSlot } from "../../interfaces/Icon";

export type RadioButtonProps = {
  selected?: boolean;
  disabled?: boolean;
  color?: string;
  value?: string | number;
  unselectedColor?: string;
  onPress?: (value?: string) => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
  selectedIcon?: string;
  unselectedIcon?: string;
} & IconSlot;

const RadioButton: React.FC<RadioButtonProps> = ({
  Icon,
  disabled = false,
  color,
  value = "",
  selected,
  unselectedColor,
  onPress,
  size = Config.radioButtonSize,
  selectedIcon = "MaterialIcons/radio-button-checked",
  unselectedIcon = "MaterialIcons/radio-button-unchecked",
  style,
  ...rest
}) => {
  const { value: contextValue, onValueChange } = useRadioButtonGroupContext();

  const realValue = getValueForRadioButton(value);
  const realContextValue = getValueForRadioButton(contextValue);
  const isSelected = selected ?? realContextValue === realValue;

  const handlePress = () => {
    onPress?.(realValue);
    onValueChange?.(realValue);
  };

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
