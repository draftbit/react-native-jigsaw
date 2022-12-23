import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createTextProp,
  createIconProp,
} from "@draftbit/types";

const NB_OTHER_PROPS = {
  category: COMPONENT_TYPES.NBForms,
  packageName: "native-base",
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
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
    name: "FAB",
    tag: "Fab",
    description:
      "A floating action button (FAB) is a circular icon button that hovers over content to execute a primary action in the application.",
    ...NB_OTHER_PROPS,
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
];
