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
 */
export function applyStyles(
  baseStyles: StyleProp<any>,
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
