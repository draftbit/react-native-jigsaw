import { createContext, useContext } from "react";

interface RadioButtonGroupContext {
  onValueChange: (value: string) => void;
  value: string;
}

export const radioButtonGroupContext = createContext<RadioButtonGroupContext>({
  onValueChange: () => {},
  value: "",
});

export function useRadioButtonGroupContext() {
  return useContext(radioButtonGroupContext);
}
