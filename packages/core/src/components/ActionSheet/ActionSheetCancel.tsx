import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import ActionSheetItem from "./ActionSheetItem";

type Props = {
  label: string;
  color: string;
  style?: StyleProp<ViewStyle | TextStyle>;
  onPress?: () => void;
};

const ActionSheetCancel: React.FC<React.PropsWithChildren<Props>> = ({
  label = "Cancel",
  color,
  style,
  onPress,
}) => {
  return (
    <ActionSheetItem
      label={label}
      color={color || "#FF453A"}
      style={[style]}
      onPress={onPress}
    />
  );
};

export default ActionSheetCancel;
