import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { Props as TextFieldProps } from "../TextField";

export interface PickerOption {
  value: string;
  label: string;
}

export interface PickerComponentProps extends TextFieldProps {
  style?: StyleProp<ViewStyle> & { height?: number };
  options: PickerOption[];
  placeholder?: string;
  selectedValue: string;
  disabled?: boolean;
  onValueChange: (value: string, index: number) => void;
  initialValue?: string;
}
