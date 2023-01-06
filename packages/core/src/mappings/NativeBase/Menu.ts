import {
  COMPONENT_TYPES,
  createActionProp,
  createStaticBoolProp,
  createTextEnumProp,
  StylesPanelSections,
  Triggers,
  createStaticNumberProp,
  createDisabledProp,
  createTextProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBMenu,
  packageName: "native-base",
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
    name: "Menu",
    tag: "Menu",
    description:
      "Menu generates a dropdown menu along with the menu button design pattern.",
    ...SHARED_SEED_DATA,
    triggers: [Triggers.OnOpen, Triggers.OnClose],
    props: {
      onOpen: createActionProp(),
      onClose: createActionProp(),
      closeOnSelect: createStaticBoolProp({
        label: "Close on Select",
        description: "Close the menu when an item is selected",
        defaultValue: true,
      }),
      defaultIsOpen: createStaticBoolProp({
        label: "Default Is Open",
        description: "Whether the menu is open by default",
        defaultValue: false,
      }),
      placement: createTextEnumProp({
        label: "Placement",
        description: "The placement of the menu",
        options: [
          "bottom",
          "top",
          "left",
          "right",
          "top left",
          "top right",
          "bottom left",
          "bottom right",
          "right bottom",
          "right top",
          "left bottom",
          "left top",
        ],
        defaultValue: "bottom left",
      }),
      offset: createStaticNumberProp({
        label: "Offset",
        description:
          "The distance applied along the main axis between the trigger and the menu.",
      }),
      crossOffset: createStaticNumberProp({
        label: "Cross Offset",
        description:
          "The distance applied along the cross axis between the trigger and the menu.",
      }),
      shouldFlip: createStaticBoolProp({
        label: "Should Flip",
        description:
          "Whether popover should flip when it reaches the edge of the screen.",
        defaultValue: true,
      }),
    },
  },
  {
    name: "Menu Item",
    tag: "Menu.Item",
    description: "An individual item in the menu.",
    ...SHARED_SEED_DATA,
    props: {
      isDisabled: createDisabledProp(),
      textValue: createTextProp({
        label: "Text Value",
        description: "The text value available for the typeahead menu feature.",
      }),
    },
  },
  {
    name: "Menu Group",
    tag: "Menu.Group",
    description: "A wrapper to group related menu items.",
    ...SHARED_SEED_DATA,
    props: {
      title: createTextProp({
        label: "Title",
        description: "The title of the menu group.",
      }),
    },
  },
  {
    name: "Menu Option Group",
    tag: "Menu.OptionGroup",
    description: "A wrapper for checkable menu items (radio and checkbox).",
    ...SHARED_SEED_DATA,
    triggers: [Triggers.OnChange],
    props: {
      type: createTextEnumProp({
        label: "Type",
        description: "The type of the menu option group.",
        options: ["checkbox", "radio"],
        defaultValue: "checkbox",
      }),
      onChange: createActionProp(),
    },
  },
  {
    name: "Menu Item Option",
    tag: "Menu.ItemOption",
    description: "The checkable menu item to be used with Menu Option Group.",
    ...SHARED_SEED_DATA,
    props: {
      isDisabled: createDisabledProp(),
      textValue: createTextProp({
        label: "Text Value",
        description: "The text value available for the typeahead menu feature.",
      }),
    },
  },
  {
    name: "Menu Trigger",
    tag: "Menu.Trigger",
    description: "Used to wrap the reference (or trigger) element.",
    ...SHARED_SEED_DATA,
    props: {},
  },
];
