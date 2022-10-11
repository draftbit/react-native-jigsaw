import {
  COMPONENT_TYPES,
  createStaticNumberProp,
  createFieldNameProp,
  createStaticBoolProp,
  Triggers,
  createColorProp,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  triggers: [Triggers.OnPress],
  props: {
    starSize: createStaticNumberProp({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1,
    }),
    fieldName: createFieldNameProp({
      defaultValue: "ratingValue", // this is the name of the variable declared on the screen in Draftbit
      handlerPropName: "onPress", // the change handler prop in this component
      valuePropName: "rating", // the value prop in this component
    }),
    maxStars: createStaticNumberProp({
      label: "Max stars",
      description: "The max number of stars",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
    }),
    isEditable: createStaticBoolProp({
      label: "Editable",
    }),
    activeColor: createColorProp({
      label: "Active Color",
      defaultValue: "primary",
    }),
    inactiveColor: createColorProp({
      label: "Inactive Color",
      defaultValue: "divider",
    }),
  },
};
