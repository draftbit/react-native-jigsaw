import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableHighlight,
} from "react-native";
import {
  COMPONENT_TYPES,
  createTextStyle,
  createColorProp,
} from "@draftbit/types";

type Props = {
  children: string;
  labelStyle?: StyleProp<TextStyle>;
  buttonColor?: string;

  onPress?: () => void;
};

const ActionSheetItem: React.FC<Props> = ({
  children,
  labelStyle,
  buttonColor = "#F1F1F1",
  onPress,
}) => {
  return (
    <TouchableHighlight
      underlayColor={"#FFFFFF"}
      style={[styles.wrapper, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.label, labelStyle]}>{children}</Text>
      </View>
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
  },
});

export const SEED_DATA = {
  name: "Action Sheet",
  tag: "ActionSheet",
  description: "Action Sheet container",
  category: COMPONENT_TYPES.container,
  props: {
    buttonColor: createColorProp({
      label: "Button Color",
      defaultValue: "#F1F1F1",
    }),
    labelStyle: createTextStyle({
      label: "Label Style",
    }),
  },
};

export default ActionSheetItem;
