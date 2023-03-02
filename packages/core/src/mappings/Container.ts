import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
  createImageProp,
  createResizeModeProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  category: COMPONENT_TYPES.deprecated,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    height: 250,
  },
  props: {
    useThemeGutterPadding: {
      group: GROUPS.basic,
      label: "Use gutter padding",
      description:
        "When true, uses the theme gutter spacing as the container's horizontal padding",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: false,
      editable: false,
      required: true,
    },
    backgroundImage: createImageProp({
      label: "Background Image",
      description: "Apply a custom background image",
      defaultValue: null,
    }),
    backgroundImageResizeMode: createResizeModeProp(),
    elevation: createElevationType(0),
  },
};
