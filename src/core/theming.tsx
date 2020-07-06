import { createTheming } from "@draftbit/react-theme-provider";
import DraftbitTheme from "../styles/DraftbitTheme";
import { Theme } from "../types";

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(
  DraftbitTheme
);
