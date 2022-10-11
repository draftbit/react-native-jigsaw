import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createImageProp,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Circle Image",
  tag: "CircleImage",
  description: "A circle image",
  category: COMPONENT_TYPES.deprecated,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  props: {
    source: createImageProp(),
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "Size of your circle image",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 60,
    },
  },
};
