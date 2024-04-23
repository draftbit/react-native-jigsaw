import React from "react";
import { SwipeableList } from "../SwipeableItem";
import type {
  FlashListSwipeableListProps,
  FlatListSwipeableListProps,
} from "../SwipeableItem";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A SwipeableList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleSwipeableList = <T extends { [key: string]: any }>({
  style: styleProp,
  data,
  ...rest
}: Omit<
  FlashListSwipeableListProps<T> | FlatListSwipeableListProps<T>,
  "contentContainerStyle"
>) => {
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight,
    [data]
  );

  return (
    //@ts-ignore contentContainerStyle has different types for FlashList and FlatList implmentations and confuses TS
    <SwipeableList
      onLayout={(event) => {
        setMeasuredWidth(event.nativeEvent.layout.width);
        setMeasuredHeight(event.nativeEvent.layout.height);
      }}
      style={style}
      contentContainerStyle={contentContainerStyle}
      data={data}
      {...rest}
    />
  );
};

export default SimpleStyleSwipeableList;
