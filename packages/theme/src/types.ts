export type ThemeValues = {
  [key: string]: string | number | ThemeValues;
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
  typography: { [key: string]: any }; //TODO: Update theme to support typography. Left as 'any' for legacy support until updated and migrated
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
