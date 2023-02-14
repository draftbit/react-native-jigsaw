import React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import { generateBorderStyles, TableBorderProps } from "./TableCommon";
import TableRow, { TableRowProps } from "./TableRow";

export interface TableProps extends TableBorderProps {
  cellVerticalPadding?: number;
  callHorizontalPadding?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const Table: React.FC<React.PropsWithChildren<TableProps>> = ({
  theme,
  borderWidth = 1,
  borderColor = theme.colors.divider,
  drawTopBorder = true,
  drawBottomBorder = false,
  drawStartBorder = false,
  drawEndBorder = false,
  cellVerticalPadding = 10,
  callHorizontalPadding = 10,
  children,
  style,
}) => {
  //Populate each TableRow props with default values provided here
  const populatedTableRows = React.useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableRow) {
          const oldProps = { ...(child.props as TableRowProps) };
          const newProps: TableRowProps = {
            cellVerticalPadding:
              oldProps.cellVerticalPadding || cellVerticalPadding,
            callHorizontalPadding:
              oldProps.callHorizontalPadding || callHorizontalPadding,
            borderWidth: oldProps.borderWidth || borderWidth,
            borderColor: oldProps.borderColor || borderColor,
          };

          return React.cloneElement(child, newProps);
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
    <View style={[styles.container, borderStyle, style]}>
      {populatedTableRows}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

export default withTheme(Table);
