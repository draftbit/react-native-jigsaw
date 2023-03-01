import {
  COMPONENT_TYPES,
  GROUPS,
  createBoolProp,
  createColorProp,
  createFieldNameProp,
  createTextProp,
  createRowDirectionProp,
  Triggers,
  StylesPanelSections,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";
const SEED_DATA_TRIGGERS = [Triggers.OnValueChange];
export const SEED_DATA = [
  {
    name: "Switch",
    tag: "Switch",
    category: COMPONENT_TYPES.control,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    layout: {},
    triggers: SEED_DATA_TRIGGERS,
    props: {
      disabled: createBoolProp({
        label: "Disabled",
        description: "Boolean to handle disabling the switch",
      }),
      fieldName: createFieldNameProp({
        handlerPropName: "onValueChange",
        valuePropName: "value",
        defaultValue: "switchValue",
      }),
      activeTrackColor: createColorProp({
        label: "Active Track Color",
      }),
      inactiveTrackColor: createColorProp({
        label: "Inactive Track Color",
      }),
      activeThumbColor: createColorProp({
        label: "Active Thumb Color",
      }),
      inactiveThumbColor: createColorProp({
        label: "Inactive Thumb Color",
      }),
    },
  },
  {
    name: "Switch Row",
    tag: "SwitchRow",
    category: COMPONENT_TYPES.control,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Margins,
      StylesPanelSections.Effects,
    ],
    layout: {
      marginLeft: 0,
      marginRight: 0,
    },
    triggers: SEED_DATA_TRIGGERS,
    props: {
      label: createTextProp({
        label: "Label",
        description: "Label to show with the checkbox",
        required: true,
        defaultValue: "First Option",
      }),
      direction: createRowDirectionProp(),
      disabled: createBoolProp({
        label: "Disabled",
        description: "Boolean to handle disabling the switch",
        group: GROUPS.data,
      }),
      fieldName: createFieldNameProp({
        handlerPropName: "onValueChange",
        valuePropName: "value",
        defaultValue: "switchValue",
      }),
      activeTrackColor: createColorProp({
        label: "Active Track Color",
      }),
      inactiveTrackColor: createColorProp({
        label: "Inactive Track Color",
      }),
      activeThumbColor: createColorProp({
        label: "Active Thumb Color",
      }),
      inactiveThumbColor: createColorProp({
        label: "Inactive Thumb Color",
      }),
    },
  },
];
