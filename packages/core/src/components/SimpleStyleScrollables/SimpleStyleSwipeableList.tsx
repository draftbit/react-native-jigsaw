import React from "react";
import { SwipeableList } from "../SwipeableItem";
import type {
  FlashListSwipeableListProps,
  FlatListSwipeableListProps,
} from "../SwipeableItem";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A SwipeableList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleSwipeableList = <T extends { [key: string]: any }>({
  style: styleProp,
  ...rest
}: Omit<
  FlashListSwipeableListProps<T> | FlatListSwipeableListProps<T>,
  "contentContainerStyle"
>) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    //@ts-ignore contentContainerStyle has different types for FlashList and FlatList implmentations and confuses TS
    <SwipeableList
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleSwipeableList;
