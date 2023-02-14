import { ViewStyle } from "react-native";

export interface TableBorderProps {
  borderWidth?: number;
  borderColor?: string;
  drawTopBorder?: boolean;
  drawBottomBorder?: boolean;
  drawStartBorder?: boolean;
  drawEndBorder?: boolean;
}

export function generateBorderStyles({
  borderColor,
  borderWidth,
  drawTopBorder,
  drawBottomBorder,
  drawStartBorder,
  drawEndBorder,
}: TableBorderProps): ViewStyle {
  return {
    borderColor,
    borderTopWidth: drawTopBorder ? borderWidth : 0,
    borderBottomWidth: drawBottomBorder ? borderWidth : 0,
    borderStartWidth: drawStartBorder ? borderWidth : 0,
    borderEndWidth: drawEndBorder ? borderWidth : 0,
  };
}
