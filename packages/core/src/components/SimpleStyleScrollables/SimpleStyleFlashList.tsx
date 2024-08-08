import React from "react";
import { FlashList } from "@shopify/flash-list";
import type { FlashListProps, ContentStyle } from "@shopify/flash-list";
import { useFlashListSplitContentContainerStyles } from "./useSplitContentContainerStyles";

/**
 * A FlashList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlashList = React.forwardRef(
  <T extends any>(
    {
      style: styleProp,
      data,
      ...rest
    }: Omit<FlashListProps<T>, "contentContainerStyle">,
    ref: React.Ref<FlashList<any>>
  ) => {
    const { style, contentContainerStyle } =
      useFlashListSplitContentContainerStyles(styleProp);

    return (
      <FlashList
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle as ContentStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleFlashList;
