import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import type { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A KeyboardAwareScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleKeyboardAwareScrollView = React.forwardRef(
  (
    {
      style: styleProp,
      ...rest
    }: Omit<KeyboardAwareScrollViewProps, "contentContainerStyle">,
    ref: React.Ref<KeyboardAwareScrollView>
  ) => {
    const { style, contentContainerStyle } =
      useSplitContentContainerStyles(styleProp);

    return (
      <KeyboardAwareScrollView
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle}
        {...rest}
      />
    );
  }
);

export default SimpleStyleKeyboardAwareScrollView;
