import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import type {
  MasonryFlashListProps,
  ContentStyle,
  MasonryFlashListRef,
} from "@shopify/flash-list";
import { useFlashListSplitContentContainerStyles } from "./useSplitContentContainerStyles";

/**
 * A MasonryFlashList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleMasonryFlashList = React.forwardRef(
  <T extends any>(
    {
      style: styleProp,
      data,
      ...rest
    }: Omit<MasonryFlashListProps<T>, "contentContainerStyle">,
    ref: React.Ref<MasonryFlashListRef<any>>
  ) => {
    const { style, contentContainerStyle } =
      useFlashListSplitContentContainerStyles(styleProp);

    return (
      <MasonryFlashList
        ref={ref as any}
        style={style}
        contentContainerStyle={contentContainerStyle as ContentStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleMasonryFlashList;
