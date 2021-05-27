import * as React from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { RowDirection } from "@draftbit/types";
import { extractStyles } from "../utilities";
import Touchable from "./Touchable";

type Props = {
  disabled?: boolean;
  label: string;
  direction: RowDirection;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function FormRow({
  disabled,
  direction,
  children,
  label,
  style,
  onPress,
  ...rest
}: Props) {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <Touchable
      disabled={disabled}
      onPress={onPress}
      style={[styles.row, { flexDirection: direction }, viewStyles]}
      {...rest}
    >
      <Text style={textStyles}>{label}</Text>
      {children}
    </Touchable>
  );
}

const styles = StyleSheet.create({
  row: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
