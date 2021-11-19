import { COMPONENT_TYPES, createTextProp } from "@draftbit/types";

export const SEED_DATA = {
  name: "Markdown",
  tag: "MarkdownComponent",
  description: "A markdown component",
  category: COMPONENT_TYPES.basic,
  props: {
    content: createTextProp({
      label: "Markdown Text",
      description: "Markdown Text",
      defaultValue: null,
    }),
  },
};
