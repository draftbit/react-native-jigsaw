import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createActionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Header Large",
    tag: "HeaderLarge",
    description:
      "A large header with an optional touchable right aligned text and icon.",
    category: COMPONENT_TYPES.header,
    layout: {},
    triggers: [Triggers.OnPress],
    props: {
      onPress: createActionProp(),
      title: createTextProp({
        label: "Title",
        description: "Text to display",
        defaultValue: "Title",
      }),
      buttonText: createTextProp({
        label: "Button text",
        description: "Right aligned button text to display",
        defaultValue: "See All",
      }),
      icon: createIconProp({
        defaultValue: null,
        required: false,
      }),
    },
  },
];
