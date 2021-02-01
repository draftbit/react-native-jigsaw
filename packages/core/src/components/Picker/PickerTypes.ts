import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { Props as TextFieldProps } from "../TextField";
import type { IconSlot } from "../../interfaces/Icon";

interface PickerOption {
  value: string;
  label: string;
}

export interface PickerComponentProps extends TextFieldProps, IconSlot {
  style?: StyleProp<ViewStyle>;
  options: PickerOption[];
  placeholder?: string;
  selectedValue: string;
  disabled?: boolean;
  onValueChange: (value: string, index: number) => void;
}
