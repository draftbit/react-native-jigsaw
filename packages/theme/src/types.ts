import { TextStyle } from "react-native";

export type ThemeValues = {
  [key: string]: string | number | TextStyle | ThemeValues;
};

export type Theme = {
  name: string;
  colors: {
    branding?: ThemeValues;
    text?: ThemeValues;
    background?: ThemeValues;
    foreground?: ThemeValues;
    border?: ThemeValues;
  };
  typography: {
    body1?: ThemeValues | TextStyle;
    body2?: ThemeValues | TextStyle;
    button?: ThemeValues | TextStyle;
    caption?: ThemeValues | TextStyle;
    headline1?: ThemeValues | TextStyle;
    headline2?: ThemeValues | TextStyle;
    headline3?: ThemeValues | TextStyle;
    headline4?: ThemeValues | TextStyle;
    headline5?: ThemeValues | TextStyle;
    headline6?: ThemeValues | TextStyle;
    overline?: ThemeValues | TextStyle;
    subtitle1?: ThemeValues | TextStyle;
    subtitle2?: ThemeValues | TextStyle;
  };
};

export type ValidatedTheme = Theme & {
  validated: true;
};

export type ReadTheme = Theme & {
  colors: {
    branding?: any;
    text?: any;
    background?: any;
    foreground?: any;
    border?: any;
  };
  typography: {
    body1?: any;
    body2?: any;
    button?: any;
    caption?: any;
    headline1?: any;
    headline2?: any;
    headline3?: any;
    headline4?: any;
    headline5?: any;
    headline6?: any;
    overline?: any;
    subtitle1?: any;
    subtitle2?: any;
  };
};

export type ColorPaletteValues = {
  [key: string]: string;
};

export type ColorPalettes = {
  [key: string]: ColorPaletteValues;
};

export type Breakpoints = {
  [key: string]: number;
};

export type ChangeThemeOptions = { persistent?: boolean };
