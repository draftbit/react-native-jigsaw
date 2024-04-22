import React from "react";
import { StyleSheet, StyleProp, TextStyle } from "react-native";
import { isString, isNumber, pick, pickBy, identity, isEqual } from "lodash";

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

  for (let key in textStyles) {
    const styleKey = key as keyof TextStyle;
    if (textStyles[styleKey] === undefined) {
      delete textStyles[styleKey];
    }
  }

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

export const paddingStyleNames = [
  "padding",
  "paddingBottom",
  "paddingEnd",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingStart",
  "paddingTop",
  "paddingVertical",
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

export const flexItemStyleNames = [
  "alignSelf",
  "flexBasis",
  "flexShrink",
  "flexGrow",
  "flex",
];

export function extractFlexItemStyles(
  style: StyleProp<any>,
  additionalFlexItemStyles?: string[]
) {
  const flatStyle = StyleSheet.flatten(style || {});

  const flexItemStyles = pickBy(
    pick(flatStyle, [
      ...flexItemStyleNames,
      ...(additionalFlexItemStyles ? additionalFlexItemStyles : []),
    ]),
    identity
  );

  return flexItemStyles;
}

export const positionStyleNames = [
  "position",
  "left",
  "right",
  "top",
  "bottom",
  "zIndex",
  "overflow",
];

export function extractPositionStyles(
  style: StyleProp<any>,
  additionalPositionStyles?: string[]
) {
  const flatStyle = StyleSheet.flatten(style || {});

  const positionStyles = pickBy(
    pick(flatStyle, [
      ...positionStyleNames,
      ...(additionalPositionStyles ? additionalPositionStyles : []),
    ]),
    identity
  );

  return positionStyles;
}

export const effectsStyleNames = ["opacity", "elevation"];

export function extractEffectStyles(
  style: StyleProp<any>,
  additionalEffectStyles?: string[]
) {
  const flatStyle = StyleSheet.flatten(style || {});

  const effectStyles = pickBy(
    pick(flatStyle, [
      ...effectsStyleNames,
      ...(additionalEffectStyles ? additionalEffectStyles : []),
    ]),
    identity
  );

  return effectStyles;
}

export const sizeStyleNames = ["width", "height", "minWidth", "minHeight"];

export function extractSizeStyles(
  style: StyleProp<any>,
  additionalSizeStyles?: string[]
) {
  const flatStyle = StyleSheet.flatten(style || {});

  const sizeStyles = pickBy(
    pick(flatStyle, [
      ...sizeStyleNames,
      ...(additionalSizeStyles ? additionalSizeStyles : []),
    ]),
    identity
  );

  return sizeStyles;
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

/**
 * Flattens array of components to remove any React.Fragment's (<> </>) and returns the fragment's children in its place
 * This is useful for operations that depend on a particular child type that would otherwise not match when wrapped in a fragment
 */
export function flattenReactFragments(
  components: React.ReactElement[]
): React.ReactElement[] {
  const flattened = [];
  for (const component of components) {
    if (component.type === React.Fragment) {
      const children = React.Children.toArray(
        component.props?.children
      ) as React.ReactElement[];

      for (const child of children) {
        flattened.push(...flattenReactFragments([child]));
      }
    } else {
      flattened.push(component);
    }
  }

  return flattened;
}

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

/**
 * useMemo counterpart that does a deep compare on the dependency list
 */
export function useDeepCompareMemo<T>(
  factory: () => T,
  deps: React.DependencyList
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(factory, deps?.map(useDeepCompareMemoize));
}

/**
 * useMemo counterpart that does a deep compare on the dependency list
 */
export function useDeepCompareEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(effect, deps?.map(useDeepCompareMemoize));
}
