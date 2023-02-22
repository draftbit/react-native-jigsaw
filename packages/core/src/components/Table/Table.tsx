import React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
} from "react-native";
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
  children: childrenProp,
  style,
}: React.PropsWithChildren<Props<T>>) => {
  //Both 'renderItem' and 'data' are optional to allow direct children. But if one is included, both need to be included
  if ((data && !renderItem) || (renderItem && !data)) {
    throw new Error(
      "'renderItem' and 'data' need to both be provided to render from 'data'. Either remove them entirley or include both"
    );
  }

  if (data && renderItem && childrenProp) {
    console.warn(
      "'children' of Table ignored due to usage of 'data' and 'renderItem'"
    );
  }

  const isTableHeader = React.useCallback((object: any): boolean => {
    return object.isTableHeader;
  }, []);

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

  const children = isRenderItem
    ? dataAsChildren
    : React.Children.toArray(childrenProp);

  const validChildren = React.useMemo(
    () =>
      (children as any[]).filter((item) =>
        React.isValidElement(item)
      ) as React.ReactElement[],
    [children]
  );

  const childrenWithoutHeader = React.useMemo(
    () => validChildren.filter((item) => !isTableHeader(item.props)),
    [validChildren, isTableHeader]
  );

  const headers = React.useMemo(
    () => validChildren.filter((item) => isTableHeader(item.props)),
    [validChildren, isTableHeader]
  );

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
      <View style={[styles.container, borderViewStyle, style]}>
        <>{headers}</>
        <ScrollView>{childrenWithoutHeader}</ScrollView>
      </View>
    </TableStyleContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(Table);
