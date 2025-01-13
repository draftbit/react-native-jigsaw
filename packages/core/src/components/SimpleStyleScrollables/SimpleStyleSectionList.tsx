import React from "react";
import { SectionList } from "../SectionList";
import type {
  FlatListSectionListProps,
  FlashListSectionListProps,
} from "../SectionList";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";
import { FlatList } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";

/**
 * A SectionList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleSectionList = React.forwardRef(
  <T extends { [key: string]: any }>(
    {
      style: styleProp,
      data,
      ...rest
    }: Omit<
      FlatListSectionListProps<T> | FlashListSectionListProps<T>,
      "contentContainerStyle"
    >,
    ref: React.Ref<FlatList | FlashList<any>>
  ) => {
    const { style, contentContainerStyle } =
      useSplitContentContainerStyles(styleProp);

    return (
      //@ts-ignore contentContainerStyle has different types for FlashList and FlatList implmentations and confuses TS
      <SectionList
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleSectionList;
