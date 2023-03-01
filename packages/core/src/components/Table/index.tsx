import React from "react";
import { ViewStyle } from "react-native";

type BorderStyle = "solid" | "dotted" | "dashed";

export const TableStyleContext = React.createContext<TableStyleProps>({});

export interface TableStyleProps {
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: BorderStyle;
  cellVerticalPadding?: number;
  cellHorizontalPadding?: number;
}

export interface TableProps extends TableStyleProps {
  drawTopBorder?: boolean;
  drawBottomBorder?: boolean;
  drawStartBorder?: boolean;
  drawEndBorder?: boolean;
}

export function generateBorderStyles({
  borderColor,
  borderWidth,
  borderStyle,
  drawTopBorder,
  drawBottomBorder,
  drawStartBorder,
  drawEndBorder,
}: TableProps): ViewStyle {
  return {
    borderColor,
    borderStyle,
    borderTopWidth: drawTopBorder ? borderWidth : 0,
    borderBottomWidth: drawBottomBorder ? borderWidth : 0,
    borderStartWidth: drawStartBorder ? borderWidth : 0,
    borderEndWidth: drawEndBorder ? borderWidth : 0,
  };
}

export { Table } from "./Table";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
