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
];

export default function useSplitContentContainerStyles(
  originalStyle: StyleProp<ViewStyle>,
  measuredWidth?: number,
  measuredHeight?: number
) {
  return useDeepCompareMemo<Styles>(() => {
    const flattenedStyle = StyleSheet.flatten(originalStyle);

    let contentContainerStyle = pick(
      flattenedStyle,
      contentContainerStyleNames
    );

    // contentContainerStyle should always at least fill the parent to ensure sizing changes reflects properly on component and children
    if (measuredWidth) {
      contentContainerStyle.minWidth = measuredWidth;
    }
    if (measuredHeight) {
      contentContainerStyle.minHeight = measuredHeight;
    }

    let style = omit(flattenedStyle, contentContainerStyleNames);

    // ScrollView's implementation defaults flexGrow to 1, which prevents the ability to set a static size or use a flex larger than 1
    // See: https://github.com/facebook/react-native/issues/3422
    if (style.flex === undefined) {
      style = { flexGrow: 0, ...style };
    } else if (style.flexGrow === undefined) {
      style = { flexGrow: style.flex, ...style };
    }

    return { style, contentContainerStyle };
  }, [originalStyle, measuredWidth, measuredHeight]);
}
