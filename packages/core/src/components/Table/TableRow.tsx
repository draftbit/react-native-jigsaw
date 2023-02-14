import { TableCell } from "@material-ui/core";
import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { generateBorderStyles, TableBorderProps } from "./TableCommon";
import { TableCellProps } from "./TableCell";

export interface TableRowProps extends TableBorderProps {
  cellVerticalPadding?: number;
  callHorizontalPadding?: number;
  style?: StyleProp<ViewStyle>;
}

const TableRow: React.FC<React.PropsWithChildren<TableRowProps>> = ({
  borderWidth,
  borderColor,
  drawTopBorder = false,
  drawBottomBorder = true,
  drawStartBorder = false,
  drawEndBorder = false,
  cellVerticalPadding,
  callHorizontalPadding,
  children,
  style,
}) => {
  //Populate each TableCell props with default values provided here
  const populatedTableCells = React.useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableCell) {
          const cellProps = child.props as TableCellProps;
          cellProps.verticalPadding ??= cellVerticalPadding;
          cellProps.horizontalPadding ??= callHorizontalPadding;
          cellProps.borderWidth ??= borderWidth;
          cellProps.borderColor ??= borderColor;

          return React.cloneElement(child, cellProps);
        }
        return child;
      }),
    [
      children,
      borderColor,
      borderWidth,
      cellVerticalPadding,
      callHorizontalPadding,
    ]
  );

  const borderStyle = generateBorderStyles({
    borderColor,
    borderWidth,
    drawTopBorder,
    drawBottomBorder,
    drawStartBorder,
    drawEndBorder,
  });
  return (
    <View style={[borderStyle, style]}>
      <View style={styles.cellsContainer}>{populatedTableCells}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellsContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TableRow;
