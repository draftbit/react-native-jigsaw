import React from "react";
import { Dimensions, Platform, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createThemeValuesProxy from "./createThemeValuesProxy";
import DefaultTheme from "./DefaultTheme";
import {
  Breakpoints,
  ChangeThemeOptions,
  ReadTheme,
  ValidatedTheme,
} from "./types";

const SAVED_SELECTED_THEME_KEY = "saved_selected_theme";

type ThemeContextType = {
  theme: ReadTheme;
  changeTheme: (themeName: string, options?: ChangeThemeOptions) => void;
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
  const colorScheme = useColorScheme();
  const lightDarkSelection = colorScheme ?? "light";

  const changeTheme = React.useCallback(
    (themeName: string, options?: ChangeThemeOptions) => {
      const theme = themes.find((t) => t.name === themeName);
      if (!theme) {
        console.warn(
          "Theme with name",
          themeName,
          "not found. Make sure it's passed into the top level ThemeProvider"
        );
        return;
      }
      setCurrentTheme(theme);

      if (options?.persistent === true) {
        AsyncStorage.setItem(SAVED_SELECTED_THEME_KEY, themeName).catch((e) => {
          console.warn("Failed to persist selected theme", e);
        });
      }
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
          Platform.OS,
          lightDarkSelection
        ),
        text: createThemeValuesProxy(
          currentTheme.colors.text,
          breakpoints,
          deviceWidth,
          Platform.OS,
          lightDarkSelection
        ),
        background: createThemeValuesProxy(
          currentTheme.colors.background,
          breakpoints,
          deviceWidth,
          Platform.OS,
          lightDarkSelection
        ),
        foreground: createThemeValuesProxy(
          currentTheme.colors.foreground,
          breakpoints,
          deviceWidth,
          Platform.OS,
          lightDarkSelection
        ),
        border: createThemeValuesProxy(
          currentTheme.colors.border,
          breakpoints,
          deviceWidth,
          Platform.OS,
          lightDarkSelection
        ),
      },
    }),
    [currentTheme, deviceWidth, breakpoints, lightDarkSelection]
  );

  React.useEffect(() => {
    const listener = Dimensions.addEventListener("change", ({ window }) =>
      setDeviceWidth(window.width)
    );
    return () => {
      listener.remove();
    };
  });

  React.useEffect(() => {
    const run = async () => {
      const savedSelectedThemeName = await AsyncStorage.getItem(
        SAVED_SELECTED_THEME_KEY
      );
      if (savedSelectedThemeName) {
        changeTheme(savedSelectedThemeName);
      }
    };
    run();

    // This should only run once, ignore deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const useChangeTheme = (): ((
  themeName: string,
  options?: ChangeThemeOptions
) => void) => {
  const { changeTheme } = React.useContext(ThemeContext);
  return changeTheme;
};

const withTheme = <Props extends { theme: ReadTheme }>(
  Component: React.ComponentType<Props>
) => {
  return React.forwardRef(
    (props: Omit<Props, "theme">, ref: React.Ref<any>) => {
      const { theme } = React.useContext(ThemeContext);
      return <Component {...(props as Props)} theme={theme} ref={ref} />;
    }
  );
};

export { Provider, useTheme, useChangeTheme, withTheme };
