import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
  createStaticBoolProp,
  createTextEnumProp,
  StylesPanelSections,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBPopover,
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
  triggers: {},
};

export const SEED_DATA = [
  {
    name: "Popover",
    tag: "Popover",
    description:
      "Popover floats around a trigger. It is a non-modal dialog used to provide contextual information to the user. It should be paired with a pressable trigger element.",
    ...SHARED_SEED_DATA,
    allowChildren: true,
    props: {
      isOpen: createBoolProp({
        label: "Is Open",
        description:
          "If true, the popover is open. Useful for controlling the open state.",
      }),
      defaultIsOpen: createStaticBoolProp({
        label: "Default Is Open",
        description: "If true, the popover will be opened by default.",
      }),
      trapFocus: createStaticBoolProp({
        label: "Trap Focus",
        description: "Whether popover should trap focus.",
      }),
      shouldFlip: createStaticBoolProp({
        label: "Should Flip",
        description:
          "Whether popover should flip when it reaches the edge of the screen.",
        defaultValue: true,
      }),
      shouldOverlapWithTrigger: createStaticBoolProp({
        label: "Should Overlap With Trigger",
        description: "Whether popover should overlap with trigger.",
        defaultValue: false,
      }),
      isKeyboardDismissable: createStaticBoolProp({
        label: "Is Keyboard Dismissable",
        description:
          "If true, the popover will close when the keyboard is dismissed.",
        defaultValue: true,
      }),
      placement: createTextEnumProp({
        label: "Placement",
        description: "The placement of the popover",
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
      useRNModal: createStaticBoolProp({
        label: "Use RN Modal",
        description: "If true, the popover will use the RN Modal component.",
      }),
      onOpen: createActionProp(),
      onClose: createActionProp(),
    },
  },
  {
    name: "Popover Arrow",
    tag: "Popover.Arrow",
    description: "The popover arrow.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Popover Body",
    tag: "Popover.Body",
    description: "The body of the popover.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Popover Content",
    tag: "Popover.Content",
    description: "The popover itself.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Popover Close Button",
    tag: "Popover.CloseButton",
    description: "The button that closes the popover.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Popover Header",
    tag: "Popover.Header",
    description: "The header of the popover.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Popover Trigger",
    tag: "Popover.Trigger",
    description: "Used to wrap the reference (or trigger) element.",
    ...SHARED_SEED_DATA,
    props: {},
  },
];
