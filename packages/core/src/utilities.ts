import { StyleSheet, StyleProp, TextStyle } from "react-native";

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
