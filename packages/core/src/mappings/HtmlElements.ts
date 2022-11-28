import {
  COMPONENT_TYPES,
  createTextProp,
  FORM_TYPES,
  GROUPS,
  StylesPanelSections,
  Triggers,
} from "@draftbit/types";
const SEED_DATA_TRIGGERS = [Triggers.OnValueChange];

const ELEMENT_PROPS = {
  category: COMPONENT_TYPES.element,
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Effects,
  ],
  layout: {
    margin: 0,
  },
  triggers: SEED_DATA_TRIGGERS,
};

const HEADING_PROPS = {
  ...ELEMENT_PROPS,
};

export const SEED_DATA = [
  {
    name: "H1",
    tag: "H1",
    ...HEADING_PROPS,
  },
  {
    name: "H2",
    tag: "H2",
    ...HEADING_PROPS,
  },
  {
    name: "H3",
    tag: "H3",
    ...HEADING_PROPS,
  },
  {
    name: "H4",
    tag: "H4",
    ...HEADING_PROPS,
  },
  {
    name: "H5",
    tag: "H5",
    ...HEADING_PROPS,
  },
  {
    name: "H6",
    tag: "H6",
    ...HEADING_PROPS,
  },
  {
    name: "Anchor",
    tag: "A",
    ...ELEMENT_PROPS,
    props: {
      href: createTextProp({
        label: "href",
        description: "Specify the URL",
        defaultValue: "",
      }),
      target: {
        group: GROUPS.basic,
        label: "target",
        description: "decide where link should open",
        formType: FORM_TYPES.flatArray,
        defaultValue: "_blank",
        options: ["_blank", "_self", "_parent", "_top"],
      },
    },
  },
  {
    name: "Paragraph",
    tag: "P",
    ...ELEMENT_PROPS,
    props: {
      // NOTE - Keeping the props commented until we figure out a way to use this props from draftbit side.
      // strong: createBoolProp({
      //     label: "Strong",
      //     description: "Strong",
      // }),
      // strike: createBoolProp({
      //     label: "Strike",
      //     description: "Strike through",
      // }),
      // italic: createBoolProp({
      //     label: "Italic",
      //     description: "Italic Fonts",
      // }),
      // bold: createBoolProp({
      //     label: "Bold",
      //     description: "Bold",
      // }),
    },
  },
  {
    name: "Code",
    tag: "Code",
    ...ELEMENT_PROPS,
  },
  {
    name: "Pre",
    tag: "Pre",
    ...ELEMENT_PROPS,
  },
  {
    name: "Mark",
    tag: "Mark",
    ...ELEMENT_PROPS,
  },
  {
    name: "BR",
    tag: "BR",
    ...ELEMENT_PROPS,
  },
  {
    name: "BlockQuote",
    tag: "BlockQuote",
    ...ELEMENT_PROPS,
  },
  {
    name: "Time",
    tag: "Time",
    ...ELEMENT_PROPS,
  },
  {
    name: "UL",
    tag: "UL",
    ...ELEMENT_PROPS,
  },
  {
    name: "LI",
    tag: "LI",
    ...ELEMENT_PROPS,
  },
  {
    name: "HR",
    tag: "HR",
    ...ELEMENT_PROPS,
  },
];
