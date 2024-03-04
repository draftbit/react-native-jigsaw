import React from "react";
import { SectionList } from "../SectionList";
import type {
  FlatListSectionListProps,
  FlashListSectionListProps,
} from "../SectionList";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A SectionList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleSectionList = <T extends { [key: string]: any }>({
  style: styleProp,
  ...rest
}: Omit<
  FlatListSectionListProps<T> | FlashListSectionListProps<T>,
  "contentContainerStyle"
>) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    //@ts-ignore contentContainerStyle has different types for FlashList and FlatList implmentations and confuses TS
    <SectionList
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleSectionList;
