import {
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
  createStaticNumberProp,
  StylesPanelSections,
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
    activeOpacity: createStaticNumberProp({
      label: "Active Opacity",
      description: "The opacity when the button is pressed.",
      defaultValue: 0.8,
      min: 0,
      max: 1,
      step: 0.01,
      precision: 2,
      required: false,
    }),
    disabledOpacity: createStaticNumberProp({
      label: "Disabled Opacity",
      description: "The opacity when the button is disabled.",
      defaultValue: 0.8,
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
