import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createElevationType,
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
  icon: {
    group: GROUPS.basic,
    label: "Icon",
    description: "Icon to display on the top right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
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
  rating: {
    group: GROUPS.data,
    label: "Rating",
    description: "Number of stars to show. A number 0-5.",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 5,
    min: 0,
    max: 5,
    step: 1,
    precision: 0,
    editable: true,
    required: false,
  },
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Medium Card (Rating)",
    tag: "CardContainerRating",
    description:
      "An elevated card with a title and description, that takes up half of its container.",
    category: COMPONENT_TYPES.deprecated - card,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_2col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        description: "Numbre of columns",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 2,
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Large Card (Rating)",
    tag: "CardContainerRating",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: COMPONENT_TYPES.deprecated - card,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_3col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        description: "Numbre of columns",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 3,
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
];
