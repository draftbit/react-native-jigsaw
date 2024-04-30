import React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { pick, omit } from "lodash";
import { useDeepCompareMemo } from "../../utilities";

interface Styles {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const contentContainerStyleNames = [
  "padding",
  "paddingBottom",
  "paddingEnd",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingStart",
  "paddingTop",
  "paddingVertical",
  "justifyContent",
  "alignItems",
  "alignContent",
  "flexDirection",
  "flexWrap",
  "gap",
  "columnGap",
  "rowGap",
];

export default function useSplitContentContainerStyles(
  originalStyle: StyleProp<ViewStyle>,
  measuredWidth?: number,
  measuredHeight?: number,
  recalculateSizeDeps: React.DependencyList = []
) {
  // This temporarily removes contentContainerStyle min sizes whenever some
  // given dependencies change to allow the list to properly recalculate it's measured size
  const [tempContentContainerStyle, setTempContentContainerStyle] =
    React.useState<ViewStyle | null>(null);

  React.useEffect(() => {
    if (tempContentContainerStyle) {
      setTempContentContainerStyle(null);
    }
    // We only want this to run when measured size changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measuredHeight, measuredWidth]);

  React.useEffect(() => {
    setTempContentContainerStyle({ minHeight: 0, minWidth: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, recalculateSizeDeps);

  return useDeepCompareMemo<Styles>(() => {
    const flattenedStyle = StyleSheet.flatten(originalStyle);

    let contentContainerStyle = pick(
      flattenedStyle,
      contentContainerStyleNames
    );

    const leftBorderWidth =
      flattenedStyle?.borderLeftWidth ?? flattenedStyle?.borderWidth ?? 0;
    const rightBorderWidth =
      flattenedStyle?.borderRightWidth ?? flattenedStyle?.borderWidth ?? 0;
    const topBorderWidth =
      flattenedStyle?.borderTopWidth ?? flattenedStyle?.borderWidth ?? 0;
    const bottomBorderWidth =
      flattenedStyle?.borderBottomWidth ?? flattenedStyle?.borderWidth ?? 0;

    // contentContainerStyle should always at least fill the parent to ensure sizing changes reflects properly on component and children.
    // The measured sizes include borders, so we need to subtract those before applying
    if (measuredWidth) {
      contentContainerStyle.minWidth =
        measuredWidth - leftBorderWidth - rightBorderWidth;
    }
    if (measuredHeight) {
      contentContainerStyle.minHeight =
        measuredHeight - topBorderWidth - bottomBorderWidth;
    }

    let style = omit(flattenedStyle, contentContainerStyleNames);

    // ScrollView's implementation defaults flexGrow to 1, which prevents the ability to set a static size or use a flex larger than 1
    // See: https://github.com/facebook/react-native/issues/3422
    if (style.flex === undefined) {
      style = { flexGrow: 0, ...style };
    } else if (style.flexGrow === undefined) {
      style = { flexGrow: style.flex, ...style };
    }

    return {
      style,
      contentContainerStyle: StyleSheet.flatten([
        contentContainerStyle,
        tempContentContainerStyle,
      ]),
    };
  }, [originalStyle, measuredWidth, measuredHeight, tempContentContainerStyle]);
}
