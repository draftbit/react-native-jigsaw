import type {
  Breakpoints,
  Theme,
  ValidatedTheme,
  ColorPalettes,
} from "./types";

import merge from "deepmerge";

/**
 * Custom deepmerge function to skip merging of typography/text style objects.
 *
 * The theme object allows for special keys that trigger variability depending
 * on platform, breakpoint, color mode, etc.
 *
 * Text style objects can break this logic when merged with other objects.
 * For example, if you merge a standard text style object with another object that
 * has variability through the special keys, you get an object with both special
 * keys and the keys of the style object which breaks how the proxy is able to
 * return the correct value.
 */

export default function createTheme({
  theme,
  baseTheme,
}: {
  breakpoints: Breakpoints;
  palettes: ColorPalettes;
  theme: Theme;
  baseTheme?: Theme;
}): ValidatedTheme {
  // validateBreakpoints(breakpoints);
  // validatePalettes(palettes);
  // validateTheme(theme);

  let resultTheme = theme;

  if (baseTheme) {
    //validateTheme(baseTheme);
    resultTheme = merge(baseTheme, theme);
  }

  return {
    ...resultTheme,
    validated: true,
  };
}
