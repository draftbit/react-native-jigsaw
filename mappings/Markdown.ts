import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Markdown",
  tag: "Markdown",
  description: "A component that renders markdown",
  category: COMPONENT_TYPES.text,
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Effects,
  ],
  props: {
    children: {
      group: GROUPS.data,
      label: "Markdown Text",
      description: "Markdown text to be rendered ",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "### Markdown",
    },
  },
};
