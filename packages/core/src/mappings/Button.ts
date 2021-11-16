import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createTextProp,
  GROUPS,
  createActionProp,
  Triggers,
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
  disabled: createBoolProp({
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled",
  }),
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
    category: COMPONENT_TYPES.button,
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
    name: "Button Solid",
    tag: "ButtonSolid",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
];
