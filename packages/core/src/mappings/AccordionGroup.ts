import {
  COMPONENT_TYPES,
  createNumberProp,
  createIconProp,
  createTextProp,
  createStaticBoolProp,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Accordion Group",
  tag: "AccordionGroup",
  description: "An expandable container containing components",
  category: COMPONENT_TYPES.container,
  props: {
    openColor: createColorProp({
      label: "Open text color",
    }),
    closedColor: createColorProp({
      label: "Closed text Color",
    }),
    caretColor: createColorProp({
      label: "Caret color",
    }),
    iconSize: createNumberProp({
      label: "Icon size",
      defaultValue: 24,
    }),
    label: createTextProp({
      label: "Label",
    }),
    expanded: createStaticBoolProp({
      label: "Expanded",
      description: "Whether the AccordionGroup should be expanded or not",
    }),
    icon: createIconProp(),
  },
};
