import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { generateBorderStyles, TableBorderProps } from "./TableCommon";

export interface TableCellProps extends TableBorderProps {
  verticalPadding?: number;
  horizontalPadding?: number;
  style?: StyleProp<ViewStyle>;
}

const TableCell: React.FC<React.PropsWithChildren<TableCellProps>> = ({
  borderWidth,
  borderColor,
  drawTopBorder = false,
  drawBottomBorder = false,
  drawStartBorder = false,
  drawEndBorder = true,
  verticalPadding,
  horizontalPadding,
  children,
  style,
}) => {
  const borderStyle = generateBorderStyles({
    borderColor,
    borderWidth,
    drawTopBorder,
    drawBottomBorder,
    drawStartBorder,
    drawEndBorder,
  });
  return (
    <View
      style={[
        styles.cellContainer,
        borderStyle,
        {
          paddingVertical: verticalPadding,
          paddingHorizontal: horizontalPadding,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
});

export default TableCell;
