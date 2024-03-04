import React from "react";
import { ScrollView } from "react-native";
import type { ScrollViewProps } from "react-native";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A ScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleScrollView: React.FC<
  Omit<ScrollViewProps, "contentContainerStyle">
> = ({ style: styleProp, ...rest }) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    <ScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleScrollView;
