import type { ComponentType, ComponentPropsWithoutRef } from "react";

export type Font = {
  fontFamily: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
};

export type Fonts = {
  regular: Font;
  medium: Font;
  light: Font;
  thin: Font;
};

export enum RowDirection {
  Row = "row",
  RowReverse = "row-reverse",
}

export type colorTypes =
  | "primary"
  | "secondary"
  | "surface"
  | "background"
  | "error"
  | "divider"
  | "strong"
  | "medium"
  | "light"
  | "strongInverse"
  | "mediumInverse"
  | "lightInverse";

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends ComponentType<any>> = $Omit<
  ComponentPropsWithoutRef<T>,
  "children"
>;

export type EllipsizeProp = "head" | "middle" | "tail" | "clip";

export { default as DefaultTheme } from "./styles/DefaultTheme";
export type { Theme } from "./styles/DefaultTheme";
export { ThemeProvider, useTheme, withTheme } from "./theming";
export { default as shadow } from "./styles/shadow";
export { default as fonts } from "./styles/fonts";
export { default as overlay } from "./styles/overlay";
