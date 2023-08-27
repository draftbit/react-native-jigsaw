import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface PickerItemProps {
  selectedTextSize?: number;
  selectedTextColor?: string;
  selectedBackgroundColor?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}

/**
 * Renders nothing, only serves as a container for the props
 * Prop values are used by the DropDownPicker
 */
export const PickerItem: React.FC<PickerItemProps> = () => {
  return null;
};

export default PickerItem;
