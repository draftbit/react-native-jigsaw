import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { generateBorderStyles, TableBorderProps } from "./TableCommon";
import TableCell, { TableCellProps } from "./TableCell";

export interface TableRowProps extends TableBorderProps {
  cellVerticalPadding?: number;
  callHorizontalPadding?: number;
  style?: StyleProp<ViewStyle>;
}

const TableRow: React.FC<React.PropsWithChildren<TableRowProps>> = ({
  borderWidth,
  borderColor,
  borderStyle,
  drawTopBorder = false,
  drawBottomBorder = true,
  drawStartBorder = true,
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
          const oldProps = { ...(child.props as TableCellProps) };
          const newProps: TableCellProps = {
            verticalPadding: oldProps.verticalPadding || cellVerticalPadding,
            horizontalPadding:
              oldProps.horizontalPadding || callHorizontalPadding,
            borderWidth: oldProps.borderWidth || borderWidth,
            borderColor: oldProps.borderColor || borderColor,
            borderStyle: oldProps.borderStyle || borderStyle,
          };

          return React.cloneElement(child, newProps);
        }
        return child;
      }),
    [
      children,
      borderColor,
      borderWidth,
      borderStyle,
      cellVerticalPadding,
      callHorizontalPadding,
    ]
  );

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
    <View style={[borderViewStyle, style, styles.cellsContainer]}>
      {populatedTableCells}
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
