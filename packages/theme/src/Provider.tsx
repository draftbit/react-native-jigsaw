import React from "react";
import { Dimensions, Platform } from "react-native";
import createThemeValuesProxy from "./createThemeValuesProxy";
import DefaultTheme from "./DefaultTheme";
import { Breakpoints, ReadTheme, ValidatedTheme } from "./types";

type ThemeContextType = {
  theme: ReadTheme;
  changeTheme: (themeName: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: DefaultTheme,
  changeTheme: () => {},
});

type ProviderProps = {
  themes: ValidatedTheme[];
  breakpoints: Breakpoints;
  initialThemeName: string;
};

const Provider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  themes,
  breakpoints,
  initialThemeName,
  children,
}) => {
  const initialTheme =
    themes.find((theme) => theme.name === initialThemeName) ?? DefaultTheme;

  const [currentTheme, setCurrentTheme] = React.useState(initialTheme);
  const [deviceWidth, setDeviceWidth] = React.useState(
    Dimensions.get("window").width
  );

  React.useEffect(() => {
    const listener = Dimensions.addEventListener("change", ({ window }) =>
      setDeviceWidth(window.width)
    );
    return () => {
      listener.remove();
    };
  });

  const changeTheme = React.useCallback(
    (themeName: string) => {
      const theme = themes.find((theme) => theme.name === themeName);
      if (!theme) {
        console.warn(
          "Theme with name",
          themeName,
          "not found. Make sure it's passed into the top level ThemeProvider"
        );
        return;
      }
      setCurrentTheme(theme);
    },
    [themes, setCurrentTheme]
  );

  const proxiedTheme: ReadTheme = React.useMemo(
    () => ({
      ...currentTheme,
      colors: {
        branding: createThemeValuesProxy(
          currentTheme.colors.branding,
          breakpoints,
          deviceWidth,
          Platform.OS
        ),
        text: createThemeValuesProxy(
          currentTheme.colors.text,
          breakpoints,
          deviceWidth,
          Platform.OS
        ),
        background: createThemeValuesProxy(
          currentTheme.colors.background,
          breakpoints,
          deviceWidth,
          Platform.OS
        ),
        foreground: createThemeValuesProxy(
          currentTheme.colors.foreground,
          breakpoints,
          deviceWidth,
          Platform.OS
        ),
        border: createThemeValuesProxy(
          currentTheme.colors.border,
          breakpoints,
          deviceWidth,
          Platform.OS
        ),
      },
    }),
    [currentTheme, deviceWidth, breakpoints]
  );

  return (
    <ThemeContext.Provider value={{ theme: proxiedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ReadTheme => {
  const { theme } = React.useContext(ThemeContext);
  return theme;
};

const useChangeTheme = (): ((themeName: string) => void) => {
  const { changeTheme } = React.useContext(ThemeContext);
  return changeTheme;
};

const withTheme = <Props extends { theme: ReadTheme }>(
  Component: React.ComponentType<Props>
): React.ComponentType<Omit<Props, "theme">> => {
  return (props: Omit<Props, "theme">) => {
    const { theme } = React.useContext(ThemeContext);
    return <Component {...(props as Props)} theme={theme} />;
  };
};

export { Provider, useTheme, useChangeTheme, withTheme };
