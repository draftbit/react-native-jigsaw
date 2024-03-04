import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { pick, omit } from "lodash";

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

export default function splitContentContainerStyles(
  originalStyle: StyleProp<ViewStyle>
) {
  const flattenedStyle = StyleSheet.flatten(originalStyle);

  let contentContainerStyle = pick(flattenedStyle, contentContainerStyleNames);
  // contentContainerStyle should always at least fill the parent to ensure sizing changes reflects properly on component and children
  contentContainerStyle = {
    minHeight: "100%",
    minWidth: "100%",
    ...contentContainerStyle,
  };

  let style = omit(flattenedStyle, contentContainerStyleNames);
  // ScrollView's implementation defaults flexGrow to 1, which prevents the ability to set a static size
  // See: https://github.com/facebook/react-native/issues/3422
  style = { flexGrow: 0, ...style };

  return { style, contentContainerStyle };
}
