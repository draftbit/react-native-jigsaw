import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createDisabledProp,
  createLoadingProp,
  createActionProp,
  Triggers,
  StylesPanelSections,
  createNumberProp,
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
  activeOpacity: createNumberProp(),
  disabledOpacity: createNumberProp(),
  delayLongPress: createNumberProp(),
  hitSlop: createNumberProp(),
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
      backgroundColor: "transparent",
      borderRadius: 8,
      fontFamily: "system-700",
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
      height: 42,
      fontFamily: "system-700",
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
];
