import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import {
  generateBorderStyles,
  TableProps,
  TableStyleContext,
} from "./TableCommon";
import Pressable from "../Pressable";

export interface Props extends TableProps {
  onPress?: () => void;
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
  onPress,
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

  const ContainerComponent = onPress ? Pressable : View;
  return (
    <ContainerComponent
      onPress={onPress}
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
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TableCell;
