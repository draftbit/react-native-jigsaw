import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createBoolProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
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
  allowChildren: true,
  layout: {},
  triggers: {},
};

export const SEED_DATA = [
  {
    name: "Aspect Ratio",
    tag: "AspectRatio",
    description:
      "AspectRatio controls the size of the undefined dimension of a node or child component.",
    ...SHARED_SEED_DATA,
    props: {
      ratio: createTextEnumProp({
        label: "Ratio",
        description: "The aspect ratio of the container",
        options: [
          "1 / 1",
          "4 / 3",
          "3 / 2",
          "16 / 9",
          "2 / 1",
          "3 / 4",
          "2 / 3",
          "9 / 16",
          "1 / 2",
        ],
        defaultValue: "4 / 3",
      }),
    },
  },
  {
    name: "Box",
    tag: "Box",
    description:
      "This is a generic component for low level layout needs. It is similar to a div in HTML",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Center",
    tag: "Center",
    description: "Centers its child",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Square",
    tag: "Square",
    description: "Centers its child inside a square",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Circle",
    tag: "Circle",
    description: "Centers its child inside a circle",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Column",
    tag: "Column",
    description: "Column aligns items vertically",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Container",
    tag: "Container",
    description:
      "The Container restricts a content's width according to current breakpoint, while keeping the size fluid.",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Flex",
    tag: "Flex",
    description: "A Box with Flexbox properties. ",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Spacer",
    tag: "Spacer",
    description:
      "An adjustable, empty space that can be used to tune the spacing between child elements within Flex",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Row",
    tag: "Row",
    description: "Column aligns items horizontally",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Stack",
    tag: "Stack",
    description:
      "Stack aligns items vertically or horizontally based on the direction prop.",
    ...SHARED_SEED_DATA,
    props: {
      direction: createTextEnumProp({
        label: "Direction",
        description: "The direction of the Stack",
        options: ["row", "column"],
        defaultValue: "column",
      }),
      reversed: createBoolProp({
        label: "Reversed",
        description: "Determines whether to reverse the direction of items.",
      }),
      isDisabled: createBoolProp({
        label: "Disabled",
        description: "If true, the Stack will be disabled.",
      }),
      isInvalid: createBoolProp({
        label: "Invalid",
        description: "If true, the Stack will be invalid.",
      }),
    },
  },
  {
    name: "ZStack",
    tag: "ZStack",
    description: "ZStack aligns items to the z-axis.",
    ...SHARED_SEED_DATA,
    props: {
      reversed: createBoolProp({
        label: "Reversed",
        description: "Determines whether to reverse the direction of items.",
      }),
    },
  },
];
