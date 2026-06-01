import React from "react";
import { StyleProp, ViewStyle, View, LayoutChangeEvent } from "react-native";

interface CustomPinInputCellProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
}

/**
 * Simple View wrapper component to create a custom pin input cell
 * Meant to be used in PinInput's renderItem
 */
const CustomPinInputCell: React.FC<
  React.PropsWithChildren<CustomPinInputCellProps>
> = (props) => {
  return <View {...props} />;
};

export default CustomPinInputCell;
