import { FORM_TYPES, PROP_TYPES, GROUPS } from "../core/component-types";

export const SEED_DATA_PROPS = {
  starSize: {
    label: "Star size",
    description: "Size of each individual star",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 16,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  maxStars: {
    label: "Max Stars",
    description: "The max number of stars",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 5,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  rating: {
    label: "Rating",
    description: "The number of stars that should be populated",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: null,
    editable: true,
    required: false,
    group: GROUPS.data,
  },
};
