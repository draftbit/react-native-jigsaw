import React from "react";
import { ScrollView } from "react-native";
import type { ScrollViewProps } from "react-native";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A ScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleScrollView = React.forwardRef(
  (
    {
      style: styleProp,
      ...rest
    }: Omit<ScrollViewProps, "contentContainerStyle">,
    ref: React.Ref<ScrollView>
  ) => {
    const { style, contentContainerStyle } =
      useSplitContentContainerStyles(styleProp);

    return (
      <ScrollView
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle}
        {...rest}
      />
    );
  }
);

export default SimpleStyleScrollView;
