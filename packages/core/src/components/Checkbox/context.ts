import { createContext, useContext } from "react";

export enum Direction {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

interface CheckboxGroupContext {
  onValueChange: (value: string, selected: boolean) => void;
  values: string[];
  direction?: Direction;
}

export const checkboxGroupContext = createContext<CheckboxGroupContext>({
  onValueChange: () => {},
  values: [],
  direction: undefined,
});

export function useCheckboxGroupContext() {
  return useContext(checkboxGroupContext);
}
