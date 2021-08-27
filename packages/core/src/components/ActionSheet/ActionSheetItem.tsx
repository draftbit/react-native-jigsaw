import React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  COMPONENT_TYPES,
  createActionProp,
  createTextProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";
import { extractStyles } from "../../utilities";

type Props = {
  label: string;
  style?: StyleProp<ViewStyle | TextStyle>;
  onPress?: () => void;
};

const ActionSheetItem: React.FC<Props> = ({ label, style, onPress }) => {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <TouchableHighlight
      underlayColor={"#FFFFFF"}
      style={[styles.wrapper, viewStyles]}
      onPress={onPress}
    >
      <Text style={{ ...styles.label, ...textStyles }}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#F1F1F1",
    minHeight: 50,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: "#0A84FF",
    fontWeight: "500",
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
  },
});

export default ActionSheetItem;

export const SEED_DATA = {
  name: "Action Sheet Item",
  tag: "ActionSheetItem",
  description: "Action Sheet item",
  category: COMPONENT_TYPES.button,
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    label: createTextProp({
      group: GROUPS.basic,
      label: "Label",
      defaultValue: "Option",
    }),
  },
};
