import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
  createStaticBoolProp,
  createTextEnumProp,
  StylesPanelSections,
  Triggers,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBModal,
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
};

export const SEED_DATA = [
  {
    name: "Modal",
    tag: "Modal",
    description:
      "A Modal is an overlay on the primary window or another dialog window. Content behind the modal dialog remains inert and users cannot interact with it.",
    ...SHARED_SEED_DATA,
    layout: {},
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
    name: "Modal Content",
    tag: "Modal.Content",
    description: "The container for the modal dialog's content.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Modal Header",
    tag: "Modal.Header",
    description: "The header that labels the modal dialog.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Modal Footer",
    tag: "Modal.Footer",
    description: "The footer that houses the modal actions.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Modal Body",
    tag: "Modal.Body",
    description: "A wrapper that houses the modal's main content",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Modal Close Button",
    tag: "Modal.CloseButton",
    description: "The button that closes the modal.",
    ...SHARED_SEED_DATA,
    props: {},
  },
];
