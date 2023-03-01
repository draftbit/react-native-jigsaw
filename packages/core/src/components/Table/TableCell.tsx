import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { generateBorderStyles, TableProps, TableStyleContext } from "./index";

export interface Props extends TableProps {
  style?: StyleProp<ViewStyle>;
}

const TableCell: React.FC<React.PropsWithChildren<Props>> = ({
  borderWidth,
  borderColor,
  borderStyle,
  drawTopBorder = false,
  drawBottomBorder = false,
  drawStartBorder = false,
  drawEndBorder = true,
  cellVerticalPadding,
  cellHorizontalPadding,
  children,
  style,
}) => {
  const parentContextValue = React.useContext(TableStyleContext);

  const borderViewStyle = generateBorderStyles({
    borderColor: borderColor || parentContextValue.borderColor,
    borderWidth: borderWidth || parentContextValue.borderWidth,
    borderStyle: borderStyle || parentContextValue.borderStyle,
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
          paddingVertical:
            cellVerticalPadding || parentContextValue.cellVerticalPadding,
          paddingHorizontal:
            cellHorizontalPadding || parentContextValue.cellHorizontalPadding,
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
