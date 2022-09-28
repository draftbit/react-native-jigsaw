import {
  COMPONENT_TYPES,
  createNumberProp,
  createIconProp,
  createTextProp,
  createStaticBoolProp,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Accordion",
  tag: "AccordionGroup",
  description: "An expandable container containing components",
  category: COMPONENT_TYPES.container,
  layout: {
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    fontSize: 16,
  },
  props: {
    label: createTextProp({
      label: "Label",
    }),
    expanded: createStaticBoolProp({
      label: "Expanded",
      description:
        "Whether the AccordionGroup should be initaially expanded or not",
    }),
    openColor: createColorProp({
      label: "Open text color",
    }),
    closedColor: createColorProp({
      label: "Closed text color",
    }),
    caretColor: createColorProp({
      label: "Caret color",
    }),
    caretSize: createNumberProp({
      label: "Caret size",
      defaultValue: 24,
    }),
    icon: createIconProp(),
    iconSize: createNumberProp({
      label: "Icon size",
      defaultValue: 24,
    }),
  },
};
