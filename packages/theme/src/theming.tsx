import { createTheming } from "@draftbit/react-theme-provider";
import merge from "deepmerge";
import type { Breakpoints, Theme, ColorPalettes, ThemeValues } from "./types";
import {
  validateBreakpoints,
  validatePalettes,
  validateTheme,
} from "./validators";
import { Platform } from "react-native";
import { isObject } from "lodash";

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
        400,
        "android"
      ),
      text: createThemeValuesProxy(
        resultTheme.colors.text,
        breakpoints,
        400,
        "android"
      ),
      background: createThemeValuesProxy(
        resultTheme.colors.background,
        breakpoints,
        400,
        "android"
      ),
      foreground: createThemeValuesProxy(
        resultTheme.colors.foreground,
        breakpoints,
        400,
        "android"
      ),
      border: createThemeValuesProxy(
        resultTheme.colors.border,
        breakpoints,
        400,
        "android"
      ),
    },
  };
}
//TODO: Device width should be dynamic, maybe proxies should be created at provider level,
// not on theme creation level

export function createThemeValuesProxy(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS
): any /* return type 'any' to allow arbitrary object references (object.example.another.there) */ {
  if (value === undefined || value === null) {
    return undefined;
  }
  return new Proxy(value, {
    get: (
      target: ThemeValues,
      key: string
    ): string | number | ThemeValues | undefined => {
      const currentValue = target[key];
      if (!isObject(currentValue)) {
        return currentValue;
      } else {
        const platformKeys = ["ios", "android", "web", "macos", "windows"];
        const breakpointKeys = Object.keys(breakpoints);
        const keysType = getKeysType(
          currentValue,
          platformKeys,
          breakpointKeys
        );

        if (keysType === "default") {
          return createThemeValuesProxy(
            currentValue,
            breakpoints,
            deviceWidth,
            devicePlatform
          );
        } else if (keysType === "platform") {
          return getPlatformValue(
            currentValue,
            breakpoints,
            deviceWidth,
            devicePlatform
          );
        } else if (keysType === "breakpoint") {
          return getBreakpointValue(
            currentValue,
            breakpoints,
            deviceWidth,
            devicePlatform
          );
        } else {
          return undefined;
        }
      }
    },
    set: () => {
      throw new Error("Theme is read only, cannot be modified at runtime");
    },
  });
}

function getKeysType(
  value: ThemeValues,
  platformKeys: string[],
  breakpointKeys: string[]
): "platform" | "breakpoint" | "default" {
  const hasPlatformKeys = platformKeys.some((key) => value[key] !== undefined);
  const hasBreakpointKeys = breakpointKeys.some(
    (key) => value[key] !== undefined
  );
  const hasUserDefinedKeys = Object.keys(value).some(
    (key) =>
      !platformKeys.includes(key) &&
      !breakpointKeys.includes(key) &&
      key !== "default"
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

function getPlatformValue(
  value: ThemeValues,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS
) {
  const currentPlatformValue = value[devicePlatform] ?? value.default;
  if (!isObject(currentPlatformValue)) {
    return currentPlatformValue;
  } else {
    return createThemeValuesProxy(
      currentPlatformValue,
      breakpoints,
      deviceWidth,
      devicePlatform
    );
  }
}

function getBreakpointValue(
  value: ThemeValues,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS
) {
  const keysToBreakpointValue: [string, number][] = Object.keys(value).map(
    (key) => [key, breakpoints[key]]
  );
  const orderedBreakpoints = keysToBreakpointValue.sort(([_, val]) => val);
  let currentBreakpointKey = "";
  for (const [breakpointKey, breakpointValue] of orderedBreakpoints) {
    if (deviceWidth >= breakpointValue) {
      currentBreakpointKey = breakpointKey;
    }
  }
  const currentBreakpointValue = value[currentBreakpointKey] ?? value.default;
  if (!isObject(currentBreakpointValue)) {
    return currentBreakpointValue;
  } else {
    return createThemeValuesProxy(
      currentBreakpointValue,
      breakpoints,
      deviceWidth,
      devicePlatform
    );
  }
}

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(
  {} as any
);
