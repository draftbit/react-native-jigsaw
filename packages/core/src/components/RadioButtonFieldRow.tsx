import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import type { IconSlot } from "../interfaces/Icon";
import { withTheme } from "../theming";
import RadioButton from "./RadioButton";
import themeT from "../styles/DefaultTheme";
import { View } from "react-native";
import Text from "./Text";
import { colorTypes } from "@draftbit/types";

type Props = {
  label: string;
  backgroundColor?: colorTypes;
  labelColor?: colorTypes;
  radioButtonColor?: colorTypes;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  selected: boolean;
  theme: typeof themeT;
} & IconSlot;

const RadioButtonFieldRow: React.FC<Props> = ({
  Icon,
  label,
  theme,
  backgroundColor = "background",
  labelColor = "strong",
  radioButtonColor = "primary",
  onPress,
  selected,
  style,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainParent,
        style,
        { backgroundColor: theme.colors[backgroundColor] },
      ]}
    >
      <Text
        style={[styles.label, labelStyle, { color: theme.colors[labelColor] }]}
      >
        {label}
      </Text>
      <View style={styles.radioButton}>
        <RadioButton
          Icon={Icon}
          color={theme.colors[radioButtonColor]}
          unselectedColor={radioButtonColor}
          selected={selected}
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
  },
  label: {
    flex: 3,
    fontSize: 14,
  },
  radioButton: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default withTheme(RadioButtonFieldRow);
