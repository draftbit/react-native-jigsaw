import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createTextProp,
  GROUPS,
  createActionProp,
  Triggers,
  StylesPanelSections,
} from "@draftbit/types";

const SEED_DATA_TRIGGERS = [Triggers.OnPress];
const SEED_DATA_PROPS = {
  onPress: createActionProp(),
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
  loading: createBoolProp({
    group: GROUPS.basic,
    label: "Loading",
    description: "Whether to show a loading indicator",
  }),
};

const LAYOUT = {
  backgroundColor: "transparent",
  borderRadius: 8,
  fontFamily: "system-700",
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
      ...LAYOUT,
      backgroundColor: "transparent",
      borderWidth: 1,
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
  {
    name: "Button",
    tag: "ButtonSolid",
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
      ...LAYOUT,
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
];
