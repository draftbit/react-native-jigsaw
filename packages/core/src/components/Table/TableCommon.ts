import { ViewStyle } from "react-native";

type BorderStyle = "solid" | "dotted" | "dashed";

export interface TableBorderProps {
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: BorderStyle;
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
}: TableBorderProps): ViewStyle {
  return {
    borderColor,
    borderStyle,
    borderTopWidth: drawTopBorder ? borderWidth : 0,
    borderBottomWidth: drawBottomBorder ? borderWidth : 0,
    borderStartWidth: drawStartBorder ? borderWidth : 0,
    borderEndWidth: drawEndBorder ? borderWidth : 0,
  };
}
