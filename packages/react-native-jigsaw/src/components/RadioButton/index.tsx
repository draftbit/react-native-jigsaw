import * as React from "react";
import RadioButtonGroup, { RadioButtonGroupProps } from "./RadioButtonGroup";
import RadioButtonRow, { RadioButtonRowProps } from "./RadioButtonRow";
import { RadioButtonProps, default as SingleRadioButton } from "./RadioButton";
interface RadioButtonComposition {
  Row: React.FC<RadioButtonRowProps>;
  Group: React.FC<RadioButtonGroupProps>;
}

const RadioButton: React.FC<RadioButtonProps> &
  RadioButtonComposition = Object.assign(SingleRadioButton, {
  Group: RadioButtonGroup,
  Row: RadioButtonRow,
});

export { RadioButtonGroup, RadioButtonRow };

export default RadioButton;
