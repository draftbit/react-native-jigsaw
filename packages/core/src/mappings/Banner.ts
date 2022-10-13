import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createColorProp,
  createTextProp,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Banner",
  tag: "Banner",
  category: COMPONENT_TYPES.deprecated,
  props: {
    icon: createIconProp({
      defaultValue: null,
      required: false,
    }),
    content: createTextProp({
      label: "Content",
      description: "Banner text content",
    }),
    initiallyVisible: createBoolProp({
      group: GROUPS.basic,
      label: "Initially visible",
      description: "Whether the banner should be visible",
      defaultValue: true,
    }),
    dismissable: createBoolProp({
      group: GROUPS.basic,
      label: "Dismissable",
      description: "Whether the banner should be able to be closed",
      defaultValue: true,
    }),
    buttonColor: createColorProp({
      label: "Button color",
      defaultValue: "primary",
    }),
  },
};
