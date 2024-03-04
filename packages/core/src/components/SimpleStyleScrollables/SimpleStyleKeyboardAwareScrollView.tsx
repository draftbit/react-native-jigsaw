import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import type { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
import splitContentContainerStyles from "./splitContentContainerStyles";

/**
 * A KeyboardAwareScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleKeyboardAwareScrollView: React.FC<
  Omit<KeyboardAwareScrollViewProps, "contentContainerStyle">
> = ({ style: styleProp, ...rest }) => {
  const { style, contentContainerStyle } =
    splitContentContainerStyles(styleProp);

  return (
    <KeyboardAwareScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    />
  );
};

export default SimpleStyleKeyboardAwareScrollView;
