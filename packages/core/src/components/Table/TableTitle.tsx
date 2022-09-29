import React from "react";
import { View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { extractStyles } from "../../utilities";

export interface TableCellProps {
  children: React.ReactNode;
  numeric?: boolean;
  isAscending: boolean;
  numberOfLines?: number;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const TableTitle = ({
  children,
  style,
  numeric = false,
  isAscending = false,
  numberOfLines = 1,
  title,
  ...rest
}: TableCellProps) => {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <View
      {...rest}
      style={[styles.wrapper, numeric && styles.right, viewStyles]}
    >
      <Text
        style={[isAscending ? styles.sorted : { color: "gray" }, textStyles]}
        numberOfLines={numberOfLines}
      >
        {children}
        {title}
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
  sorted: {
    // marginLeft: 8,
  },
  icon: {
    height: 24,
    justifyContent: "center",
  },
});

export default TableTitle;
