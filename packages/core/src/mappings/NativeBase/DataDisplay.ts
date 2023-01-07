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
    doc_link: "https://docs.nativebase.io/badge",
    code_link:
      "https://github.com/GeekyAnts/NativeBase/tree/master/src/components/composites/Badge",
    description:
      "Badges allow the highlighting of an item’s status. This provides quick recognition.",
    ...SHARED_SEED_DATA,
    props: {
      /*  */
      leftIcon: createIconProp({
        label: "Left Icon",
        description: "The left icon element to use in the button.",
      }),
      rightIcon: createIconProp({
        label: "Right Icon",
        description: "The right icon element to use in the button.",
      }),
      startIcon: createIconProp({
        label: "Start Icon",
        description: "The start icon element to use in the button.",
      }),
      endIcon: createIconProp({
        label: "End Icon",
        description: "The end icon element to use in the button.",
      }),
    },
  },
  {
    name: "Divider",
    tag: "Divider",
    doc_link: "https://docs.nativebase.io/divider",
    code_link:
      "https://github.com/GeekyAnts/NativeBase/tree/master/src/components/composites/Divider",
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
