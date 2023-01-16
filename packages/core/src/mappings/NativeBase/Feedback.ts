import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createNumberProp,
  createIconProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBFeedback,
  packageName: "native-base",
  stylesPanelSections: [
    StylesPanelSections.LayoutFlexItems,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.LayoutContent,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
  layout: {},
  triggers: {},
};

export const SEED_DATA = [
  {
    name: "Alert",
    tag: "Alert",
    description:
      "Wrapper component. Alerts convey a state that can influence a system, feature, or page.",
    ...SHARED_SEED_DATA,
    props: {
      status: createTextEnumProp({
        label: "Status",
        description: "The status of the alert",
        options: ["success", "warning", "error", "info"],
        defaultValue: "info",
      }),
      variant: createTextEnumProp({
        label: "Variant",
        description: "The variant of the alert style to use.",
        options: [
          "subtle",
          "solid",
          "outline",
          "left-accent",
          "top-accent",
          "outline-light",
        ],
        defaultValue: "subtle",
      }),
    },
  },
  {
    name: "Alert Icon",
    tag: "Alert.Icon",
    description:
      "The visual icon for the alert that changes based on the status prop.",
    ...SHARED_SEED_DATA,
    props: {
      icon: createIconProp({
        label: "Icon",
        description: "The icon to display",
      }),
    },
  },
  {
    name: "Progress",
    tag: "Progress",
    description:
      "Progress helps show the progress status for a time-consuming task that consists of several steps.",
    ...SHARED_SEED_DATA,
    props: {
      value: createNumberProp({
        label: "Value",
        description: "The value of the progress bar",
        defaultValue: 0,
        min: 0,
        max: 100,
      }),
      min: createNumberProp({
        label: "Min",
        description: "The minimum value of the progress bar",
        defaultValue: 0,
        min: 0,
        max: 100,
      }),
      max: createNumberProp({
        label: "Max",
        description: "The maximum value of the progress bar",
        defaultValue: 100,
        min: 0,
        max: 100,
      }),
    },
  },
];
