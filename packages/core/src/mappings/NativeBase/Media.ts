import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createImageProp,
  createTextEnumProp,
  createTextProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBLayout,
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
    name: "Avatar",
    tag: "Avatar",
    description: "An image that represents the user",
    ...SHARED_SEED_DATA,
    props: {
      source: createImageProp(),
      size: createTextEnumProp({
        label: "Size",
        description: "The size of the avatar.",
        options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      }),
      wrapperRef: createTextProp({
        label: "Reference",
        description: "Reference to be attached to the Avatar wrapper.",
        defaultValue: "User Avatar",
      }),
    },
  },
  {
    name: "Avatar Badge",
    tag: "AvatarBadge",
    description:
      "A wrapper that displays its content on the bottom right corner of the avatar.",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Avatar Group",
    tag: "AvatarGroup",
    description: "A wrapper to stack multiple avatars together",
    ...SHARED_SEED_DATA,
  },
];
