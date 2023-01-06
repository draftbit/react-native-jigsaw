import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createIconProp,
  createStaticNumberProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBDataDisplay,
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
    name: "Badge",
    tag: "Badge",
    description:
      "Badges allow the highlighting of an item’s status. This provides quick recognition.",
    ...SHARED_SEED_DATA,
    props: {
      leftIcon: createIconProp({
        label: "Left Icon",
        description: "The icon to display on the left side of the button",
      }),
      rightIcon: createIconProp({
        label: "Right Icon",
        description: "The icon to display on the right side of the button",
      }),
    },
  },
  {
    name: "Divider",
    tag: "Divider",
    description:
      "Divider can visually separate content in a given list or group.",
    ...SHARED_SEED_DATA,
    props: {
      orientation: createTextEnumProp({
        label: "Orientation",
        description: "The orientation of the divider",
        options: ["horizontal", "vertical"],
      }),
      thickness: createStaticNumberProp({
        label: "Thickness",
        description: "The thickness of the divider",
        defaultValue: 1,
      }),
    },
  },
];
