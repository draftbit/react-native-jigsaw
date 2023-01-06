import {
  COMPONENT_TYPES,
  StylesPanelSections,
  Triggers,
  createBoolProp,
  createStaticBoolProp,
  createTextEnumProp,
  createActionProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBAlert,
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
};

export const SEED_DATA = [
  {
    name: "Alert Dialog",
    tag: "AlertDialog",
    description:
      "AlertDialog is used when a user needs to be interrupted with a mandatory confirmation or call-to-action. AlertDialog composes Modal so you can use all its props.",
    ...SHARED_SEED_DATA,
    triggers: [Triggers.OnClose, Triggers.OnOpen],
    props: {
      isOpen: createBoolProp({
        label: "Is Open",
        description:
          "If true, the modal will open. Useful for controllable state behavior.",
      }),
      defaultIsOpen: createStaticBoolProp({
        label: "Default Is Open",
        description: "If true, the modal will be opened by default.",
      }),
      avoidKeyboard: createStaticBoolProp({
        label: "Avoid Keyboard",
        description:
          "If true and the keyboard is opened, the modal will move up equivalent to the keyboard height.",
        defaultValue: false,
      }),
      closeOnOverlayClick: createStaticBoolProp({
        label: "Close on Overlay Click",
        description:
          "If true, the modal will close when the overlay is clicked.",
        defaultValue: true,
      }),
      isKeyboardDismissable: createStaticBoolProp({
        label: "Is Keyboard Dismissable",
        description:
          "If true, the modal will close when the keyboard is dismissed.",
        defaultValue: true,
      }),
      backdropVisible: createStaticBoolProp({
        label: "Backdrop Visible",
        description: "If true, the backdrop element is visible.",
        defaultValue: true,
      }),
      animationPreset: createTextEnumProp({
        label: "Animation Preset",
        description: "The animation preset to use for the modal.",
        options: ["slide", "fade", "none"],
        defaultValue: "fade",
      }),
      useRNModal: createStaticBoolProp({
        label: "Use RN Modal",
        description: "If true, the modal will use the RN Modal component.",
      }),
      onOpen: createActionProp(),
      onClose: createActionProp(),
    },
  },
  {
    name: "Alert Header",
    tag: "AlertDialog.Header",
    description: "Contains the title announced by screen readers.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Alert Body",
    tag: "AlertDialog.Body",
    description: "Contains the description announced by screen readers.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Alert Footer",
    tag: "AlertDialog.Body",
    description: "Contains the actions of the dialog.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Alert Content",
    tag: "AlertDialog.Content",
    description: "The wrapper for the alert dialog's content.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Alert Content",
    tag: "AlertDialog.CloseButton",
    description: "The button that closes the dialog",
    ...SHARED_SEED_DATA,
    props: {},
  },
];
