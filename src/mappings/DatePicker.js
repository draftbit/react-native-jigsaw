import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../core/component-types";
const SEED_DATA_PROPS = {
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: FORM_TYPES.string,
    defaultValue: "Date",
    editable: true,
    required: true,
  },
  mode: {
    label: "Mode",
    description: "Choose between date, time and datetime",
    defaultValue: "date",
    editable: true,
    required: true,
    formType: FORM_TYPES.flatArray,
    options: ["date", "time", "datetime"],
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: FORM_TYPES.string,
    defaultValue: null,
    editable: true,
    required: false,
  },
  locale: {
    label: "Locale",
    description: "Locale for the datepicker. Must be a valid Locale",
    formType: FORM_TYPES.string,
    defaultValue: null,
    editable: true,
    required: false,
  },
  minuteInterval: {
    label: "Minute Interval",
    description: "The interval at which minutes can be selected",
    formType: FORM_TYPES.flatArray,
    options: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30],
    defaultValue: null,
    editable: true,
    required: false,
  },
  timeZoneOffsetInMinutes: {
    label: "Time zone offset",
    description:
      "By default, the datepicker uses the device's timezone. This will allow you to offset it",
    formType: FORM_TYPES.number,
    defaultValue: null,
    editable: true,
    required: false,
  },
  initialDate: {
    label: "Initial Date",
    description:
      "Optionally set an initial date to make your forms easier to work with",
    formType: FORM_TYPES.date,
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
    handlerPropName: "onDateChange",
    valuePropName: "date",
    defaultValue: "date",
  },
};

export const SEED_DATA = [
  {
    name: "Date Picker - Solid",
    tag: "DatePicker",
    description: "A date picker with a solid border",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/DatePicker.png",
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
    name: "Date Picker - Underline",
    tag: "DatePicker",
    description: "A date picker with an underline",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/DatePicker.png",
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
