import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableHighlight,
} from "react-native";

type Props = {
  children: string;
  labelStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const ActionSheetItem: React.FC<Props> = ({
  children,
  labelStyle,
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableHighlight
      underlayColor={"#FFFFFF"}
      style={[styles.wrapper, buttonStyle]}
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

export default ActionSheetItem;
