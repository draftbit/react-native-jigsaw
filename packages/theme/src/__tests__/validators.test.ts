import {
  validatePalettes,
  validateBreakpoints,
  validateTheme,
} from "../validators";
import DefaultTheme from "../DefaultTheme";

describe("Theme validators tests", () => {
  describe("validatePalettes", () => {
    const invalidPalettes = [
      {
        draftbit: {
          primary: 1000,
          secondary: "rgb(59, 201, 234)",
        },
      },
      {
        draftbit: {
          primary: true,
          secondary: "rgb(59, 201, 234)",
        },
      },
      {
        draftbit: {
          primary: "rgb(59, 201, 234)",
          secondary: "rgb(59, 201, 234)",
        },
        another: {
          primary: 1000,
          secondary: "rgb(59, 201, 234)",
        },
      },
    ];

    const validPalettes = [
      {
        draftbit: {
          primary: "rgb(59, 201, 234)",
          secondary: "rgb(59, 201, 234)",
        },
      },
      {
        draftbit: {
          primary: "rgb(59, 201, 234)",
          secondary: "rgb(59, 201, 234)",
        },
        another: {
          primary: "rgb(59, 201, 234)",
          secondary: "rgb(59, 201, 234)",
        },
      },
      {},
    ];
    test.each(invalidPalettes)(
      "should throw an error with invalid palettes (%#)",
      (palette) => {
        expect(() => validatePalettes(palette as any)).toThrowError();
      }
    );
    test.each(validPalettes)(
      "should not throw an error with valid palettes (%#)",
      (palette) => {
        expect(() => validatePalettes(palette as any)).not.toThrowError();
      }
    );
  });

  describe("validateBreakpoints", () => {
    const invalidBreakpoints = [
      { mobile: "100" },
      { mobile: true, laptop: 200 },
      { mobile: 100, laptop: "400" },
    ];

    const validBreakpoints = [
      {
        mobile: 100,
        laptop: 200,
        desktop: 300,
      },
      { mobile: 100 },
      {},
    ];
    test.each(invalidBreakpoints)(
      "should throw an error with invalid breakpoints (%#)",
      (breakpoint) => {
        expect(() => validateBreakpoints(breakpoint as any)).toThrowError();
      }
    );
    test.each(validBreakpoints)(
      "should not throw an error with valid breakpoints (%#)",
      (breakpoint) => {
        expect(() => validateBreakpoints(breakpoint as any)).not.toThrowError();
      }
    );
  });

  describe("validateTheme", () => {
    const invalidThemes = [
      {
        name: "Draftbit",
        colors: {
          branding: {
            primary: true,
          },
        },
      },
      {
        name: "Draftbit",
        colors: {
          branding: {
            primary: {
              something: {
                nested: true,
              },
            },
          },
        },
      },
    ];

    const validThemes = [
      DefaultTheme,
      {
        name: "Draftbit",
        colors: {
          branding: {
            primary: {
              another: 50,
              something: {
                nested: "rgba(0,0,0,1)",
              },
            },
          },
        },
      },
    ];
    test.each(invalidThemes)(
      "should throw an error with invalid theme (%#)",
      (theme) => {
        expect(() => validateTheme(theme as any)).toThrowError();
      }
    );
    test.each(validThemes)(
      "should not throw an error with valid theme (%#)",
      (theme) => {
        expect(() => validateTheme(theme as any)).not.toThrowError();
      }
    );
  });
});
