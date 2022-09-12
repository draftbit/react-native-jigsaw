import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Short Card (Left)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a left aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortLeftImage.png",
    supports_list_render: true,
    props: {
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
        description: "Title to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
        required: false,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
        required: false,
      },
      elevation: createElevationType(2),
      mode: {
        group: GROUPS.uncategorized,
        label: "Image Side",
        description: "The side on which the image is on (left or right)",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "left",
        options: ["left", "right"],
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Short Card (Right)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a right aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortRightImage.png",
    supports_list_render: true,
    props: {
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
        description: "Title to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
        required: false,
      },
      elevation: createElevationType(2),
      mode: {
        label: "Mode",
        description: "Mode",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "right",
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
];
