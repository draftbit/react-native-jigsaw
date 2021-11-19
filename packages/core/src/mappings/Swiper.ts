import {
  COMPONENT_TYPES,
  createBoolProp,
  createNumberProp,
  createTextProp,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Swiper",
  tag: "Swiper",
  description: "Swiper container",
  category: COMPONENT_TYPES.container,
  layout: {
    height: 300,
    width: "100%",
  },
  props: {
    from: createNumberProp({
      group: GROUPS.basic,
      label: "Initial Slide",
    }),
    loop: createBoolProp({
      group: GROUPS.basic,
      label: "Loop",
    }),
    timeout: createNumberProp({
      group: GROUPS.basic,
      label: "Timeout",
      defaultValue: 0,
    }),
    vertical: createBoolProp({
      group: GROUPS.basic,
      label: "Vertical",
      defaultValue: false,
    }),
    prevTitle: createTextProp({
      group: GROUPS.basic,
      label: "Previous Title",
      defaultValue: "",
    }),
    nextTitle: createTextProp({
      group: GROUPS.basic,
      label: "Next Title",
      defaultValue: "",
    }),
    dotsTouchable: createBoolProp({
      group: GROUPS.basic,
      label: "Dots Touchable",
      defaultValue: true,
    }),
  },
};
