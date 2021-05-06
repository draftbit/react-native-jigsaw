import { createContext, useContext } from "react";

interface RadioButtonGroupContext {
  onValueChange: (value: string) => void;
  value: string;
  direction: string;
}

export const radioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onValueChange: () => {},
  value: "",
  direction: "",
});

export function useRadioButtonGroupContext() {
  return useContext(radioButtonGroupContext);
}
