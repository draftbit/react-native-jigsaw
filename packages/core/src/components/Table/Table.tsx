import React from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import {
  generateBorderStyles,
  TableProps,
  TableStyleContext,
  TableStyleProps,
} from "./TableCommon";

export interface Props extends TableProps {
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const Table: React.FC<React.PropsWithChildren<Props>> = ({
  theme,
  borderWidth = 1,
  borderColor = theme.colors.divider,
  borderStyle = "solid",
  drawTopBorder = true,
  drawBottomBorder = false,
  drawStartBorder = false,
  drawEndBorder = false,
  cellVerticalPadding = 10,
  cellHorizontalPadding = 10,
  children,
  style,
}) => {
  const contextValue: TableStyleProps = {
    borderColor,
    borderStyle,
    borderWidth,
    cellHorizontalPadding,
    cellVerticalPadding,
  };

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
    <TableStyleContext.Provider value={contextValue}>
      <ScrollView style={[borderViewStyle, style]}>{children}</ScrollView>
    </TableStyleContext.Provider>
  );
};

export default withTheme(Table);
