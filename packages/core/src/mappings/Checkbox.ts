import {
  COMPONENT_TYPES,
  createBoolProp,
  createIconProp,
  createStaticNumberProp,
  createColorProp,
  createFieldNameProp,
  GROUPS,
  Triggers,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  triggers: [Triggers.OnPress, Triggers.OnCheck, Triggers.OnUncheck],
  props: {
    fieldName: createFieldNameProp({
      defaultValue: "checkboxValue",
      valuePropName: "status",
      handlerPropName: "onPress",
    }),
    color: createColorProp({
      group: GROUPS.basic,
      label: "Color",
      description: "Color for the button (used when the checkbox is checked)",
      defaultValue: null,
    }),
    uncheckedColor: createColorProp({
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
      defaultValue: null,
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the checkbox is disabled",
    }),
    size: createStaticNumberProp({
      label: "Size",
      description: "Specifies the size of the icon",
      defaultValue: null,
    }),
    checkedIcon: createIconProp({
      label: "Checked Icon",
      description: 'Icon to show when the checkbox status is "checked"',
      defaultValue: null,
    }),
    uncheckedIcon: createIconProp({
      label: "Unchecked Icon",
      description: 'Icon to show when the checkbox status is "unchecked"',
      defaultValue: null,
    }),
  },
};
