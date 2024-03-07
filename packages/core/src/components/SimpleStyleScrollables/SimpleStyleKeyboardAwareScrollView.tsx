import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import type { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

/**
 * A KeyboardAwareScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleKeyboardAwareScrollView: React.FC<
  Omit<KeyboardAwareScrollViewProps, "contentContainerStyle">
> = ({ style: styleProp, ...rest }) => {
  const [measuredWidth, setMeasuredWidth] = React.useState<number>();
  const [measuredHeight, setMeasuredHeight] = React.useState<number>();

  const { style, contentContainerStyle } = useSplitContentContainerStyles(
    styleProp,
    measuredWidth,
    measuredHeight
  );

  return (
    <KeyboardAwareScrollView
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

export default SimpleStyleKeyboardAwareScrollView;
