import {
  COMPONENT_TYPES,
  GROUPS,
  createNumberProp,
  createColorProp,
  createFieldNameProp,
  createIconProp,
  Triggers,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  layout: {
    marginLeft: 12,
    marginRight: 12,
  },
  triggers: [Triggers.OnValueChange],
  props: {
    fieldName: createFieldNameProp({
      defaultValue: "sliderValue",
      handlerPropName: "onValueChange",
      valuePropName: "value",
    }),
    minimumValue: createNumberProp({
      group: GROUPS.basic,
      label: "Min Value",
      min: 0,
      max: 1000,
    }),
    maximumValue: createNumberProp({
      group: GROUPS.basic,
      label: "Max Value",
      min: 1,
      max: 10000,
    }),
    step: createNumberProp({
      group: GROUPS.basic,
      label: "Step",
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
    }),
    leftIcon: createIconProp({
      label: "Left Icon",
      defaultValue: null,
    }),
    rightIcon: createIconProp({
      label: "Right Icon",
      defaultValue: null,
    }),
    minimumTrackTintColor: createColorProp({
      label: "Min Track Color",
      defaultValue: null,
    }),
    maximumTrackTintColor: createColorProp({
      label: "Max Track Color",
      defaultValue: null,
    }),
    thumbTintColor: createColorProp({
      label: "Thumb Color",
      defaultValue: null,
    }),
  },
};
