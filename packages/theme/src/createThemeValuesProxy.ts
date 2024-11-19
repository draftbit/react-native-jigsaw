import { ThemeValues, Breakpoints } from "./types";
import { Platform, TextStyle } from "react-native";
import { isObject } from "lodash";

/**
 * Creates a proxy for theme value objects to select a value whenever
 * multiple values are provided for different platforms, breakpoints, and/or light/dark modes
 *
 * Ex: {color: {ios: "blue", android: "red"}}
 *      -> theme.color returns "blue" when the platform is ios and "red" when android
 */
export default function createThemeValuesProxy(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS,
  currentLightDarkSelection: "light" | "dark"
): any /* return type 'any' to allow arbitrary object references (object.example.another.there) */ {
  if (value === undefined || value === null) {
    return undefined;
  }
  return new Proxy(value, {
    get: (
      target: ThemeValues,
      key: string
    ): string | number | ThemeValues | TextStyle | undefined => {
      const currentValue = target[key];

      const valueAsThemeValues = isObject(currentValue)
        ? (currentValue as ThemeValues)
        : undefined;

      if (valueAsThemeValues) {
        const platformKeys = ["ios", "android", "web", "macos", "windows"];
        const breakpointKeys = Object.keys(breakpoints);
        const lightDarkKeys = ["light", "dark"];

        const keysType = getKeysType(
          valueAsThemeValues,
          platformKeys,
          breakpointKeys,
          lightDarkKeys
        );

        if (keysType === "default") {
          return createThemeValuesProxy(
            valueAsThemeValues,
            breakpoints,
            deviceWidth,
            devicePlatform,
            currentLightDarkSelection
          );
        } else if (keysType === "platform") {
          return getPlatformValue(
            valueAsThemeValues,
            breakpoints,
            deviceWidth,
            devicePlatform,
            currentLightDarkSelection
          );
        } else if (keysType === "breakpoint") {
          return getBreakpointValue(
            valueAsThemeValues,
            breakpoints,
            deviceWidth,
            devicePlatform,
            currentLightDarkSelection
          );
        } else if (keysType === "lightDark") {
          return getLightDarkValue(
            valueAsThemeValues,
            breakpoints,
            deviceWidth,
            devicePlatform,
            currentLightDarkSelection
          );
        } else {
          return undefined;
        }
      } else {
        return currentValue;
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
  breakpointKeys: string[],
  lightDarkKeys: string[]
): "platform" | "breakpoint" | "lightDark" | "default" {
  const hasPlatformKeys = platformKeys.some((key) => value[key] !== undefined);
  const hasBreakpointKeys = breakpointKeys.some(
    (key) => value[key] !== undefined
  );
  const hasLightDarkKeys = lightDarkKeys.some(
    (key) => value[key] !== undefined
  );
  const hasUserDefinedKeys = Object.keys(value).some(
    (key) =>
      !platformKeys.includes(key) &&
      !breakpointKeys.includes(key) &&
      !lightDarkKeys.includes(key) &&
      key !== "default"
  );

  if (
    !onlyOneTrue(
      hasPlatformKeys,
      hasBreakpointKeys,
      hasUserDefinedKeys,
      hasLightDarkKeys
    ) &&
    !allFalse(
      hasPlatformKeys,
      hasBreakpointKeys,
      hasUserDefinedKeys,
      hasLightDarkKeys
    )
  ) {
    throw new Error(
      "Cannot mix usage of platform keys, breakpoint keys, light/dark keys, and custom defined keys on the same level" +
        `\nKeys: ${Object.keys(value).join(", ")}`
    );
  } else if (hasPlatformKeys) {
    return "platform";
  } else if (hasBreakpointKeys) {
    return "breakpoint";
  } else if (hasLightDarkKeys) {
    return "lightDark";
  } else {
    return "default";
  }
}

function onlyOneTrue(a: boolean, b: boolean, c: boolean, d: boolean) {
  return [a, b, c, d].filter((x) => x).length === 1;
}

function allFalse(a: boolean, b: boolean, c: boolean, d: boolean) {
  return [a, b, c, d].filter((x) => x).length === 0;
}

function getPlatformValue(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS,
  currentLightDarkSelection: "light" | "dark"
) {
  const currentPlatformValue = value?.[devicePlatform] ?? value?.default;
  const valueAsThemeValues = isObject(currentPlatformValue)
    ? (currentPlatformValue as ThemeValues)
    : undefined;

  if (valueAsThemeValues) {
    return createThemeValuesProxy(
      valueAsThemeValues,
      breakpoints,
      deviceWidth,
      devicePlatform,
      currentLightDarkSelection
    );
  } else {
    return currentPlatformValue;
  }
}

function getBreakpointValue(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS,
  currentLightDarkSelection: "light" | "dark"
) {
  const keysToBreakpointValue: [string, number][] = Object.keys(
    value ?? {}
  ).map((key) => [key, breakpoints[key]]);
  const orderedBreakpoints = keysToBreakpointValue.sort(([_, val]) => val);
  let currentBreakpointKey = "";
  for (const [breakpointKey, breakpointValue] of orderedBreakpoints) {
    if (deviceWidth >= breakpointValue) {
      currentBreakpointKey = breakpointKey;
    }
  }
  const currentBreakpointValue =
    value?.[currentBreakpointKey] ?? value?.default;
  const valueAsThemeValues = isObject(currentBreakpointKey)
    ? (currentBreakpointKey as ThemeValues)
    : undefined;

  if (valueAsThemeValues) {
    return createThemeValuesProxy(
      valueAsThemeValues,
      breakpoints,
      deviceWidth,
      devicePlatform,
      currentLightDarkSelection
    );
  } else {
    return currentBreakpointValue;
  }
}

function getLightDarkValue(
  value: ThemeValues | undefined,
  breakpoints: Breakpoints,
  deviceWidth: number,
  devicePlatform: typeof Platform.OS,
  currentLightDarkSelection: "light" | "dark"
) {
  const currentLightDarkValue =
    value?.[currentLightDarkSelection] ?? value?.default;
  const valueAsThemeValues = isObject(currentLightDarkSelection)
    ? (currentLightDarkSelection as ThemeValues)
    : undefined;

  if (valueAsThemeValues) {
    return createThemeValuesProxy(
      valueAsThemeValues,
      breakpoints,
      deviceWidth,
      devicePlatform,
      currentLightDarkSelection
    );
  } else {
    return currentLightDarkValue;
  }
}
