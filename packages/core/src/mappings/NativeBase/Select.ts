import {
  COMPONENT_TYPES,
  createActionProp,
  StylesPanelSections,
  Triggers,
  createBoolProp,
  createColorProp,
  createDisabledProp,
  createTextProp,
  createIconProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBForms,
  packageName: "native-base",
  doc_link: "https://docs.nativebase.io/select",
  code_link:
    "https://github.com/GeekyAnts/NativeBase/tree/master/src/components/primitives/Select",
  stylesPanelSections: [
    StylesPanelSections.LayoutFlexItems,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.LayoutContent,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
  layout: {},
  allowChildren: true,
};

export const SEED_DATA = [
  {
    name: "Select",
    tag: "Select",
    description:
      "Select creates a dropdown list of items with the selected item in closed view.",
    ...SHARED_SEED_DATA,
    triggers: [Triggers.OnOpen, Triggers.OnClose],
    props: {
      onOpen: createActionProp(),
      onClose: createActionProp(),
      placeholder: createTextProp({
        label: "Placeholder",
        defaultValue: "Select an option",
      }),
      color: createColorProp(),
      placeholderTextColor: createColorProp(),
      isDisabled: createDisabledProp(),
      isHovered: createBoolProp({
        label: "Hovered?",
        description: "Whether the select is hovered",
      }),
      isFocused: createBoolProp({
        label: "Focused?",
        description: "Whether the select is hovered",
      }),
      isFocusVisible: createBoolProp({
        label: "Focus Visible?",
        description: "WIf true, the focus ring of select will be visible.",
      }),
      dropdownIcon: createIconProp(),
      dropdownOpenIcon: createIconProp(),
      dropdownCloseIcon: createIconProp(),
    },
  },
  {
    name: "Select Item",
    tag: "Select.Item",
    description: "An individual item in the menu.",
    ...SHARED_SEED_DATA,
    props: {
      label: createTextProp({
        label: "Label",
        description: "The label of the item",
      }),
      value: createTextProp({
        label: "Value",
        description: "The value of the item",
      }),
    },
  },
];
