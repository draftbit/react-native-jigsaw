import type { ComponentType, ComponentPropsWithoutRef } from "react";
export * from "./component-types";
export declare type Font = {
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
export declare type Fonts = {
  regular: Font;
  medium: Font;
  light: Font;
  thin: Font;
};
export declare type colorTypes =
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
export declare type Theme = any;
export declare type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type $RemoveChildren<T extends ComponentType<any>> = $Omit<
  ComponentPropsWithoutRef<T>,
  "children"
>;
export declare type EllipsizeProp = "head" | "middle" | "tail" | "clip";
