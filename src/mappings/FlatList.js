import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: COMPONENT_TYPES.data,
  supports_list_render: false,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/List.svg",
  layout: {},
  props: {
    horizontal: {
      label: "Horizontal",
      description: "Render list horizontally",
      editable: true,
      required: true,
      formType: FORM_TYPES.boolean,
      value: false,
    },
    numColumns: {
      label: "Number of columns",
      description: "Number of columns (vertical list only)",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 1,
      max: 4,
      step: 1,
      precision: 0,
      value: null,
    },
  },
};
