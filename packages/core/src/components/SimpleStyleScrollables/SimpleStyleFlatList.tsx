import React from "react";
import FlatList from "../FlatList";
import { FlatList as FlatListComponent } from "react-native";
import type { FlatListProps } from "react-native";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A FlatList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlatList = React.forwardRef(
  <T extends any>(
    {
      style: styleProp,
      data,
      ...rest
    }: Omit<FlatListProps<T>, "contentContainerStyle">,
    ref: React.Ref<FlatListComponent>
  ) => {
    const { style, contentContainerStyle } =
      useSplitContentContainerStyles(styleProp);

    return (
      <FlatList
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleFlatList;
