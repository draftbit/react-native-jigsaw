import merge from "deepmerge";
import type {
  Breakpoints,
  Theme,
  ValidatedTheme,
  ColorPalettes,
} from "./types";
import {
  validateBreakpoints,
  validatePalettes,
  validateTheme,
} from "./validators";

export default function createTheme({
  breakpoints,
  palettes,
  theme,
  baseTheme,
}: {
  breakpoints: Breakpoints;
  palettes: ColorPalettes;
  theme: Theme;
  baseTheme?: Theme;
}): ValidatedTheme {
  validateBreakpoints(breakpoints);
  validatePalettes(palettes);
  validateTheme(theme);

  let resultTheme = theme;

  if (baseTheme) {
    validateTheme(baseTheme);
    resultTheme = merge(baseTheme, theme);
  }

  return {
    ...resultTheme,
    validated: true,
  };
}
