import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
  GROUPS,
  Triggers,
  StylesPanelSections,
  createNumberProp,
  createColorProp,
  createStaticBoolProp,
} from "@draftbit/types";

const SEED_DATA_PROPS = {
  mode: {
    label: "Mode",
    description: "Choose between date, time and datetime",
    defaultValue: "date",
    editable: true,
    required: true,
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    options: ["date", "time", "datetime"],
    group: GROUPS.basic,
  },
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Date",
    editable: true,
    required: true,
    group: GROUPS.data,
  },
  labelSize: createNumberProp({
    label: "Label Size",
  }),
  labelColor: createColorProp({
    label: "Label Color",
  }),
  borderColor: createColorProp({
    label: "Border Color",
  }),
  borderColorActive: createColorProp({
    label: "Border Color",
  }),
  format: {
    label: "Format",
    description: "Create an output format for the date.",
    editable: true,
    required: false,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    group: GROUPS.basic,
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  // locale: {
  //   label: "Locale",
  //   description: "Locale for the datepicker. Must be a valid Locale",
  //   formType: FORM_TYPES.string,
  //   propType: PROP_TYPES.STRING,
  //   defaultValue: null,
  //   editable: true,
  //   required: false,
  //   group: GROUPS.basic,
  // },
  // minuteInterval: {
  //   label: "Minute Interval",
  //   description: "The interval at which minutes can be selected",
  //   formType: FORM_TYPES.flatArray,
  //   propType: PROP_TYPES.NUMBER,
  //   options: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30],
  //   defaultValue: null,
  //   editable: true,
  //   required: false,
  //   group: GROUPS.basic,
  // },
  // timeZoneOffsetInMinutes: {
  //   label: "Time zone offset",
  //   description:
  //     "By default, the datepicker uses the device's timezone. This will allow you to offset it",
  //   formType: FORM_TYPES.number,
  //   propType: PROP_TYPES.NUMBER,
  //   defaultValue: null,
  //   editable: true,
  //   required: false,
  //   group: GROUPS.basic,
  // },
  disabled: {
    label: "Disabled",
    description:
      "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  // error: {
  //   label: "Error",
  //   description: "Whether the picker should display the error state",
  //   formType: FORM_TYPES.boolean,
  //   propType: PROP_TYPES.BOOLEAN,
  //   defaultValue: false,
  //   editable: true,
  //   required: false,
  //   group: GROUPS.data,
  // },
  leftIconName: {
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  leftIconMode: {
    label: "Left icon mode",
    description:
      "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    defaultValue: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true,
    group: GROUPS.basic,
  },
  rightIconName: {
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: GROUPS.basic,
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
    name: "Date Picker",
    tag: "DatePicker",
    description: "A component used to select a date from a visual calendar",
    category: COMPONENT_TYPES.input,
    layout: null,
    triggers: [Triggers.OnDateChange],
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
    ],
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Appearance",
        description: "Type of Datepicker",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "solid",
        options: ["solid", "underline"],
        editable: true,
        required: true,
        group: GROUPS.basic,
      },
      autoDismissKeyboard: createStaticBoolProp({
        label: "Auto dismiss keyboard",
        description: "Automatically dismiss keyboard when DatePicker is opened",
        defaultValue: true,
      }),
    },
  },
];
