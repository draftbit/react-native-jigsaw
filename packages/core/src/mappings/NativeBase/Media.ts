import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createImageProp,
  createTextEnumProp,
  createTextProp,
} from "@draftbit/types";
const NB_MEDIA_PROPS = {
  category: COMPONENT_TYPES.NBLayout,
  packageName: "native-base",
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
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

const AVATAR_PROPS = {
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
};

export const SEED_DATA = [
  {
    name: "Avatar",
    tag: "Avatar",
    description: "An image that represents the user",
    ...NB_MEDIA_PROPS,
    ...AVATAR_PROPS,
  },
  {
    name: "Avatar Badge",
    tag: "AvatarBadge",
    description:
      "A wrapper that displays its content on the bottom right corner of the avatar.",
    ...NB_MEDIA_PROPS,
  },
  {
    name: "Avatar Group",
    tag: "AvatarGroup",
    description: "A wrapper to stack multiple avatars together",
    ...NB_MEDIA_PROPS,
  },
];
