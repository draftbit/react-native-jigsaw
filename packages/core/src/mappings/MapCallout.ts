import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Map Callout",
  tag: "MapCallout",
  packageName: "@draftbit/maps",
  description:
    "An info window to display on top of a marker when it is clicked",
  category: COMPONENT_TYPES.map,
  triggers: [Triggers.OnPress],
  layout: {},
  props: {
    onPress: createActionProp({
      description: "Action to execute when the callout is pressed",
    }),
    showTooltip: createBoolProp({
      label: "Show Tooltip",
      description:
        'If false, a default "tooltip" bubble window will be drawn around this callout\'s children. If true, the child views can fully customize their appearance, including any "bubble"-like styles',
      group: GROUPS.basic,
      defaultValue: false,
    }),
  },
};
