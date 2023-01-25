import {
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
  createStaticNumberProp,
  StylesPanelSections,
  createDisabledProp,
  GROUPS,
  createStaticBoolProp,
} from "@draftbit/types";

const SEED_DATA_PROPS = {
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Borders,
  ],
  layout: {},
  triggers: [Triggers.OnPress, Triggers.OnLongPress],
  props: {
    onPress: createActionProp(),
    onLongPress: createActionProp(),
    disabled: createDisabledProp(),
    activeOpacity: createStaticNumberProp({
      label: "Active Opacity",
      description: "The opacity when the button is pressed.",
      defaultValue: null,
      min: 0,
      max: 1,
      step: 0.01,
      precision: 2,
      required: false,
    }),
    disabledOpacity: createStaticNumberProp({
      label: "Disabled Opacity",
      description: "The opacity when the button is disabled.",
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
        "Sets additional distance outside of element in which a press can be detected.",
      required: false,
    }),
    android_disableSound: createStaticBoolProp({
      label: "Disable Sound",
      description: "Disable the Android sound effect.",
      defaultValue: null,
      group: GROUPS.android,
    }),
  },
};

export const SEED_DATA = [
  {
    name: "Touchable",
    tag: "Touchable",
    description: "An interactive view with no styles",
    category: COMPONENT_TYPES.button,
    ...SEED_DATA_PROPS,
  },
  {
    name: "Pressable",
    tag: "Pressable",
    description: "An interactive view with no styles",
    category: COMPONENT_TYPES.button,
    ...SEED_DATA_PROPS,
  },
];
