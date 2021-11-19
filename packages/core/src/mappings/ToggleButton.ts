import {
  GROUPS,
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createColorProp,
  createStaticNumberProp,
  createFieldNameProp,
  createIconSizeProp,
  createActionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Toggle Button",
  tag: "ToggleButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    icon: createIconProp({
      required: true,
    }),
    iconSize: createIconSizeProp(),
    fieldName: createFieldNameProp({
      defaultValue: false,
      valuePropName: "toggled",
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the button should be disabled",
      group: GROUPS.basic,
    }),
    color: createColorProp({
      group: GROUPS.basic,
    }),
    colorSecondary: createColorProp({
      label: "Secondary Color",
      group: GROUPS.basic,
    }),
    borderColor: createColorProp({
      label: "Border Color",
      group: GROUPS.basic,
    }),
    width: createStaticNumberProp({
      label: "Width",
      description: "Width",
      defaultValue: 50,
    }),
    height: createStaticNumberProp({
      label: "Height",
      description: "Height",
      defaultValue: 50,
    }),
    toggled: createBoolProp({
      label: "Toggled",
      description: "Whether the button should show the toggled state",
      defaultValue: false,
    }),
  },
};
