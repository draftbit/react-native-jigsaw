import createThemeValuesProxy from "../createThemeValuesProxy";

const breakpoints = {
  small: 100,
  medium: 400,
  large: 700,
};

const value: any = {
  nested: {
    nestedOne: "nestedOne",
    nestedTwo: "nestedTwo",
    nestedNumber: 5,
    nestedMore: {
      nestedMoreOne: "nestedMoreOne",
    },
  },
  primary: "primary",
  numberValue: 5,
  secondary: "secondary",
  tertiary: "tertiary",
  accent: "accent",
  platform: {
    default: "default",
    ios: "ios",
    android: "android",
  },
  platformNested: {
    ios: {
      nested: "nestedIos",
    },
    android: {
      nested: "nestedAndroid",
    },
  },
  breakpoint: {
    default: "default",
    small: "small",
    medium: "medium",
    large: "large",
  },
  breakpointNested: {
    small: {
      nested: "nestedSmall",
    },
    medium: {
      nested: "nestedMedium",
    },
  },
  lightDark: {
    default: "defaultLightDark",
    light: "lightValue",
    dark: "darkValue",
  },
  lightDarkNested: {
    light: {
      nested: "nestedLight",
    },
    dark: {
      nested: "nestedDark",
    },
  },
};

const proxied = createThemeValuesProxy(value, {}, 400, "android", "light")!;

describe("createThemeValuesProxy tests", () => {
  describe("Value Returned Directly", () => {
    test("returns value directly when string", () => {
      expect(proxied.primary).toEqual(value.primary);
    });

    test("returns value directly when number", () => {
      expect(proxied.numberValue).toEqual(value.numberValue);
    });

    test("returns value directly when nested and string", () => {
      expect(proxied.nested.nestedOne).toEqual(value.nested.nestedOne);
    });

    test("returns value directly when nested and number", () => {
      expect(proxied.nested.nestedNumber).toEqual(value.nested.nestedNumber);
    });

    test("returns value directly when deeply nested", () => {
      expect(proxied.nested.nestedMore.nestedMoreOne).toEqual(
        value.nested.nestedMore.nestedMoreOne
      );
    });
  });

  describe("Platform Value", () => {
    test("returns android value when platform is android", () => {
      const androidProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "light"
      )!;
      expect(androidProxied.platform).toEqual(value.platform.android);
    });

    test("returns ios value when platform is ios", () => {
      const iosProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "ios",
        "light"
      )!;
      expect(iosProxied.platform).toEqual(value.platform.ios);
    });

    test("returns default platform value when platform is not in keys", () => {
      const windowsProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "windows",
        "light"
      )!;
      expect(windowsProxied.platform).toEqual(value.platform.default);
    });

    test("returns nested android value when platform is android", () => {
      const androidProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "light"
      )!;
      expect(androidProxied.platformNested.nested).toEqual(
        value.platformNested.android.nested
      );
    });

    test("returns nested ios value when platform is ios", () => {
      const iosProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "ios",
        "light"
      )!;
      expect(iosProxied.platformNested.nested).toEqual(
        value.platformNested.ios.nested
      );
    });
  });

  describe("Breakpoint Value", () => {
    test("returns small breakpoint value when device width matches exactly", () => {
      const smallProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.small,
        "android",
        "light"
      )!;
      expect(smallProxied.breakpoint).toEqual(value.breakpoint.small);
    });

    test("returns small breakpoint value when device width matches", () => {
      const smallProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.small + 50,
        "android",
        "light"
      )!;
      expect(smallProxied.breakpoint).toEqual(value.breakpoint.small);
    });

    test("returns medium breakpoint value when device width matches exactly", () => {
      const mediumProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.medium,
        "android",
        "light"
      )!;
      expect(mediumProxied.breakpoint).toEqual(value.breakpoint.medium);
    });

    test("returns medium breakpoint value when device width matches", () => {
      const mediumProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.medium + 50,
        "android",
        "light"
      )!;
      expect(mediumProxied.breakpoint).toEqual(value.breakpoint.medium);
    });

    test("returns large breakpoint value when device width matches exactly", () => {
      const largeProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.large,
        "android",
        "light"
      )!;
      expect(largeProxied.breakpoint).toEqual(value.breakpoint.large);
    });

    test("returns large breakpoint value when device width matches is over the largest", () => {
      const largeProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.large + 400,
        "android",
        "light"
      )!;
      expect(largeProxied.breakpoint).toEqual(value.breakpoint.large);
    });

    test("returns default breakpoint value when device width matches is below the smallest", () => {
      const verySmallProxied = createThemeValuesProxy(
        value,
        breakpoints,
        50,
        "android",
        "light"
      )!;
      expect(verySmallProxied.breakpoint).toEqual(value.breakpoint.default);
    });

    test("returns nested small breakpoint value when device width matches", () => {
      const smallProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.small,
        "android",
        "light"
      )!;
      expect(smallProxied.breakpointNested.nested).toEqual(
        value.breakpointNested.small.nested
      );
    });

    test("returns nested medium breakpoint value when device width matches", () => {
      const mediumProxied = createThemeValuesProxy(
        value,
        breakpoints,
        breakpoints.medium,
        "android",
        "light"
      )!;
      expect(mediumProxied.breakpointNested.nested).toEqual(
        value.breakpointNested.medium.nested
      );
    });
  });

  describe("Light Dark Value", () => {
    test("returns light value when key is light", () => {
      const lightProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "light"
      )!;
      expect(lightProxied.lightDark).toEqual(value.lightDark.light);
    });

    test("returns dark value when key is dark", () => {
      const darkProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "dark"
      )!;
      expect(darkProxied.lightDark).toEqual(value.lightDark.dark);
    });

    test("returns default value when key is not light or dark", () => {
      const otherProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "other" as any
      )!;
      expect(otherProxied.lightDark).toEqual(value.lightDark.default);
    });

    test("returns nested light value when key is light", () => {
      const lightProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "light"
      )!;
      expect(lightProxied.lightDarkNested.nested).toEqual(
        value.lightDarkNested.light.nested
      );
    });

    test("returns nested dark value when key is dark", () => {
      const darkProxied = createThemeValuesProxy(
        value,
        {},
        400,
        "android",
        "dark"
      )!;
      expect(darkProxied.lightDarkNested.nested).toEqual(
        value.lightDarkNested.dark.nested
      );
    });
  });
});
