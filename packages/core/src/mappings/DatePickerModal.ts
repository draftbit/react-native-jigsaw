import {
  COMPONENT_TYPES,
  FORM_TYPES,
  Triggers,
  StylesPanelSections,
  createBoolProp,
  createTextProp,
  createTextEnumProp,
  createStaticBoolProp,
  createStaticNumberProp,
  createFieldNameProp,
  createActionProp,
} from "@draftbit/types";

/**
 * Maps react-native-paper-dates DatePickerModal in modes: "single" and "multiple"
 * Cannot map mode "range" because it relies on 2 fieldNames (startDate and endDate)
 */

const SHARED_SEED_DATA = {
  tag: "DatePickerModal",
  packageName: "react-native-paper-dates",
  triggers: [Triggers.OnDismiss, Triggers.OnConfirm, Triggers.OnChange],
  category: COMPONENT_TYPES.input,
  StylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
  ],
};

const SHARED_SEED_DATA_PROPS = {
  onDismiss: createActionProp({
    label: "On Dismiss",
    description: "Called when date picker dimissed",
    required: true,
  }),
  locale: createTextProp({
    label: "Locale",
    description:
      "A locale can be composed of both a base language, the country (territory) of use, and possibly codeset (which is usually assumed). For example, German is de",
    defaultValue: "en",
    required: true,
  }),
  visible: createBoolProp({
    label: "Visible",
    description: "Flag indicating if the component should be displayed",
    required: true,
  }),
  label: createTextProp({
    label: "Label",
    description: "The label used as the header in the component",
    defaultValue: "Select date",
  }),
  saveLabel: createTextProp({
    label: "Save Label",
    description: "Label used to confirm a date selection",
    defaultValue: "Save",
  }),
  saveLabelDisabled: createStaticBoolProp({
    label: "Disable Save Label",
    description:
      "Flag indicating if the save label should be disabled and unable to receive events",
  }),
  uppercase: createStaticBoolProp({
    label: "Uppercase",
    description:
      "Flag indicating if the text in the component should be uppercase",
    defaultValue: true,
  }),
  startYear: createStaticNumberProp({
    label: "Start Year",
    description: "The start year when the component is rendered",
    required: false,
    defaultValue: 1800,
  }),
  endYear: createStaticNumberProp({
    label: "End Year",
    description: "The end year when the component is rendered",
    required: false,
    defaultValue: 2200,
  }),
};

export const SEED_DATA = [
  {
    ...SHARED_SEED_DATA,
    name: "Date Picker Modal",
    description: "Date Picker modal for date selection",
    props: {
      ...SHARED_SEED_DATA_PROPS,
      onConfirm: createActionProp({
        label: "On Confirm",
        description: "Called when date selected and confirmed",
        required: true,
      }),
      onChange: createActionProp({
        label: "On Change",
        description: "Called when date selection changes",
      }),
      mode: createTextEnumProp({
        label: "Mode",
        description: "The selection mode of the date picker",
        required: true,
        options: ["single"],
        editable: false,
        defaultValue: "single",
        formType: FORM_TYPES.flatArray,
      }),
      fieldName: createFieldNameProp({
        defaultValue: "date",
        handlerPropName: "onConfirm",
        valuePropName: "date",
      }),
    },
  },
  {
    ...SHARED_SEED_DATA,
    name: "Multiple Date Picker Modal",
    description: "Date Picker modal for multiple date selection",
    props: {
      ...SHARED_SEED_DATA_PROPS,
      onConfirm: createActionProp({
        label: "On Confirm",
        description: "Called when dates selected and confirmed",
        required: true,
      }),
      onChange: createActionProp({
        label: "On Change",
        description: "Called when dates selection changes",
      }),
      mode: createTextEnumProp({
        label: "Mode",
        description: "The selection mode of the date picker",
        required: true,
        options: ["multiple"],
        editable: false,
        defaultValue: "multiple",
        formType: FORM_TYPES.flatArray,
      }),
      moreLabel: createTextProp({
        label: "More Label",
        description:
          "The label used display when multiple dates have been selected in the component",
        defaultValue: "More",
      }),
      startLabel: createTextProp({
        label: "Start Label",
        description:
          "The label used as the prefix to the starting date in the component",
        defaultValue: "Start",
      }),
      endLabel: createTextProp({
        label: "End Label",
        description:
          "The label used as the suffix to the ending date in the component",
        defaultValue: "End",
      }),
      fieldName: createFieldNameProp({
        defaultValue: "dates",
        handlerPropName: "onConfirm",
        valuePropName: "dates",
      }),
    },
  },
];
