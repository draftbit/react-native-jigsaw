import { ColorPalettes, Breakpoints, Theme, ThemeValues } from "./types";

export function validatePalettes(palettes: ColorPalettes) {
  for (const key of Object.keys(palettes)) {
    if (typeof key !== "string") {
      throw new Error(`Invalid palettes object, ${key} is not a string`);
    }
    for (const [innerKey, value] of Object.entries(palettes[key])) {
      if (typeof innerKey !== "string") {
        throw new Error(
          `Invalid palette color key, ${innerKey} is not a string`
        );
      }
      if (typeof value !== "string") {
        throw new Error(
          `Invalid palette color value, ${value} is not a string`
        );
      }
    }
  }

  return palettes;
}

export function validateBreakpoints(breakpoints: Breakpoints) {
  for (const key of Object.keys(breakpoints)) {
    if (typeof key !== "string") {
      throw new Error(`Invalid breakpoints object, ${key} is not a string`);
    }
    for (const [innerKey, value] of Object.entries(breakpoints[key])) {
      if (typeof innerKey !== "string") {
        throw new Error(`Invalid breakpoint key, ${innerKey} is not a string`);
      }
      if (typeof value !== "number") {
        throw new Error(`Invalid breakpoint value, ${value} is not a number`);
      }
    }
  }
}

export function validateTheme(theme: Theme) {
  function validateThemeValues(themeValue?: ThemeValues) {
    if (themeValue === undefined || themeValue === null) {
      return;
    }
    for (const key of Object.keys(themeValue)) {
      if (typeof key !== "string") {
        throw new Error(`Invalid theme key, ${key} is not a string`);
      }
      for (const [innerKey, value] of Object.entries(themeValue[key])) {
        if (typeof innerKey !== "string") {
          throw new Error(
            `Invalid theme value key, ${innerKey} is not a string`
          );
        }
        if (typeof value === "object") {
          validateThemeValues(value);
        } else if (typeof value !== "string" && typeof value !== "number") {
          throw new Error(
            `Invalid theme value, ${value} is not a string, number, or object`
          );
        }
      }
    }
  }
  validateThemeValues(theme.colors.branding);
  validateThemeValues(theme.colors.text);
  validateThemeValues(theme.colors.foreground);
  validateThemeValues(theme.colors.background);
  validateThemeValues(theme.colors.border);
}
