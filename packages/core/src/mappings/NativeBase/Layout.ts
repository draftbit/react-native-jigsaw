import {
  COMPONENT_TYPES,
  createBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  createStaticNumberProp,
  StylesPanelSections,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.testing /*.layout*/,
  packageName: "native-base",
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
};

const CONTAINER_COMPONENT_STYLES_WITHOUT_FLEX =
  CONTAINER_COMPONENT_STYLES_SECTIONS.filter(
    (item) =>
      item !== StylesPanelSections.LayoutFlexItems &&
      item !== StylesPanelSections.LayoutContent
  );

export const SEED_DATA = [
  {
    name: "Aspect Ratio",
    tag: "AspectRatio",
    description:
      "Controls the size of the undefined dimension of a node or child component using an aspect ratio",
    ...SHARED_SEED_DATA,
    props: {
      ratio: createStaticNumberProp({
        label: "Ratio",
        description:
          "The aspect ratio of the container in decimal format (ex: 3/4 -> 1.33)",
        defaultValue: 1.33,
      }),
    },
    stylesPanelSections: [
      StylesPanelSections.Background,
      StylesPanelSections.Size,
      StylesPanelSections.Margins,
      StylesPanelSections.Position,
      StylesPanelSections.Borders,
      StylesPanelSections.Effects,
    ],
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
    description: "Center aligns its contents to the center within itself",
    ...SHARED_SEED_DATA,
    stylesPanelSections: CONTAINER_COMPONENT_STYLES_WITHOUT_FLEX,
  },
  {
    name: "Circle",
    tag: "Circle",
    description:
      "Center aligns its contents to the center within itself with a round border radius",
    ...SHARED_SEED_DATA,
    stylesPanelSections: CONTAINER_COMPONENT_STYLES_WITHOUT_FLEX,
  },
  {
    name: "Column",
    tag: "Column",
    description: "Column aligns items vertically",
    layout: {
      flexDirection: "column",
    },
    ...SHARED_SEED_DATA,
  },
  {
    name: "Row",
    tag: "Row",
    description: "Column aligns items horizontally",
    layout: {
      flexDirection: "row",
    },
    ...SHARED_SEED_DATA,
  },
  {
    name: "Spacer",
    tag: "Spacer",
    description:
      "An adjustable, empty space that can be used to tune the spacing between child elements within Flex",
    layout: {
      flex: 1,
    },
    ...SHARED_SEED_DATA,
    stylesPanelSections: [
      StylesPanelSections.LayoutSelectedItem,
      StylesPanelSections.Background,
      StylesPanelSections.Margins,
    ],
  },
  {
    name: "Stack",
    tag: "Stack",
    description:
      "Stack aligns items vertically or horizontally based on the direction prop",
    ...SHARED_SEED_DATA,
    props: {
      isDisabled: createBoolProp({
        label: "Disabled",
        description: "If true, the Stack will be disabled",
      }),
      isInvalid: createBoolProp({
        label: "Invalid",
        description: "If true, the Stack will be invalid",
      }),
    },
  },
  {
    name: "ZStack",
    tag: "ZStack",
    description: "ZStack aligns items to the z-axis",
    ...SHARED_SEED_DATA,
    props: {
      reversed: createBoolProp({
        label: "Reversed",
        description: "Determines whether to reverse the direction of items",
      }),
    },
  },
];