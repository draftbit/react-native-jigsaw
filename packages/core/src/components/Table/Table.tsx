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

export interface Props<T> extends TableProps {
  data?: Array<T>;
  keyExtractor?: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const Table = <T extends object>({
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
  data,
  keyExtractor,
  renderItem,
  children,
  style,
}: React.PropsWithChildren<Props<T>>) => {
  //Both 'renderItem' and 'data' are optional to allow direct children. But if one is included, both need to be included
  if ((data && !renderItem) || (renderItem && !data)) {
    throw new Error(
      "'renderItem' and 'data' need to both be provided to render from 'data'. Either remove them entirley or include both"
    );
  }

  if (data && renderItem && children) {
    console.warn(
      "'children' of Table ignored due to usage of 'data' and 'renderItem'"
    );
  }

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

  const isRenderItem = data && renderItem;

  //Uses 'renderItem' and 'data' to create an array of children
  const dataAsChildren = React.useMemo(() => {
    if (!isRenderItem) return [];

    return data.map((item, index) => {
      const component = renderItem({ item, index });

      if (!component) {
        return null;
      }

      const key = keyExtractor ? keyExtractor(item, index) : index.toString();
      return React.cloneElement(component, {
        key,
      });
    });
  }, [data, renderItem, keyExtractor, isRenderItem]);

  return (
    <TableStyleContext.Provider value={contextValue}>
      <ScrollView style={[borderViewStyle, style]}>
        {isRenderItem ? dataAsChildren : children}
      </ScrollView>
    </TableStyleContext.Provider>
  );
};

export default withTheme(Table);
