/* @flow */

import * as React from "react";
import { withTheme } from "../../core/theming";
import PickerComponent from "./PickerComponent";
import type { Theme } from "../../types";
import { COMPONENT_TYPES, FORM_TYPES } from "../../core/component-types";

type Props = {
  /**
   * Type of the Picker.
   * - `underline` - input with an underline.
   * - `solid` - input with an outline.
   *
   * In `solid` type, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
   */
  type?: "underline" | "solid",
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean,
  /**
   * The text to use for the floating label.
   */
  label?: string,
  /**
   * Placeholder for the input.
   */
  placeholder?: string,
  /**
   * Whether to style the Picker with error style.
   */
  error?: boolean,
  /**
   * Helper text to display below the input
   */
  assistiveText?: string,
  /**
   * The name of the icon to show on the left
   */
  leftIconName?: string,
  /**
   * Whether to display the left button inside or outside of the Picker
   */
  leftIconMode?: "inset" | "outset",
  /**
   * The name of the icon to show on the right
   */
  rightIconName?: string,
  options: Array<{ label: string, value: string }>,
  selectedValue: string,
  onValueChange: (itemValue: string, itemIndex: number) => void,
  style?: any,
  theme: Theme
};

class Picker extends React.Component<Props> {
  static defaultProps = {
    options: [
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "Cadillac", label: "Cadillac" },
      { value: "Dodge", label: "Dodge" }
    ],
    type: "underline",
    disabled: false,
    error: false
  };

  state = {
    pickerVisible: false
  };

  onValueChange = (itemValue, itemIndex) => {
    const { placeholder, onValueChange } = this.props;

    if (placeholder && itemIndex === 0) {
      return;
    }

    onValueChange(itemValue, itemIndex);
  };

  render() {
    const { placeholder, options } = this.props;

    const pickerOptions = placeholder
      ? [{ value: placeholder, label: placeholder }, ...options]
      : options;

    return (
      <PickerComponent
        {...this.props}
        options={pickerOptions}
        onValueChange={this.onValueChange}
      />
    );
  }
}

export default withTheme(Picker);
