import { COMPONENT_TYPES, createActionProp, Triggers } from "@draftbit/types";

export const SEED_DATA = {
  name: "Touchable",
  tag: "Touchable",
  description: "Simple button with no styles",
  category: COMPONENT_TYPES.button,
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
  },
};
