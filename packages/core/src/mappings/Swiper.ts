import {
  COMPONENT_TYPES,
  createBoolProp,
  createNumberProp,
  createTextProp,
  createColorProp,
  GROUPS,
  Triggers,
  createActionProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Swiper",
  tag: "Swiper",
  description: "Swiper container",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    height: 300,
    width: "100%",
  },
  triggers: [Triggers.OnIndexChanged],
  props: {
    onIndexChanged: createActionProp(),
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
    prevTitleColor: createColorProp({
      label: "Previous Title Color",
    }),
    nextTitleColor: createColorProp({
      label: "Next Title Color",
    }),
    dotColor: createColorProp({
      label: "Dot Color",
      defaultValue: "light",
    }),
    dotActiveColor: createColorProp({
      label: "Dot Active Color",
      defaultValue: "primary",
    }),
    dotsTouchable: createBoolProp({
      group: GROUPS.basic,
      label: "Dots Touchable",
      defaultValue: true,
    }),
  },
};
