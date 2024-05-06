import { createTheming } from "@draftbit/react-theme-provider";
import merge from "deepmerge";
import type { Breakpoints, Theme, ColorPalettes } from "./types";
import {
  validateBreakpoints,
  validatePalettes,
  validateTheme,
} from "./validators";
import createThemeValuesProxy from "./createThemeValuesProxy";

//TODO: Context and providers (can access current theme) and utility to switch themes at any point
// Use name as theme identifier to change theme. Validate no 2 themes with same name

export function createTheme({
  breakpoints,
  palettes,
  theme,
  baseTheme,
}: {
  breakpoints: Breakpoints;
  palettes: ColorPalettes;
  theme: Theme;
  baseTheme?: Theme;
}): Theme {
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
    colors: {
      branding: createThemeValuesProxy(
        resultTheme.colors.branding,
        breakpoints,
        400,
        "android"
      ),
      text: createThemeValuesProxy(
        resultTheme.colors.text,
        breakpoints,
        400,
        "android"
      ),
      background: createThemeValuesProxy(
        resultTheme.colors.background,
        breakpoints,
        400,
        "android"
      ),
      foreground: createThemeValuesProxy(
        resultTheme.colors.foreground,
        breakpoints,
        400,
        "android"
      ),
      border: createThemeValuesProxy(
        resultTheme.colors.border,
        breakpoints,
        400,
        "android"
      ),
    },
  };
}
//TODO: Device width should be dynamic, maybe proxies should be created at provider level,
// not on theme creation level

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(
  {} as any
);
