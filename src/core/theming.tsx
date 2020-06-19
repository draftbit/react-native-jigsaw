import { createTheming } from "@draftbit/react-theme-provider";
import DefaultTheme from "../styles/DefaultTheme";
import { Theme } from "../types";

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(
  DefaultTheme
);
