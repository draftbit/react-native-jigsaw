import { ColorPalettes, Breakpoints, Theme, ThemeValues } from "./types";
import { TextStyle } from "react-native";
import { z } from "zod";

const PaletteSchema: z.ZodType<ColorPalettes> = z.record(
  z.string(),
  z.record(z.string(), z.string())
);

const BreakpointSchema: z.ZodType<Breakpoints> = z.record(
  z.string(),
  z.number()
);

const TextStyleSchema: z.ZodType<TextStyle> = z.union([
  z.object({
    fontSize: z.number(),
  }),
  z.object({
    fontFamily: z.string(),
  }),
  z.object({
    letterSpacing: z.number(),
  }),
  z.object({
    lineHeight: z.number(),
  }),
]);

const ThemeValuesSchema: z.ZodType<ThemeValues> = z.record(
  z.string(),
  z.lazy(() =>
    z.union([z.string(), z.number(), TextStyleSchema, ThemeValuesSchema])
  )
);

const TextStyleOrThemeValuesSchema: z.ZodType<ThemeValues | TextStyle> =
  z.union([TextStyleSchema, ThemeValuesSchema]);

const ThemeSchema: z.ZodType<Theme> = z.object({
  name: z.string(),
  colors: z.object({
    branding: ThemeValuesSchema.optional(),
    text: ThemeValuesSchema.optional(),
    background: ThemeValuesSchema.optional(),
    foreground: ThemeValuesSchema.optional(),
    border: ThemeValuesSchema.optional(),
  }),
  typography: z.object({
    body1: TextStyleOrThemeValuesSchema.optional(),
    body2: TextStyleOrThemeValuesSchema.optional(),
    button: TextStyleOrThemeValuesSchema.optional(),
    caption: TextStyleOrThemeValuesSchema.optional(),
    headline1: TextStyleOrThemeValuesSchema.optional(),
    headline2: TextStyleOrThemeValuesSchema.optional(),
    headline3: TextStyleOrThemeValuesSchema.optional(),
    headline4: TextStyleOrThemeValuesSchema.optional(),
    headline5: TextStyleOrThemeValuesSchema.optional(),
    headline6: TextStyleOrThemeValuesSchema.optional(),
    overline: TextStyleOrThemeValuesSchema.optional(),
    subtitle1: TextStyleOrThemeValuesSchema.optional(),
    subtitle2: TextStyleOrThemeValuesSchema.optional(),
  }),
});

export function validatePalettes(palettes: ColorPalettes) {
  const result = PaletteSchema.safeParse(palettes);
  if (!result.success) {
    throw new Error("Invalid palettes object: " + result.error.message);
  }
}

export function validateBreakpoints(breakpoints: Breakpoints) {
  const result = BreakpointSchema.safeParse(breakpoints);
  if (!result.success) {
    throw new Error("Invalid breakpoints object: " + result.error.message);
  }
}

export function validateTheme(theme: Theme) {
  const result = ThemeSchema.safeParse(theme);
  if (!result.success) {
    throw new Error("Invalid theme object: " + result.error.message);
  }
}

export function asThemeValuesObject(value: any): ThemeValues | null {
  // Text style matches the shape of ThemeValues, but we don't want to treat it as a ThemeValues
  const isTextStyle = TextStyleSchema.safeParse(value).success;
  if (isTextStyle) {
    return null;
  }

  return ThemeValuesSchema.safeParse(value).data ?? null;
}
