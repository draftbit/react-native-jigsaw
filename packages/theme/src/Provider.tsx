import React from "react";
import { Dimensions, Platform, useColorScheme, TextStyle } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createThemeValuesProxy from "./createThemeValuesProxy";
import DefaultTheme from "./DefaultTheme";
import {
  Breakpoints,
  ChangeThemeOptions,
  ReadTheme,
  ThemeValues,
  ValidatedTheme,
} from "./types";
import { asThemeValuesObject } from "./validators";

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

  const proxiedTheme: ReadTheme = React.useMemo(() => {
    const createProxiedThemeValue = (value: ThemeValues | undefined) =>
      createThemeValuesProxy(
        value,
        breakpoints,
        deviceWidth,
        Platform.OS,
        lightDarkSelection
      );

    const createProxiedTypographyValue = (
      value: TextStyle | ThemeValues | undefined
    ) => {
      const valueAsThemeValues = asThemeValuesObject(value);
      if (valueAsThemeValues) {
        return createProxiedThemeValue(valueAsThemeValues);
      } else {
        return value;
      }
    };

    return {
      ...currentTheme,
      colors: {
        branding: createProxiedThemeValue(currentTheme.colors.branding),
        text: createProxiedThemeValue(currentTheme.colors.text),
        background: createProxiedThemeValue(currentTheme.colors.background),
        foreground: createProxiedThemeValue(currentTheme.colors.foreground),
        border: createProxiedThemeValue(currentTheme.colors.border),
      },
      typography: {
        body1: createProxiedTypographyValue(currentTheme.typography.body1),
        body2: createProxiedTypographyValue(currentTheme.typography.body2),
        button: createProxiedTypographyValue(currentTheme.typography.button),
        caption: createProxiedTypographyValue(currentTheme.typography.caption),
        headline1: createProxiedTypographyValue(
          currentTheme.typography.headline1
        ),
        headline2: createProxiedTypographyValue(
          currentTheme.typography.headline2
        ),
        headline3: createProxiedTypographyValue(
          currentTheme.typography.headline3
        ),
        headline4: createProxiedTypographyValue(
          currentTheme.typography.headline4
        ),
        headline5: createProxiedTypographyValue(
          currentTheme.typography.headline5
        ),
        headline6: createProxiedTypographyValue(
          currentTheme.typography.headline6
        ),
        overline: createProxiedTypographyValue(
          currentTheme.typography.overline
        ),
        subtitle1: createProxiedTypographyValue(
          currentTheme.typography.subtitle1
        ),
        subtitle2: createProxiedTypographyValue(
          currentTheme.typography.subtitle2
        ),
      },
    };
  }, [currentTheme, deviceWidth, breakpoints, lightDarkSelection]);

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
