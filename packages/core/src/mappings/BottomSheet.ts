import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  Triggers,
  createActionProp,
  createColorProp,
  createStaticNumberProp,
  createArrayProp,
  GROUPS,
  createTextEnumProp,
  FORM_TYPES,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Bottom Sheet",
  tag: "BottomSheet",
  description:
    "A draggable Bottom sheet that snaps to specific points. Renders children in ScrollView",
  category: COMPONENT_TYPES.bottomsheet,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  triggers: [Triggers.OnSettle],
  props: {
    onSettle: createActionProp({
      label: "On settle",
      description: "Action to execute when sheet settles on a snap point",
    }),
    topSnapPosition: createStaticNumberProp({
      label: "Top snap position",
      description:
        "Top most postion where bottom sheet can snap to. A numerical value that represents distance from the top",
      defaultValue: "10%",
      required: false,
      formType: FORM_TYPES.numeric,
    }),
    middleSnapPosition: createStaticNumberProp({
      label: "Middle snap position",
      description:
        "Middle postion where bottom sheet can snap to. A numerical value that represents distance from the top",
      defaultValue: "50%",
      required: false,
      formType: FORM_TYPES.numeric,
    }),
    bottomSnapPosition: createStaticNumberProp({
      label: "Bottom snap position",
      description:
        "Bottom most postion where bottom sheet can snap to. A numerical value that represents distance from the top",
      defaultValue: "80%",
      required: false,
      formType: FORM_TYPES.numeric,
    }),
    initialSnapPosition: createTextEnumProp({
      label: "Initial snap position",
      description: "Initial snap position that bottom sheet will snap to",
      options: ["top", "middle", "bottom"],
      defaultValue: "bottom",
    }),
    showHandle: createStaticBoolProp({
      label: "Show handle",
      description: "Whether to show the top sheet handle or not",
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
    snapPoints: createArrayProp({
      label: "Custom Snap points",
      description:
        "An array of numerical values (that represent distance from the top) where bottom sheet can snap to. Accepts numbers and percentages (minimum 2 snap points). Overrides snap position props",
      defaultValue: null,
    }),
    initialSnapIndex: createStaticNumberProp({
      label: "Initial snap index",
      description:
        "Index of the snap point to be used as the initial point. Overrides initial snap position",
      defaultValue: null,
      required: false,
      group: GROUPS.advanced,
    }),
  },
};
