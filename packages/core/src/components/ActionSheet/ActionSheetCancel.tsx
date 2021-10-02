import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import {
  COMPONENT_TYPES,
  createActionProp,
  createColorProp,
  createTextProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";
import ActionSheetItem from "./ActionSheetItem";

type Props = {
  label: string;
  color: string;
  style?: StyleProp<ViewStyle | TextStyle>;
  onPress?: () => void;
};

const ActionSheetCancel: React.FC<Props> = ({
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

export const SEED_DATA = {
  name: "Action Sheet Cancel",
  tag: "ActionSheetCancel",
  description: "Action Sheet cancel",
  category: COMPONENT_TYPES.button,
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    label: createTextProp({
      group: GROUPS.basic,
      label: "Label",
      defaultValue: "Cancel",
    }),
    color: createColorProp({
      label: "Font Color",
    }),
  },
};
