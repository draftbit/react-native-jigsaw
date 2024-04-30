import { createTheming } from "@draftbit/react-theme-provider";
import merge from "deepmerge";
import DefaultTheme from "./DefaultTheme";
import type { Breakpoints, Theme, ColorPalettes } from "./types";
import {
  validateBreakpoints,
  validatePalettes,
  validateTheme,
} from "./validators";

//TODO: Context and providers (can access current theme) and utility to switch themes at any point
// Use name as theme identifier to change theme. Validate no 2 themes with same name

//TODO: Proxy (getters, setters) of some sort to be able to control which value is returned on theme.colors.branding.primary (platform, breakpoints, etc)

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

  let result = theme;

  if (baseTheme) {
    validateTheme(baseTheme);
    result = merge(baseTheme, theme);
  }

  return result;
}

export const { ThemeProvider, withTheme, useTheme } =
  createTheming<Theme>(DefaultTheme);
