import { createTheming } from "@draftbit/react-theme-provider";
import DefaultTheme from "./styles/DefaultTheme";
import type { Theme } from "./index";

export const { ThemeProvider, withTheme, useTheme } =
  createTheming<Theme>(DefaultTheme);
