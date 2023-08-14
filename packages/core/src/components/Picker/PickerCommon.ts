import { StyleProp, ViewStyle } from "react-native";
import { IconSlot } from "../../interfaces/Icon";

export interface PickerOption {
  value: string | number;
  label: string | number;
}

export interface PickerInputContainerProps extends IconSlot {
  error?: any;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  label?: string;
  assistiveText?: string;
  iconColor?: string;
  iconSize?: number;
  leftIconMode?: "inset" | "outset";
  leftIconName?: string;
  placeholderTextColor?: string;
  rightIconName?: string;
  type?: "solid" | "underline";
}

export interface PickerProps extends PickerInputContainerProps {
  value?: string | number;
  options: PickerOption[] | string[] | number[];
  onValueChange: (value: string | number) => void;
  autoDismissKeyboard?: boolean;
}
