import React from "react";
import { ScrollView } from "react-native";
import type { ScrollViewProps } from "react-native";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A ScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleScrollView: React.FC<
  Omit<ScrollViewProps, "contentContainerStyle">
> = ({ style: styleProp, ...rest }) => {
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight
  );

  return (
    <ScrollView
      onLayout={(event) => {
        setMeasuredWidth(event.nativeEvent.layout.width);
        setMeasuredHeight(event.nativeEvent.layout.height);
      }}
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleScrollView;
