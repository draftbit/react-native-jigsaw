import React from "react";
import { SwipeableList } from "../SwipeableItem";
import type {
  FlashListSwipeableListProps,
  FlatListSwipeableListProps,
} from "../SwipeableItem";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A SwipeableList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleSwipeableList = <T extends { [key: string]: any }>({
  style: styleProp,
  data,
  ...rest
}: Omit<
  FlashListSwipeableListProps<T> | FlatListSwipeableListProps<T>,
  "contentContainerStyle"
>) => {
  const { style, contentContainerStyle } =
    useSplitContentContainerStyles(styleProp);

  return (
    //@ts-ignore contentContainerStyle has different types for FlashList and FlatList implmentations and confuses TS
    <SwipeableList
      style={style}
      contentContainerStyle={contentContainerStyle}
      data={data}
      {...rest}
    />
  );
};

export default SimpleStyleSwipeableList;
