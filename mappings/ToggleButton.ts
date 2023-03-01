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
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Toggle Button",
  tag: "ToggleButton",
  category: COMPONENT_TYPES.deprecated,
  stylesPanelSections: [
    StylesPanelSections.Margins,
    StylesPanelSections.Effects,
    StylesPanelSections.Position,
  ],
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
  },
};
