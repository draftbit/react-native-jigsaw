import React from "react";
import { FlatList } from "react-native";
import type { FlatListProps } from "react-native";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A FlatList wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleFlatList = <T extends any>({
  style: styleProp,
  data,
  ...rest
}: Omit<FlatListProps<T>, "contentContainerStyle">) => {
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight,
    [data]
  );

  return (
    <FlatList
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

export default SimpleStyleFlatList;
