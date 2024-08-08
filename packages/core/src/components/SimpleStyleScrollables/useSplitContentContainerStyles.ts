import { StyleProp, ViewStyle, StyleSheet, Dimensions } from "react-native";
import { pick, omit } from "lodash";
import { extractPercentNumber, useDeepCompareMemo } from "../../utilities";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

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
  originalStyle: StyleProp<ViewStyle>
) {
  return useDeepCompareMemo<Styles>(() => {
    const flattenedStyle = StyleSheet.flatten(originalStyle);

    const contentContainerStyle = pick(
      flattenedStyle,
      contentContainerStyleNames
    );

    // contentContainerStyle should always at least fill the parent to ensure sizing changes reflects properly on component and children.
    contentContainerStyle.flexGrow = 1;

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
      contentContainerStyle,
    };
  }, [originalStyle]);
}

export function useFlashListSplitContentContainerStyles(
  originalStyle: StyleProp<ViewStyle>
): Styles {
  const { style, contentContainerStyle } =
    useSplitContentContainerStyles(originalStyle);

  // FlashList only supports a subset of contentContainerStyles
  // See https://shopify.github.io/flash-list/docs/usage/#contentcontainerstyle
  const flashListContentContainerStyle = pick(contentContainerStyle, [
    "backgroundColor",
    "paddingTop",
    "paddingLeft",
    "paddingRight",
    "paddingBottom",
    "padding",
    "paddingVertical",
    "paddingHorizontal",
  ]) as { [key: string]: any };

  // FlashList percentage paddings cause it to freeze and crash
  // This converts them to numbers based on device width/height
  for (const [key, value] of Object.entries(flashListContentContainerStyle)) {
    if (typeof value === "string" && key.includes("padding")) {
      const asNumber = extractPercentNumber(value);
      if (asNumber !== undefined) {
        switch (key) {
          case "padding":
          case "paddingLeft":
          case "paddingRight":
          case "paddingHorizontal":
            flashListContentContainerStyle[key] =
              DEVICE_WIDTH * (asNumber / 100);
            break;
          case "paddingTop":
          case "paddingBottom":
          case "paddingVertical":
            flashListContentContainerStyle[key] =
              DEVICE_HEIGHT * (asNumber / 100);
            break;
        }
      }
    }
  }

  return {
    style,
    contentContainerStyle: flashListContentContainerStyle,
  };
}
