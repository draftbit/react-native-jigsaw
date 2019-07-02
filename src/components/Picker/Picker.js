/* @flow */

import * as React from "react"
import { withTheme } from "../../core/theming"
import PickerComponent from "./PickerComponent"
import type { Theme } from "../../types"
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../../core/component-types"

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
  value: string,
  onChange: (itemValue: string, itemIndex: number) => void,
  style?: any,
  theme: Theme
}

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
  }

  state = {
    pickerVisible: false
  }

  onValueChange = (itemValue, itemIndex) => {
    const { placeholder, onChange } = this.props

    if (placeholder && itemIndex === 0) {
      return
    }

    onChange && onChange(itemValue, itemIndex)
  }

  render() {
    const { placeholder, options, value, ...props } = this.props

    const pickerOptions = placeholder
      ? [{ value: placeholder, label: placeholder }, ...options]
      : options

    return (
      <PickerComponent
        {...props}
        selectedValue={value}
        placeholder={placeholder}
        options={pickerOptions}
        onValueChange={this.onValueChange}
      />
    )
  }
}

export default withTheme(Picker)

const SEED_DATA_PROPS = {
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    type: FORM_TYPES.string,
    value: "Make",
    editable: true,
    required: true
  },
  placeholder: {
    label: "Placeholder",
    description: "The placeholder text of the picker",
    type: FORM_TYPES.string,
    value: "Select a make...",
    editable: true,
    required: false
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    type: FORM_TYPES.string,
    value: null,
    editable: true,
    required: false
  },
  options: {
    label: "Options",
    description: "Array of picker options. An array of objects containing a label and value.",
    editable: true,
    type: FORM_TYPES.array,
    value: null
  },
  disabled: {
    label: "Disabled",
    description:
      "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true
  },
  error: {
    label: "Error",
    description: "Whether the picker should display the error state",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true
  },
  leftIconName: {
    label: "Left icon name",
    description: "The icon to display on the left",
    type: FORM_TYPES.icon,
    value: null,
    editable: true
  },
  leftIconMode: {
    label: "Left icon mode",
    description: "The mode of the icon to display on the left. 'inset' or 'outset'.",
    type: FORM_TYPES.flatArray,
    value: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true
  },
  rightIconName: {
    label: "Right icon name",
    description: "The icon to display on the right",
    type: FORM_TYPES.icon,
    value: null,
    editable: true
  },
  fieldName: FIELD_NAME
}

export const SEED_DATA = [
  {
    name: "Picker - Solid",
    tag: "Picker",
    description: "A picker with a solid border",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Picker.png",
    supports_list_render: false,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        type: FORM_TYPES.string,
        value: "solid",
        editable: false
      }
    },
    layout: {}
  },
  {
    name: "Picker - Underline",
    tag: "Picker",
    description: "A picker with an underline",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Picker.png",
    supports_list_render: false,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        type: FORM_TYPES.string,
        value: "underline",
        editable: false
      }
    },
    layout: {}
  }
]
