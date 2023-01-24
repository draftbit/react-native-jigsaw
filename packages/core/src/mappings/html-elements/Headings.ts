import {
  COMPONENT_TYPES,
  GROUPS,
  StylesPanelSections,
  Triggers,
  createActionProp,
  createStaticBoolProp,
  createTextEnumProp,
  createColorProp,
} from "@draftbit/types";

const ANDROID_PROPS = {
  dataDetectorType: createTextEnumProp({
    label: "Data Detector Type",
    description:
      "Determines the types of data converted to clickable URLs in the text element. By default, no data types are detected.",
    group: GROUPS.android,
    options: ["phoneNumber", "link", "email", "none", "all"],
    defaultValue: null,
  }),
  selectionColor: createColorProp({
    label: "Selection Color",
    description: "The highlight color of the text",
    defaultValue: null,
    group: GROUPS.android,
  }),
  textBreakStrategy: createTextEnumProp({
    label: "Text Break Strategy",
    description:
      "Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced.",
    group: GROUPS.android,
    options: ["simple", "highQuality", "balanced"],
    defaultValue: null,
  }),
};

const SEED_DEFAULTS = {
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
  packageName: "@expo/html-elements",
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.Background,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
  ],
  layout: {},
  category: COMPONENT_TYPES.text,
  triggers: [Triggers.OnPress, Triggers.OnLongPress],
  props: {
    onPress: createActionProp(),
    onLongPress: createActionProp(),
    selectable: createStaticBoolProp({
      label: "Selectable",
      description:
        "Lets the user select text, to use the native copy and paste functionality.",
      defaultValue: null,
    }),
    ...ANDROID_PROPS,
  },
};

export const SEED_DATA = [
  {
    name: "H1",
    tag: "H1",
    ...SEED_DEFAULTS,
  },
  {
    name: "H2",
    tag: "H2",
    ...SEED_DEFAULTS,
  },
  {
    name: "H3",
    tag: "H3",
    ...SEED_DEFAULTS,
  },
  {
    name: "H4",
    tag: "H4",
    ...SEED_DEFAULTS,
  },
  {
    name: "H5",
    tag: "H5",
    ...SEED_DEFAULTS,
  },
  {
    name: "H6",
    tag: "H6",
    ...SEED_DEFAULTS,
  },
];
