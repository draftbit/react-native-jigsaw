import React from "react";
import { FlashList } from "@shopify/flash-list";
import type { FlashListProps, ContentStyle } from "@shopify/flash-list";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A FlashList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlashList = <T extends any>({
  style: styleProp,
  data,
  ...rest
}: Omit<FlashListProps<T>, "contentContainerStyle">) => {
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight,
    [data]
  );

  return (
    <FlashList
      onLayout={(event) => {
        setMeasuredWidth(event.nativeEvent.layout.width);
        setMeasuredHeight(event.nativeEvent.layout.height);
      }}
      style={style}
      contentContainerStyle={contentContainerStyle as ContentStyle}
      data={data}
      {...rest}
    />
  );
};

export default SimpleStyleFlashList;
