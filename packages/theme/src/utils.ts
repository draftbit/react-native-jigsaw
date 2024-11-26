import { isObject } from "lodash";
import type { ThemeValues } from "./types";

export function isTextStyleObject(value: any): boolean {
  try {
    return Object.keys(value).some((key) =>
      [
        "fontFamily",
        "fontWeight",
        "fontSize",
        "fontStyle",
        "lineHeight",
        "letterSpacing",
      ].includes(key)
    );
  } catch (e) {
    // If `value` is not an object, the above code will throw an error
    // Catch error and return false is more efficient than a call to `isObject`
    return false;
  }
}

export function asThemeValuesObject(value: any): ThemeValues | null {
  // Any object that isn't a text style object is considered a ThemeValues object
  return !isTextStyleObject(value) && isObject(value)
    ? (value as ThemeValues)
    : null;
}
