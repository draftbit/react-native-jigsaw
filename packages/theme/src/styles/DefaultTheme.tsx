import { systemWeights } from "react-native-typography";
import configureFonts from "./fonts";

// Each of these colors should have a counterpart in new themes for migration be possible

type ThemeValues = {
  [key: string]: string | number | ThemeValues;
};

type NewTheme = {
  name: string;
  colors: {
    branding?: ThemeValues;
    text?: ThemeValues;
    background?: ThemeValues;
    foreground?: ThemeValues;
    border?: ThemeValues;
  };
  typography: { [key: string]: any }; //TODO: Update theme to support typography. Left as 'any' for legacy support until updated and migrated
};

type ColorPaletteValues = {
  [key: string]: string;
};

type ColorPalettes = {
  [key: string]: ColorPaletteValues;
};

type Breakpoints = {
  [key: string]: number;
};

function validatePalettes(palettes: ColorPalettes) {
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

function validateBreakpoints(breakpoints: Breakpoints) {
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

function validateTheme(theme: NewTheme, breakpoints: Breakpoints) {
  const reservedPlatformKeys = ["ios", "android", "web", "macos", "windows"];
  const breakpointKeys = Object.keys(breakpoints);

  // TODO: validate correct format for theme (not colors only)
  // Make sure reserved keys are not used, otherwise throw an error
}

//TODO: Context and providers (can access current theme) and utility to switch themes at any point
// Use name as theme identifier to change theme. Validate no 2 themes with same name

function createTheme({
  breakpoints,
  palettes,
  theme,
  baseTheme,
}: {
  breakpoints: Breakpoints;
  palettes: ColorPalettes;
  theme: NewTheme;
  baseTheme?: NewTheme;
}): NewTheme {
  validateBreakpoints(breakpoints);
  validatePalettes(palettes);
  validateTheme(theme, breakpoints);

  //TODO: Use base theme and duplicate

  return theme;
}

const theme: NewTheme = {
  name: "My theme",
  colors: {
    branding: {
      hello: "",
    },
    text: {},
    background: {},
    foreground: {},
    border: {},
  },
  typography: {},
};

const DefaultTheme = {
  disabledOpacity: 0.5,
  roundness: 8,
  dark: false,
  mode: "exact",
  borderRadius: {
    global: 6,
    button: 24,
  },
  colors: {
    primary: "rgba(90, 69, 255, 1)",
    secondary: "rgba(59, 201, 234, 1)",
    surface: "rgba(255, 255, 255, 1)",
    background: "rgba(251, 252, 253, 1)",
    error: "rgba(255, 69, 100, 1)",
    divider: "rgba(200, 200, 200, 1)",
    strong: "rgba(18, 20, 44, 1)",
    medium: "rgba(70, 78, 88, 1)",
    strongInverse: "rgba(255, 255, 255, 1)",
    mediumInverse: "rgba(255, 255, 255, 0.87)",
    lightInverse: "rgba(255, 255, 255, 0.68)",
    light: "rgba(165, 173, 183, 1)",
    text: "#000",
    placeholder: "#333",
    disabled: "rgba(0, 0, 0, 0.25)",
  },
  fonts: configureFonts(),
  typography: {
    headline1: {
      ...systemWeights.regular,
      fontSize: 60,
      letterSpacing: 0,
      lineHeight: 71,
    },
    headline2: {
      ...systemWeights.regular,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 58,
    },
    headline3: {
      ...systemWeights.regular,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 40,
    },
    headline4: {
      ...systemWeights.regular,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline5: {
      ...systemWeights.regular,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    body1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    body2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    button: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 16,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
    },
    headline6: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
  },
};

export default DefaultTheme;
export type Theme = typeof DefaultTheme;
