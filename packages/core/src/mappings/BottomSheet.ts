import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  Triggers,
  createActionProp,
  createColorProp,
  createStaticArrayProp,
  createStaticNumberProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Bottom Sheet",
  tag: "BottomSheet",
  description:
    "A draggable Bottom sheet that snaps to specific points. Renders children in ScrollView",
  category: COMPONENT_TYPES.bottomsheet,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: { paddingHorizontal: 16, paddingVertical: 10 },
  triggers: [Triggers.OnSettle],
  props: {
    onSettle: createActionProp({
      label: "On settle",
      description: "Action to execute when sheet settles on a snap point",
    }),
    snapPoints: createStaticArrayProp({
      label: "Snap points",
      description:
        "An array of numerical values (that represent distance from the top) where bottom sheet can snap to place. Accepts numbers and percentages (minimum 2 snap points)",
      defaultValue: ["10%", "50%", "80%"],
    }),
    initialSnapIndex: createStaticNumberProp({
      label: "Initial snap index",
      description: "Index of the snap point to be used as the initial point",
      defaultValue: 0,
      required: false,
    }),
    showHandle: createStaticBoolProp({
      label: "Show handle",
      description: "Whether to show the top handle or not",
      defaultValue: true,
    }),
    handleColor: createColorProp({
      label: "Handle color",
      description: "Color of the top handle",
      defaultValue: "divider",
    }),
    topBorderRadius: createStaticNumberProp({
      label: "Top border radius",
      description: "Border radius of top corners",
      defaultValue: 20,
      required: false,
    }),
    borderWidth: createStaticNumberProp({
      label: "Border width",
      description: "Width of bottom sheet borders",
      defaultValue: 1,
      required: false,
    }),
    borderColor: createColorProp({
      label: "Border color",
      description: "Color of bottom sheet borders",
      defaultValue: "divider",
    }),
    showsVerticalScrollIndicator: createStaticBoolProp({
      label: "Show Vertical Scroll Indicator",
      description:
        "When true, shows a vertical scroll indicator. The default value is true.",
      defaultValue: true,
    }),
    bounces: createStaticBoolProp({
      label: "Bounce",
      description:
        "When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction.",
      defaultValue: true,
    }),
  },
};
