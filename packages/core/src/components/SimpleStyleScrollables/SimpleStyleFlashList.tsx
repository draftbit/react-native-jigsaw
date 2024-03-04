import React from "react";
import { FlashList } from "@shopify/flash-list";
import type { FlashListProps, ContentStyle } from "@shopify/flash-list";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A FlashList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlashList = <T extends any>({
  style: styleProp,
  ...rest
}: Omit<FlashListProps<T>, "contentContainerStyle">) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    <FlashList
      style={style}
      contentContainerStyle={contentContainerStyle as ContentStyle}
      {...rest}
    />
  );
};

export default SimpleStyleFlashList;
