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
  borderStyle,
  drawTopBorder = false,
  drawBottomBorder = false,
  drawStartBorder = false,
  drawEndBorder = true,
  verticalPadding,
  horizontalPadding,
  children,
  style,
}) => {
  const borderViewStyle = generateBorderStyles({
    borderColor,
    borderWidth,
    borderStyle,
    drawTopBorder,
    drawBottomBorder,
    drawStartBorder,
    drawEndBorder,
  });
  return (
    <View
      style={[
        styles.cellContainer,
        borderViewStyle,
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
    flexDirection: "row",
  },
});

export default TableCell;
