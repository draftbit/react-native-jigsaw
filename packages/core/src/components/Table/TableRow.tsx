import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import {
  generateBorderStyles,
  TableProps,
  TableStyleContext,
  TableStyleProps,
} from "./TableCommon";

export interface Props extends TableProps {
  style?: StyleProp<ViewStyle>;
}

const TableRow: React.FC<React.PropsWithChildren<Props>> = ({
  borderWidth,
  borderColor,
  borderStyle,
  drawTopBorder = false,
  drawBottomBorder = true,
  drawStartBorder = true,
  drawEndBorder = false,
  cellVerticalPadding,
  cellHorizontalPadding,
  children,
  style,
}) => {
  const parentContextValue = React.useContext(TableStyleContext);

  //Create context to use and pass to children based on own props or fall back to parent provided context
  const contextValue: TableStyleProps = {
    borderColor: borderColor || parentContextValue.borderColor,
    borderStyle: borderStyle || parentContextValue.borderStyle,
    borderWidth: borderWidth || parentContextValue.borderWidth,
    cellHorizontalPadding:
      cellHorizontalPadding || parentContextValue.cellHorizontalPadding,
    cellVerticalPadding:
      cellVerticalPadding || parentContextValue.cellVerticalPadding,
  };

  const borderViewStyle = generateBorderStyles({
    borderColor: contextValue.borderColor,
    borderWidth: contextValue.borderWidth,
    borderStyle: contextValue.borderStyle,
    drawTopBorder,
    drawBottomBorder,
    drawStartBorder,
    drawEndBorder,
  });
  return (
    <TableStyleContext.Provider value={contextValue}>
      <View style={[borderViewStyle, style, styles.cellsContainer]}>
        {children}
      </View>
    </TableStyleContext.Provider>
  );
};

const styles = StyleSheet.create({
  cellsContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TableRow;
