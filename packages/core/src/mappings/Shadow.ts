import {
  COMPONENT_TYPES,
  createColorProp,
  createStaticNumberProp,
  createStaticBoolProp,
  createDisabledProp,
  GROUPS,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Shadow",
  tag: "Shadow",
  description: "A cross-platform, universal shadow.",
  category: COMPONENT_TYPES.view,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Position,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
  props: {
    disabled: createDisabledProp({
      description: "Disables the shadow.",
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
      defaultValue: true,
    }),
    stretch: createStaticBoolProp({
      label: "Stretch",
      description: "Force children to occupy all available horizontal space.",
      defaultValue: null,
    }),
    offsetX: createStaticNumberProp({
      label: "Offset X",
      description: "Moves the shadow in the x direction",
      defeaultValue: 0,
    }),
    offsetY: createStaticNumberProp({
      label: "Offset Y",
      description: "Moves the shadow in the y direction",
      defeaultValue: 0,
    }),
    showShadowSideStart: createStaticBoolProp({
      label: "Show Shadow Start",
      description: "Whether to show shadow on the start side or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowSideEnd: createStaticBoolProp({
      label: "Show Shadow End",
      description: "Whether to show shadow on the end side or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowSideTop: createStaticBoolProp({
      label: "Show Shadow Top",
      description: "Whether to show shadow on the top side or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowSideBottom: createStaticBoolProp({
      label: "Show Shadow Bottom",
      description: "Whether to show shadow on the bottom side or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowCornerTopStart: createStaticBoolProp({
      label: "Show Shadow Top Start Corner",
      description: "Whether to show shadow on the top start corner or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowCornerTopEnd: createStaticBoolProp({
      label: "Show Shadow Top End Corner",
      description: "Whether to show shadow on the top end corner or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowCornerBottomStart: createStaticBoolProp({
      label: "Show Shadow Bottom Start Corner",
      description: "Whether to show shadow on the bottom start corner or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
    showShadowCornerBottomEnd: createStaticBoolProp({
      label: "Show Shadow Bottom End Corner",
      description: "Whether to show shadow on the bottom end corner or not",
      defaultValue: true,
      group: GROUPS.advanced,
    }),
  },
};
