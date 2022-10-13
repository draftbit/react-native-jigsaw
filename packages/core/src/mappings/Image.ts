import {
  COMPONENT_TYPES,
  createImageProp,
  createResizeModeProp,
  StylesPanelSections,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
    StylesPanelSections.Borders,
  ],
  layout: {
    width: 100,
    height: 100,
  },
  props: {
    source: createImageProp(),
    resizeMode: createResizeModeProp(),
    blurRadius: {
      group: GROUPS.basic,
      name: "blurRadius",
      label: "Blur Radius",
      defaultValue: null,
      description: "The blur radius of the blur filter added to the image.",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      step: 5,
      precision: 1,
    },
  },
};
