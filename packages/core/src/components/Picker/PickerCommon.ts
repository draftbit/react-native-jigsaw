import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { IconSlot } from "../../interfaces/Icon";
import { isObject } from "lodash";
import type { ReadTheme } from "@draftbit/theme";

export interface PickerOption {
  value: string | number;
  label: string | number;
}

export interface PickerInputContainerProps extends IconSlot {
  error?: boolean;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> | TextStyle;
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

export interface CommonPickerProps extends PickerInputContainerProps {
  options: PickerOption[] | string[] | number[];
  autoDismissKeyboard?: boolean;
  theme: ReadTheme;
}

export interface SinglePickerProps {
  value?: string | number;
  onValueChange: (value: string | number) => void;
}

export interface MultiSelectPickerProps {
  value?: (string | number)[];
  onValueChange: (value: (string | number)[]) => void;
}

export interface CommonDropDownPickerProps extends CommonPickerProps {
  selectedIconName?: string;
  selectedIconColor?: string;
  selectedIconSize?: number;
  dropDownBackgroundColor?: string;
  dropDownBorderColor?: string;
  dropDownTextColor?: string;
  dropDownBorderWidth?: number;
  dropDownBorderRadius?: number;
}

export function normalizeToPickerOptions(
  options: PickerOption[] | string[] | number[]
): PickerOption[] {
  if (options.length === 0) {
    return [];
  }

  const firstOption = options[0];

  if (typeof firstOption === "string" || typeof firstOption === "number") {
    return options.map((option) => ({
      label: option as string | number,
      value: option as string | number,
    }));
  }

  if (
    isObject(firstOption) &&
    firstOption.value !== undefined &&
    firstOption.label !== undefined
  ) {
    return (options as PickerOption[]).map((option) => {
      return {
        label: option.label,
        value: option.value,
      };
    });
  }

  throw new Error(
    'Picker options must be either an array of strings, numbers, or an array of { "label": string | number; "value": string | number; } objects.'
  );
}
