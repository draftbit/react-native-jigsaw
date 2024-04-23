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
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight,
    [data]
  );

  return (
    <MasonryFlashList
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

export default SimpleStyleMasonryFlashList;
