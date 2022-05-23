import { StyleSheet, StyleProp, TextStyle } from "react-native";
import { isString, isNumber, pick, pickBy, identity } from "lodash";

export function extractStyles(style: StyleProp<any>) {
  const {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
    ...viewStyles
  } = StyleSheet.flatten(style || {});

  const textStyles: TextStyle = {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
  };

  return { viewStyles, textStyles };
}

export const borderStyleNames = [
  "borderRadius",
  "borderBottomColor",
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderBottomWidth",
  "borderColor",
  "borderEndColor",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",
  "borderRightColor",
  "borderRightWidth",
  "borderStartColor",
  "borderStyle",
  "borderTopColor",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
  "borderTopWidth",
  "borderWidth",
];

export const marginStyleNames = [
  "margin",
  "marginBottom",
  "marginEnd",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginStart",
  "marginTop",
  "marginVertical",
];

export function extractBorderAndMarginStyles(
  style: StyleProp<any>,
  additionalBorderStyles?: string[],
  additionalMarginStyles?: string[]
) {
  const flatStyle = StyleSheet.flatten(style || {});

  const borderStyles = pickBy(
    pick(flatStyle, [
      ...borderStyleNames,
      ...(additionalBorderStyles ? additionalBorderStyles : []),
    ]),
    identity
  );

  const marginStyles = pickBy(
    pick(flatStyle, [
      ...marginStyleNames,
      ...(additionalMarginStyles ? additionalMarginStyles : []),
    ]),
    identity
  );

  return { borderStyles, marginStyles };
}

/**
 * Merges a style object on top of another style object. In React Native,
 * keys with undefined values in a style object will still override styles
 * that appear earlier in a sequence. This avoids that problem.
 *
 * This lets us avoid the `...(something ? { something } : {})` pattern.
 * There doesn't seem to be a better way to do this. These all seem to not
 * work (i.e. they all result in `{ color: undefined }`:
 * `const mergedStyles = [{ color: "red" }, { color: undefined }]`
 * `const mergedStyles = StyleSheet.compose({ color: "red" }, { color: undefined })`
 * `const mergedStyles = StyleSheet.flatten([{ color: "red" }, { color: undefined }])`
 */
export function applyStyles(
  baseStyles: Array<StyleProp<any>>,
  stylesToApply: StyleProp<any> | undefined
) {
  if (!stylesToApply) {
    return;
  }

  const flattenedStyles = StyleSheet.flatten(baseStyles);

  for (const [key, value] of Object.entries(stylesToApply)) {
    if (value != null) {
      flattenedStyles[key] = value;
    }
  }

  return flattenedStyles;
}

export function getValueForRadioButton(value: string | number) {
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return String(value);
  } else {
    throw new Error(`Invalid value: ${value}`);
  }
}
