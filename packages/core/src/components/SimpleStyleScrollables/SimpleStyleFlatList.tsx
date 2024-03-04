import React from "react";
import { FlatList } from "react-native";
import type { FlatListProps } from "react-native";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A FlatList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlatList = <T extends any>({
  style: styleProp,
  ...rest
}: Omit<FlatListProps<T>, "contentContainerStyle">) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleFlatList;
