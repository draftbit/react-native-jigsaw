import React from "react";
import { FlashList } from "@shopify/flash-list";
import type { FlashListProps, ContentStyle } from "@shopify/flash-list";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";
import { pick } from "lodash";

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
      <FlashList
        ref={ref}
        style={style}
        contentContainerStyle={flashListContentContainerStyle as ContentStyle}
        data={data}
        {...rest}
      />
    );
  }
);

export default SimpleStyleFlashList;
