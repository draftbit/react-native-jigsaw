import React from "react";
import { ScrollView, RefreshControl } from "react-native";
import type { ScrollViewProps } from "react-native";
import useSplitContentContainerStyles from "./useSplitContentContainerStyles";

interface Props extends Omit<ScrollViewProps, "contentContainerStyle"> {
  onRefresh?: () => void;
  refreshing?: boolean;
}

/**
 * A ScrollView wrapper that takes a single `style` prop and internally extracts
 * the appropriate style keys into the `contentContainerStyle`
 */
const SimpleStyleScrollView = React.forwardRef(
  (
    { style: styleProp, onRefresh, refreshing = false, ...rest }: Props,
    ref: React.Ref<ScrollView>
  ) => {
    const { style, contentContainerStyle } =
      useSplitContentContainerStyles(styleProp);

    return (
      <ScrollView
        ref={ref}
        style={style}
        contentContainerStyle={contentContainerStyle}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : undefined
        }
        {...rest}
      />
    );
  }
);

export default SimpleStyleScrollView;
