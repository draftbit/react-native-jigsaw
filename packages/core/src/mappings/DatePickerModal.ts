import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
  Triggers,
  StylesPanelSections,
  createBoolProp,
  createTextProp,
  createTextEnumProp,
  createStaticBoolProp,
  createStaticNumberProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Date Picker Modal",
  tag: "DatePickerModal",
  description: "Date Picker modal for date selection",
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
  props: {
    locale: {},
    visible: createBoolProp({
      label: "Visible",
      description: "If true, show the modal. If false, hide the modal.",
      required: true,
    }),
    label: createTextProp({
      label: "Label",
      description:
        "Label used as the header in the component, defaults to `Select Date`",
    }),
    saveLabel: createTextProp({
      label: "Save Label",
      description:
        "Label used to confirm a date selection. Defaults to `Save`.",
    }),
    saveLabelDisabled: createStaticBoolProp({
      label: "Disable Save Label",
      description:
        "Flag indicating if the save label should be disabled and unable to receive events",
    }),
    uppercase: createStaticBoolProp({
      label: "Uppercase",
      description:
        "Flag indicating if the text in the component should be uppercase. Defaults to true.",
    }),
    startYear: createStaticNumberProp({
      label: "Start Year",
      description:
        "The start year when the component is rendered. Defaults to 1800.",
      required: false,
    }),
    endYear: createStaticNumberProp({
      label: "End Year",
      description:
        "The end year when the component is rendered. Defaults to 2200.",
      required: false,
    }),
    mode: createTextEnumProp({
      label: "Mode",
      description: "The selection mode of the date picker",
      required: true,
      options: ["single", "multiple", "range"],
      editable: false,
      defaultValue: "single",
      formType: FORM_TYPES.flatArray,
    }),
    fieldName: {
      ...FIELD_NAME,
      handlerPropName: "onConfirm",
      valuePropName: "date",
      defaultValue: "date",
    },
  },
};
