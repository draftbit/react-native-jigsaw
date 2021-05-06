import RadioButtonGroup, { RadioButtonGroupProps } from "./RadioButtonGroup";
import RadioButtonRow, { RadioButtonRowProps } from "./RadioButtonRow";
import { RadioButtonProps, default as SingleRadioButton } from "./RadioButton";
import React from "react";
import { withTheme } from "../../core/theming";

interface RadioButtonComposition {
  Row: React.FC<RadioButtonRowProps>;
  Group: React.FC<RadioButtonGroupProps>;
}

const RadioButton: React.FC<RadioButtonProps> &
  RadioButtonComposition = Object.assign(SingleRadioButton, {
  Group: RadioButtonGroup,
  Row: RadioButtonRow,
});

export default withTheme(RadioButton);
