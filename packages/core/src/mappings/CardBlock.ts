import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
  createNumColumnsType,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

const SEED_DATA_PROPS = {
  image: {
    group: GROUPS.data,
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.image,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false,
  },
  title: {
    group: GROUPS.data,
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
    required: false,
  },
  leftDescription: {
    group: GROUPS.data,
    label: "Left description",
    description: "Text to display on the left",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "San Diego",
    editable: true,
    required: false,
  },
  rightDescription: {
    group: GROUPS.data,
    label: "Right description",
    description: "Text to display on the right",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "$100",
    editable: true,
    required: false,
  },
  aspectRatio: {
    group: GROUPS.basic,
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    formType: FORM_TYPES.aspectRatio,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 1.5,
    editable: true,
    required: false,
  },
  titleCentered: {
    group: GROUPS.basic,
    label: "Title centered",
    description: "Whether to center the title",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
  },
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Small Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one third of its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: createNumColumnsType({
        defaultValue: 1,
      }),
    },
  },
  {
    name: "Medium Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one half of its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
        required: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 2,
      }),
    },
  },
  {
    name: "Large Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up the full width its container.",
    category: COMPONENT_TYPES.card,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
        required: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 3,
      }),
    },
  },
];
