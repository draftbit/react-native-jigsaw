import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { extractStyles } from "../../utilities";

export interface TableCellProps {
  children: React.ReactNode;
  numeric?: boolean;
  style?: StyleProp<ViewStyle>;
  value: string;
}

const TableCell = ({
  children,
  style,
  numeric,
  value,
  ...rest
}: TableCellProps) => {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <View
      {...rest}
      style={[styles.wrapper, numeric && styles.right, viewStyles]}
    >
      <Text numberOfLines={1} style={textStyles}>
        {children}
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  right: {
    justifyContent: "flex-end",
  },
});

export default TableCell;
