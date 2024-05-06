import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import type { MasonryFlashListProps, ContentStyle } from "@shopify/flash-list";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A MasonryFlashList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleMasonryFlashList = <T extends any>({
  style: styleProp,
  data,
  ...rest
}: Omit<MasonryFlashListProps<T>, "contentContainerStyle">) => {
  const { style, contentContainerStyle } =
    useSplitContentContainerStyles(styleProp);

  return (
    <MasonryFlashList
      style={style}
      contentContainerStyle={contentContainerStyle as ContentStyle}
      data={data}
      {...rest}
    />
  );
};

export default SimpleStyleMasonryFlashList;
