import {
  BLOCK_STYLES_SECTIONS,
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Markdown",
  tag: "Markdown",
  description: "A component that renders markdown",
  category: COMPONENT_TYPES.basic,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  props: {
    children: {
      group: GROUPS.data,
      label: "Markdown Text",
      description: "Markdownt text to be rendered ",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "## Double click me to edit 👀",
    },
  },
};
