import * as React from "react";
import { withTheme } from "../../core/theming";
import PickerComponent from "./PickerComponent";

import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../../core/component-types";

class Picker extends React.Component {
  static defaultProps = {
    options: [],
    type: "underline",
    disabled: false,
    error: false,
  };

  state = {
    pickerVisible: false,
  };

  onValueChange = (itemValue, itemIndex) => {
    const { placeholder, onChange } = this.props;

    if (placeholder && itemIndex === 0) {
      return;
    }

    onChange && onChange(itemValue, itemIndex);
  };

  render() {
    const { placeholder, options, value, ...props } = this.props;

    const pickerOptions = placeholder
      ? [{ value: placeholder, label: placeholder }, ...options]
      : options;

    return (
      <PickerComponent
        {...props}
        selectedValue={value}
        placeholder={placeholder}
        options={pickerOptions}
        onValueChange={this.onValueChange}
      />
    );
  }
}

export default withTheme(Picker);

const SEED_DATA_PROPS = {
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: FORM_TYPES.string,
    defaultValue: "Make",
    editable: true,
    required: true,
  },
  placeholder: {
    label: "Placeholder",
    description: "The placeholder text of the picker",
    formType: FORM_TYPES.string,
    defaultValue: "Select a make...",
    editable: true,
    required: false,
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: FORM_TYPES.string,
    defaultValue: null,
    editable: true,
    required: false,
  },
  options: {
    label: "Options",
    description:
      "Array of picker options. An array of objects containing a label and value.",
    editable: true,
    formType: FORM_TYPES.array,
    defaultValue: null,
  },
  disabled: {
    label: "Disabled",
    description:
      "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    defaultValue: false,
    editable: true,
  },
  error: {
    label: "Error",
    description: "Whether the picker should display the error state",
    formType: FORM_TYPES.boolean,
    defaultValue: false,
    editable: true,
  },
  leftIconName: {
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: FORM_TYPES.icon,
    defaultValue: null,
    editable: true,
  },
  leftIconMode: {
    label: "Left icon mode",
    description:
      "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: FORM_TYPES.flatArray,
    defaultValue: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true,
  },
  rightIconName: {
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: FORM_TYPES.icon,
    defaultValue: null,
    editable: true,
  },
  fieldName: {
    ...FIELD_NAME,
    defaultValue: "pickerValue",
  },
};

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
        formType: FORM_TYPES.string,
        defaultValue: "solid",
        editable: false,
      },
    },
    layout: {},
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
        formType: FORM_TYPES.string,
        defaultValue: "underline",
        editable: false,
      },
    },
    layout: {},
  },
];
