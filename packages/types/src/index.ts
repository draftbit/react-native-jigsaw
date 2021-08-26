import type { ComponentType, ComponentPropsWithoutRef } from "react";
export * from "./component-types";

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

export type Theme = any;

// export type Theme = {
//   dark: boolean;
//   mode?: "adaptive" | "exact";
//   roundness: number;
//   colors: {
//     primary: string;
//     background: string;
//     surface: string;
//     accent: string;
//     error: string;
//     text: string;
//     onSurface: string;
//     onBackground: string;
//     disabled: string;
//     placeholder: string;
//     backdrop: string;
//     notification: string;
//   };
//   fonts: Fonts;
//   animation: {
//     scale: number;
//   };
// };

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends ComponentType<any>> = $Omit<
  ComponentPropsWithoutRef<T>,
  "children"
>;

export type EllipsizeProp = "head" | "middle" | "tail" | "clip";
