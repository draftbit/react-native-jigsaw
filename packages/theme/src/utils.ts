import { isObject } from "lodash";
import type { ThemeValues } from "./types";

export function isTextStyleObject(value: any): boolean {
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
}

export function asThemeValuesObject(value: any): ThemeValues | null {
  // Any object that isn't a text style object is considered a ThemeValues object
  return !isTextStyleObject(value) && isObject(value)
    ? (value as ThemeValues)
    : null;
}
