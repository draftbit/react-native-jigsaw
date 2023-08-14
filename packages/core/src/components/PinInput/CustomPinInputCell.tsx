import React from "react";
import { StyleProp, ViewStyle, View } from "react-native";

interface CustomPinInputCellProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * Simple View wrapper component to create a custom pin input cell
 * Meant to be used in PinInput's renderItem
 */
const CustomPinInputCell: React.FC<
  React.PropsWithChildren<CustomPinInputCellProps>
> = ({ style, children }) => {
  return <View style={style} children={children} />;
};

export default CustomPinInputCell;
