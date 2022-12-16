import {
  COMPONENT_TYPES,
  createIconSizeProp,
  createColorProp,
  createFieldNameProp,
  createStaticNumberProp,
  Triggers,
  BLOCK_STYLES_SECTIONS,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Stepper",
    tag: "Stepper",
    description: "A component used to control the quantity of something",
    category: COMPONENT_TYPES.control,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      ...BLOCK_STYLES_SECTIONS,
    ],
    layout: {},
    triggers: [Triggers.OnChange],
    props: {
      fieldName: createFieldNameProp({
        defaultValue: "stepperValue",
        handlerPropName: "onChange",
        valuePropName: "value",
      }),
      iconSize: createIconSizeProp({ defaultValue: 24 }),
      iconColor: createColorProp({ defaultValue: "strong" }),
      min: createStaticNumberProp({
        label: "Minimum",
        description: "Minimum Number",
      }),
      max: createStaticNumberProp({
        label: "Maximum",
        description: "Maximum Number",
      }),
    },
  },
];
