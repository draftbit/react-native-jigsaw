import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createDisabledProp,
  createLoadingProp,
  createActionProp,
  Triggers,
  StylesPanelSections,
  createStaticNumberProp,
} from "@draftbit/types";

const SEED_DATA_TRIGGERS = [Triggers.OnPress, Triggers.OnLongPress];
const SEED_DATA_PROPS = {
  onPress: createActionProp(),
  onLongPress: createActionProp(),
  icon: createIconProp({
    defaultValue: null,
    required: false,
  }),
  title: createTextProp({
    label: "Label",
    description: "Button Label",
    defaultValue: "Get Started",
  }),
  disabled: createDisabledProp(),
  loading: createLoadingProp(),
  activeOpacity: createStaticNumberProp({
    label: "Active Opacity",
    description: "Opacity of the button when active.",
    defaultValue: null,
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
    required: false,
  }),
  disabledOpacity: createStaticNumberProp({
    label: "Disabled Opacity",
    description: "Opacity of the button when disabled.",
    defaultValue: null,
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
    required: false,
  }),
  delayLongPress: createStaticNumberProp({
    label: "Delay Long Press",
    description:
      "Duration (in milliseconds) from onPressIn before onLongPress is called.",
    required: false,
  }),
  hitSlop: createStaticNumberProp({
    label: "Hit Slop",
    description:
      "Sets additional distance outside of element in which a press can be detected",
    required: false,
  }),
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "ButtonOutline",
    category: COMPONENT_TYPES.deprecated,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      borderRadius: 8,
      fontFamily: "system-700",
      backgroundColor: "transparent",
      borderWidth: 1,
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
  {
    name: "Button Solid",
    tag: "ButtonSolid",
    category: COMPONENT_TYPES.deprecated,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      borderRadius: 8,
      fontFamily: "system-700",
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
  {
    name: "Button",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      borderRadius: 8,
      fontFamily: "system-700",
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
];
