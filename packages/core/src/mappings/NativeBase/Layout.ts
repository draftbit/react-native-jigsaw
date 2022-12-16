import { COMPONENT_TYPES, StylesPanelSections } from "@draftbit/types";
const NB_LAYOUT_PROPS = {
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
  props: {
    bgColor: createColorProp({
      label: "Open text color",
    }),
  },
};

export const SEED_DATA = [
  {
    name: "Aspect Ratio",
    tag: "AspectRatio",
    description:
      "AspectRatio controls the size of the undefined dimension of a node or child component.",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Box",
    tag: "Box",
    description:
      "This is a generic component for low level layout needs. It is similar to a div in HTML",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Center",
    tag: "Center",
    description: "Centers its child",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Square",
    tag: "Square",
    description: "Centers its child inside a square",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Circle",
    tag: "Circle",
    description: "Centers its child inside a circle",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Column",
    tag: "Column",
    description: "Column aligns items vertically",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Container",
    tag: "Container",
    description:
      "The Container restricts a content's width according to current breakpoint, while keeping the size fluid.",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Row",
    tag: "Row",
    description: "Column aligns items horizontally",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Stack",
    tag: "Stack",
    description:
      "Stack aligns items vertically or horizontally based on the direction prop.",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "ZStack",
    tag: "ZStack",
    description: "ZStack aligns items to the z-axis.",
    ...NB_LAYOUT_PROPS,
  },
];
