import { createTheming } from "@draftbit/react-theme-provider";
import merge from "deepmerge";
import DefaultTheme from "./DefaultTheme";
import type { Breakpoints, Theme, ColorPalettes, ThemeValues } from "./types";
import {
  validateBreakpoints,
  validatePalettes,
  validateTheme,
} from "./validators";
import { Platform } from "react-native";

//TODO: Context and providers (can access current theme) and utility to switch themes at any point
// Use name as theme identifier to change theme. Validate no 2 themes with same name

//TODO: Proxy (getters, setters) of some sort to be able to control which value is returned on theme.colors.branding.primary (platform, breakpoints, etc)

export function createTheme({
  breakpoints,
  palettes,
  theme,
  baseTheme,
}: {
  breakpoints: Breakpoints;
  palettes: ColorPalettes;
  theme: Theme;
  baseTheme?: Theme;
}): Theme {
  validateBreakpoints(breakpoints);
  validatePalettes(palettes);
  validateTheme(theme);

  let resultTheme = theme;

  if (baseTheme) {
    validateTheme(baseTheme);
    resultTheme = merge(baseTheme, theme);
  }

  return {
    ...resultTheme,
    colors: {
      branding: createThemeValuesProxy(
        resultTheme.colors.branding,
        breakpoints,
        400
      ),
      text: createThemeValuesProxy(resultTheme.colors.text, breakpoints, 400),
      background: createThemeValuesProxy(
        resultTheme.colors.background,
        breakpoints,
        400
      ),
      foreground: createThemeValuesProxy(
        resultTheme.colors.foreground,
        breakpoints,
        400
      ),
      border: createThemeValuesProxy(
        resultTheme.colors.border,
        breakpoints,
        400
      ),
    },
  };
}
//TODO: Device width should be dynamic, maybe proxies should be created at provider level,
// not on theme creation level

//TODO: Clean this up to more readable code and functions
// type checks used a bunch here and in validators, split to util funcitons

function createThemeValuesProxy(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number
) {
  if (value === undefined || value === null) {
    return undefined;
  }
  return new Proxy(value, {
    get: (
      target: ThemeValues,
      key: string
    ): string | number | ThemeValues | undefined => {
      const currentValue = target[key];
      if (
        typeof currentValue === "string" ||
        typeof currentValue === "number"
      ) {
        return currentValue;
      } else {
        const platformKeys = ["ios", "android", "web", "macos", "windows"];
        const breakpointKeys = Object.keys(breakpoints);
        const keysType = getLevelKeysType(
          currentValue,
          platformKeys,
          breakpointKeys
        );

        if (keysType === "default") {
          return createThemeValuesProxy(currentValue, breakpoints, deviceWidth);
        } else if (keysType === "platform") {
          const currentPlatformValue =
            currentValue[Platform.OS] ?? currentValue.default;
          if (
            currentPlatformValue === undefined ||
            currentPlatformValue === null
          ) {
            return currentPlatformValue;
          } else if (
            typeof currentPlatformValue === "string" ||
            typeof currentPlatformValue === "number"
          ) {
            return currentPlatformValue;
          } else {
            return createThemeValuesProxy(
              currentPlatformValue,
              breakpoints,
              deviceWidth
            );
          }
        } else if (keysType === "breakpoint") {
          const keysToBreakpointValue: [string, number][] = Object.keys(
            currentValue
          ).map((key) => [key, breakpoints[key]]);
          const orderedBreakpoints = keysToBreakpointValue.sort(
            ([_, value]) => value
          );
          let currentBreakpointKey = "";
          for (const [breakpointKey, breakpointValue] of orderedBreakpoints) {
            if (deviceWidth >= breakpointValue) {
              currentBreakpointKey = breakpointKey;
            }
          }
          const currentBreakpointValue =
            currentValue[currentBreakpointKey] ?? currentValue.default;
          if (
            currentBreakpointValue === undefined ||
            currentBreakpointValue === null
          ) {
            return currentBreakpointValue;
          } else if (
            typeof currentBreakpointValue === "string" ||
            typeof currentBreakpointValue === "number"
          ) {
            return currentBreakpointValue;
          } else {
            return createThemeValuesProxy(
              currentBreakpointValue,
              breakpoints,
              deviceWidth
            );
          }
        } else {
          return undefined;
        }
      }
    },
  });
}

function getLevelKeysType(
  currentValue: ThemeValues,
  platformKeys: string[],
  breakpointKeys: string[]
): "platform" | "breakpoint" | "default" {
  const hasPlatformKeys = platformKeys.some(
    (key) => currentValue[key] !== undefined
  );
  const hasBreakpointKeys = breakpointKeys.some(
    (key) => currentValue[key] !== undefined
  );
  const hasUserDefinedKeys = Object.keys(currentValue).some(
    (key) => !platformKeys.includes(key) && !breakpointKeys.includes(key)
  );

  if (!onlyOneTrue(hasPlatformKeys, hasBreakpointKeys, hasUserDefinedKeys)) {
    throw new Error(
      "Cannot mix usage of platform keys, breakpoint keys, and custom defined keys on the same level"
    );
  } else if (hasPlatformKeys) {
    return "platform";
  } else if (hasBreakpointKeys) {
    return "breakpoint";
  } else {
    return "default";
  }
}

function onlyOneTrue(a: boolean, b: boolean, c: boolean) {
  return [a, b, c].filter((x) => x).length === 1;
}
export const { ThemeProvider, withTheme, useTheme } =
  createTheming<Theme>(DefaultTheme);
