import * as React from "react";
import { Text, StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { RowDirection } from "@draftbit/types";
import { extractStyles } from "../utilities";

type Props = {
  label: string;
  direction: RowDirection;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function FormRow({ direction, children, label, style }: Props) {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <View style={[styles.row, { flexDirection: direction }, viewStyles]}>
      <Text style={textStyles}>{label}</Text>
      {children}
    </View>
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
