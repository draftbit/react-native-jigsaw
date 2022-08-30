import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Avatar Edit",
  tag: "AvatarEdit",
  description: "An avatar with an edit icon in the top right",
  category: COMPONENT_TYPES.deprecated,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  layout: {
    width: 64,
    height: 64,
  },
  props: {
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 80,
    },
    image: {
      group: GROUPS.data,
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.image,
      propType: PROP_TYPES.ASSET,
      defaultValue: "brightness-5",
    },
  },
};
