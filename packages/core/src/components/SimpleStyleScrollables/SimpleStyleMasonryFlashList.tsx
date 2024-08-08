import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import type {
  MasonryFlashListProps,
  ContentStyle,
  MasonryFlashListRef,
} from "@shopify/flash-list";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";
import { pick } from "lodash";

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
      useSplitContentContainerStyles(styleProp);

    // FlashList only supports a subset of contentContainerStyles
    // See https://shopify.github.io/flash-list/docs/usage/#contentcontainerstyle
    const flashListContentContainerStyle = pick(contentContainerStyle, [
      "backgroundColor",
      "paddingTop",
      "paddingLeft",
      "paddingRight",
      "paddingBottom",
      "padding",
      "paddingVertical",
      "paddingHorizontal",
    ]);

    return (
      <MasonryFlashList
        ref={ref as any}
        style={style}
        contentContainerStyle={flashListContentContainerStyle as ContentStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleMasonryFlashList;
