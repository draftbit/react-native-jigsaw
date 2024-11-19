import { systemWeights } from "react-native-typography";
import createTheme from "./createTheme";
import { ColorPalettes } from "./types";

const palettes: ColorPalettes = {
  draftbit: {
    primary: "rgb(90, 69, 255)",
    secondary: "rgb(59, 201, 234)",
    tertiary: "rgb(90,69,255)",
    background: "rgba(251, 252, 253, 1)",
    error: "rgba(255, 69, 100, 1)",
    divider: "rgba(200, 200, 200, 1)",
    strong: "rgba(18, 20, 44, 1)",
    medium: "rgba(70, 78, 88, 1)",
    light: "rgba(165, 173, 183, 1)",
    text: "#000",
    success: "#22bb33",
    warning: "#f0ad4e",
    info: "#aaaaaa",
  },
};

const DraftbitTheme = createTheme({
  breakpoints: {},
  palettes,
  theme: {
    name: "Draftbit",
    colors: {
      branding: {
        primary: palettes.draftbit.primary,
        secondary: palettes.draftbit.secondary,
        tertiary: palettes.draftbit.tertiary,
        accent: palettes.draftbit.secondary,
      },
      text: {
        strong: palettes.draftbit.strong,
        medium: palettes.draftbit.medium,
        normal: palettes.draftbit.text,
        light: palettes.draftbit.light,
        success: palettes.draftbit.success,
        warning: palettes.draftbit.warning,
        danger: palettes.draftbit.error,
      },
      background: {
        brand: palettes.draftbit.background,
        info: palettes.draftbit.info,
        success: palettes.draftbit.success,
        warning: palettes.draftbit.warning,
        danger: palettes.draftbit.error,
      },
      foreground: {
        brand: palettes.draftbit.light,
        info: palettes.draftbit.strong,
        success: palettes.draftbit.light,
        warning: palettes.draftbit.light,
        danger: palettes.draftbit.light,
      },
      border: {
        brand: palettes.draftbit.divider,
        info: palettes.draftbit.divider,
        success: palettes.draftbit.divider,
        warning: palettes.draftbit.divider,
        danger: palettes.draftbit.divider,
      },
    },
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
  },
});

export default DraftbitTheme;
