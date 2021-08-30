import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import {
  COMPONENT_TYPES,
  createActionProp,
  createTextProp,
  GROUPS,
} from "@draftbit/types";
import ActionSheetItem from "./ActionSheetItem";

type Props = {
  label: string;
  style?: StyleProp<ViewStyle | TextStyle>;
  onPress?: () => void;
};

const ActionSheetCancel: React.FC<Props> = ({
  label = "Cancel",
  style,
  onPress,
}) => {
  return (
    <ActionSheetItem
      label={label}
      style={[
        style,
        {
          color: "#FF453A",
          fontWeight: "bold",
        },
      ]}
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
  props: {
    onPress: createActionProp(),
    label: createTextProp({
      group: GROUPS.basic,
      label: "Label",
      defaultValue: "Cancel",
    }),
  },
};
