import {
  COMPONENT_TYPES,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  createColorProp,
  createStaticNumberProp,
  createStaticBoolProp,
  createDisabledProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Shadow",
  tag: "Shadow View",
  description: "A cross-platform, universal shadow.",
  library: "react-native-shadow-2",
  category: COMPONENT_TYPES.view,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {},
  props: {
    disabled: createDisabledProp({
      description: "Disabled the shadow.",
    }),
    startColor: createColorProp({
      label: "Start Color",
      description: "The initial gradient color of the shadow.",
      defaultValue: null,
    }),
    endColor: createColorProp({
      label: "End Color",
      description: "The final gradient color of the shadow.",
      defaultValue: null,
    }),
    distance: createStaticNumberProp({
      label: "Distance",
      description: "The distance of the shadow.",
    }),
    paintInside: createStaticBoolProp({
      label: "Paint Inside",
      description: "Apply the shadow below/inside the content.",
      defaultValue: null,
    }),
    stretch: createStaticBoolProp({
      label: "Stretch",
      description: "Force children to occupy all available horizontal space.",
      defaultValue: null,
    }),
  },
};
