import {
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
  createNumberProp,
  StylesPanelSections,
  GROUPS,
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
    activeOpacity: createNumberProp({
      label: "Active Opacity",
      description: "The opacity when the button is pressed.",
      defaultValue: 0.8,
      group: GROUPS.basic,
    }),
    disabledOpacity: createNumberProp({
      label: "Disabled Opacity",
      description: "The opacity when the button is disabled.",
      defaultValue: 0.8,
      group: GROUPS.basic,
    }),
    delayLongPress: createNumberProp({
      label: "Delay Long Press",
      description:
        "Duration (in milliseconds) from onPressIn before onLongPress is called.",
      group: GROUPS.basic,
    }),
    hitSlop: createNumberProp({
      label: "Hit Slop",
      description:
        "Sets additional distance outside of element in which a press can be detected.",
      group: GROUPS.basic,
    }),
  },
};

export const SEED_DATA = [
  {
    name: "Touchable",
    tag: "Touchable",
    description: "An interactive view with no styles",
    category: COMPONENT_TYPES.deprecated,
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
