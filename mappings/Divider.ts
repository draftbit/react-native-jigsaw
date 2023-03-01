import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Divider",
    tag: "Divider",
    category: COMPONENT_TYPES.layout,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    description: "A horizontal line used to divide content",
    preview_image_url: "{CLOUDINARY_URL}/Divider.png",
    supports_list_render: false,
    props: {
      color: {
        group: GROUPS.basic,
        label: "Color",
        description: "The color of the divider",
        editable: true,
        required: false,
        defaultValue: "divider",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
      },
    },
    layout: {
      height: 1,
    },
  },
];
