import { ThemeValues, Breakpoints } from "./types";
import { Platform } from "react-native";
import { isObject } from "lodash";

/**
 * Creates a proxy for theme value objects to select a value whenever
 * multiple values are provided for different platforms and/or breakpoints
 *
 * Ex: {color: {ios: "blue", android: "red"}}
 *      -> theme.color returns "blue" when the platform is ios and "red" when android
 */
export default function createThemeValuesProxy(
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

  if (
    !onlyOneTrue(hasPlatformKeys, hasBreakpointKeys, hasUserDefinedKeys) &&
    !allFalse(hasPlatformKeys, hasBreakpointKeys, hasUserDefinedKeys)
  ) {
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

function allFalse(a: boolean, b: boolean, c: boolean) {
  return [a, b, c].filter((x) => x).length === 0;
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
