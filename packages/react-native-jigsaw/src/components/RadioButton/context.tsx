import { createContext, useContext } from "react";

export enum Direction {
  Horizontal = "horizontal",
  Vertical = "vertical",
}
interface RadioButtonGroupContext {
  onValueChange: (value: string) => void;
  value: string;
  direction?: Direction;
}

export const radioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onValueChange: () => {},
  value: "",
  direction: undefined,
});

export function useRadioButtonGroupContext() {
  return useContext(radioButtonGroupContext);
}
