import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Inline Card",
  tag: "CardInline",
  description:
    "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
  category: COMPONENT_TYPES.card,
  layout: {},
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
      description: "Text to display",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false,
    },
    subtitle: {
      group: GROUPS.data,
      label: "Subtitle",
      description: "Subtitle text",
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
      propType: PROP_TYPES.NUMBER,
      defaultValue: 1.5,
      editable: true,
      required: false,
    },
    elevation: createElevationType(2),
  },
};
