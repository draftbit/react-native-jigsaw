import {
  COMPONENT_TYPES,
  createTextEnumProp,
  createBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  createTextProp,
  GROUPS,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.layout,
  packageName: "native-base",
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
};

export const SEED_DATA = [
  {
    name: "Aspect Ratio",
    tag: "AspectRatio",
    description:
      "Controls the size of the undefined dimension of a node or child component using an aspect ration",
    ...SHARED_SEED_DATA,
    props: {
      ratio: createTextProp({
        label: "Ratio",
        description: "The aspect ratio of the container",
        defaultValue: "4/3",
        group: GROUPS.basic,
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
    description: "Center aligns its contents to the center within itself",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Circle",
    tag: "Circle",
    description:
      "Center aligns its contents to the center within itself with a round border radius",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Container",
    tag: "Container",
    description:
      "The Container restricts a content's width according to current breakpoint, while keeping the size fluid",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Column",
    tag: "Column",
    description: "Column aligns items vertically",
    ...SHARED_SEED_DATA,
  },
  {
    name: "Row",
    tag: "Row",
    description: "Column aligns items horizontally",
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
    name: "Stack",
    tag: "Stack",
    description:
      "Stack aligns items vertically or horizontally based on the direction prop",
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
        description: "Determines whether to reverse the direction of items",
      }),
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
