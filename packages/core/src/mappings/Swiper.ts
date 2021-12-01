import {
  COMPONENT_TYPES,
  createNumberProp,
  createTextProp,
  createStaticBoolProp,
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
    vertical: createStaticBoolProp({
      label: "Vertical",
      description: "Whether to swipe vertical",
      defaultValue: false,
    }),
    loop: createStaticBoolProp({
      label: "Loop",
      description: "Whether to loop through slides",
      defaultValue: false,
    }),
    index: createNumberProp({
      label: "Initial Slide",
      description: "Initial Slide index",
      defaultValue: 0,
    }),
    showsButtons: createStaticBoolProp({
      label: "Show Buttons",
      description: "",
      defaultValue: true,
    }),
    autoplay: createStaticBoolProp({
      label: "Autoplay",
      description: "Autoplay slides",
      defaultValue: false,
    }),
    autoplayTimeout: createNumberProp({
      label: "Autoplay Timeout",
      description: "Slide autoplay timeout.",
      defaultValue: 2.5,
    }),
    autoplayDirection: createStaticBoolProp({
      label: "Autoplay Reverse",
      description: "Whether to autoplay reverse?",
      defaultValue: true,
    }),
    showsPagination: createStaticBoolProp({
      label: "Show Pagination",
      description: "Show pagination",
      defaultValue: true,
    }),
    dotColor: createTextProp({
      group: GROUPS.basic,
      label: "Dot Color",
      description: "Dot color",
    }),
    activeDotColor: createTextProp({
      group: GROUPS.basic,
      label: "Active Dot Color",
      description: "Active dot color",
    }),
  },
};
