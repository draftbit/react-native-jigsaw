import { systemWeights } from "react-native-typography";

export default {
  disabledOpacity: 0.5,
  dark: false,
  borderRadius: 8,
  colors: {
    primary: "rgba(90, 69, 255, 1)",
    secondary: "rgba(59, 201, 234, 1)",
    surface: "rgba(255, 255, 255, 1)",
    background: "rgba(251, 252, 253, 1)",
    error: "rgba(255, 69, 100, 1)",
    divider: "rgba(234, 237, 242, 1)",
    strong: "rgba(18, 20, 44, 1)",
    medium: "rgba(70, 78, 88, 1)",
    light: "rgba(165, 173, 183, 1)",
    placeholder: "#333",
    text: "#000",
    disabled: "rgba(0, 0, 0, 0.25)",
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
};
