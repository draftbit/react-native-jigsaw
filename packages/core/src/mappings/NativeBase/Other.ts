import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createTextProp,
  createIconProp,
  createBoolProp,
  createDisabledProp,
  createStaticNumberProp,
  createStaticBoolProp,
  Triggers,
  createActionProp,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "FAB",
    tag: "Fab",
    description:
      "A floating action button (FAB) is a circular icon button that hovers over content to execute a primary action in the application.",
    category: COMPONENT_TYPES.NBForms,
    packageName: "native-base",
    doc_link: "https://www.npmjs.com/package/@expo/html-elements",
    code_link:
      "https://github.com/expo/expo/tree/master/packages/html-elements",
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
    triggers: {},
    props: {
      placement: createTextEnumProp({
        label: "Placement",
        description: "The placement of the Fab relative to the device.",
        options: ["bottom-right", "top-right", "top-left", "bottom-left"],
        defaultValue: "bottom-right",
      }),
      label: createTextProp({
        label: "Label",
        description: "The Text to be displayed in Fab.",
      }),
      icon: createIconProp({
        label: "Icon",
        description: "Icon to be displayed in Fab.  ",
      }),
    },
  },
  {
    name: "Tooltip",
    tag: "Tooltip",
    description:
      "A tooltip provides a brief, informative message when a user interacts with an element. Methods of tooltip initiation include: through a mouse-hover gesture or a keyboard-hover gesture.",
    category: COMPONENT_TYPES.NBOther,
    packageName: "native-base",
    allowChildren: true,
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
    triggers: [Triggers.OnOpen, Triggers.OnClose],
    props: {
      label: createTextProp({
        label: "Label",
        description: "The Text to be displayed in Tooltip.",
      }),
      isOpen: createBoolProp({
        label: "Is Open",
        description: "Whether the tooltip is open or not.",
      }),
      isDisabled: createDisabledProp(),
      defaultIsOpen: createStaticBoolProp({
        label: "Default Is Open",
        description: "Whether the tooltip is open by default",
        defaultValue: false,
      }),
      onOpen: createActionProp(),
      onClose: createActionProp(),
      openDelay: createStaticNumberProp({
        label: "Open Delay",
        description: "Delay in ms before tooltip opens",
        defaultValue: 0,
      }),
      closeDelay: createStaticNumberProp({
        label: "Close Delay",
        description: "Delay in ms before tooltip closes",
        defaultValue: 0,
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
        defaultValue: "bottom",
      }),
      arrowSize: createStaticNumberProp({
        label: "Arrow Size",
        description: "The size of the arrow",
        defaultValue: 12,
      }),
      hasArrow: createStaticBoolProp({
        label: "Has Arrow",
        description: "Whether the tooltip has an arrow",
        defaultValue: false,
      }),
      offset: createStaticNumberProp({
        label: "Offset",
        description: "The distance between the triggere and the tooltip.",
      }),
    },
  },
];
