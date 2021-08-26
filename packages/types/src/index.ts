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

// enum TriggerType {
//   ON_REFRESH = "ON_REFRESH",
//   ON_PRESS = "ON_PRESS",
//   ON_VALUE_CHANGE = "ON_VALUE_CHANGE",
//   ON_BLUR = "ON_BLUR",
//   ON_SWIPE = "ON_SWIPE",
//   ON_CHANGE_TEXT = "ON_CHANGE_TEXT",
//   ON_DATE_CHANGE = "ON_DATE_CHANGE",
//   ON_CHANGE = "ON_CHANGE",
//   ON_SELECT = "ON_SELECT",
// }

// const OnPress = {
//   trigger: "ON_PRESS",
//   name: "On Press",
//   description: "When Presesd",
// };

// const OnValueChange = {
//   trigger: "ON_VALUE_CHANGE",
//   name: "On Value Change",
//   description: "Value Change",
// };

// const OnDateChange = {
//   trigger: "ON_DATE_CHANGE",
//   name: "On Date Change",
//   description: "",
// };

// const OnChange = {
//   trigger: "ON_CHANGE",
//   name: "On Change",
//   description: "",
// };

// export const Triggers = {
//   OnPress,
//   OnValueChange,
//   OnDateChange,
//   OnChange,
// };

export const Triggers = {
  OnPress: "ON_PRESS",
  OnPressIcon: "ON_PRESS_ICON",
  OnValueChange: "ON_VALUE_CHANGE",
  OnDateChange: "ON_DATE_CHANGE",
  OnChange: "ON_CHANGE",
  OnChangeText: "ON_CHANGE_TEXT",
};
