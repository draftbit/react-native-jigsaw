import {
  COMPONENT_TYPES,
  createTextProp,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  StylesPanelSections,
} from "@draftbit/types";

const ELEMENT_SEED_DATA = {
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
  packageName: "@expo/html-elements",
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Effects,
  ],
  layout: {
    margin: 0,
  },
  category: COMPONENT_TYPES.webelement,
};

const HEADING_SEED_DATA = {
  ...ELEMENT_SEED_DATA,
  category: COMPONENT_TYPES.text,
  props: {
    accessibilityLabel: {
      group: GROUPS.accessibility,
      name: "accessibilityLabel",
      label: "accessibilityLabel",
      description:
        "Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    selectable: {
      group: GROUPS.advanced,
      name: "selectable",
      label: "selectable",
      description:
        "Lets the user select text, to use the native copy and paste functionality.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    children: {
      group: GROUPS.data,
      label: "Text",
      description: "Text",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "Your Headline Here",
    },
  },
};

const TEXT_SEED_DATA = {
  ...ELEMENT_SEED_DATA,
  category: COMPONENT_TYPES.text,
  props: {
    children: {
      group: GROUPS.data,
      label: "Text",
      description: "Text",
      defaultValue: "Your Text Here",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
    },
  },
};

export const SEED_DATA = [
  {
    name: "H1",
    tag: "H1",
    ...HEADING_SEED_DATA,
  },
  {
    name: "H2",
    tag: "H2",
    ...HEADING_SEED_DATA,
  },
  {
    name: "H3",
    tag: "H3",
    ...HEADING_SEED_DATA,
  },
  {
    name: "H4",
    tag: "H4",
    ...HEADING_SEED_DATA,
  },
  {
    name: "H5",
    tag: "H5",
    ...HEADING_SEED_DATA,
  },
  {
    name: "H6",
    tag: "H6",
    ...HEADING_SEED_DATA,
  },
  {
    name: "Anchor",
    tag: "A",
    ...TEXT_SEED_DATA,
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
    ...TEXT_SEED_DATA,
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
    ...TEXT_SEED_DATA,
  },
  {
    name: "Pre",
    tag: "Pre",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Mark",
    tag: "Mark",
    ...TEXT_SEED_DATA,
  },
  {
    name: "BR",
    tag: "BR",
    ...TEXT_SEED_DATA,
  },
  {
    name: "BlockQuote",
    tag: "BlockQuote",
    ...TEXT_SEED_DATA,
  },
  {
    name: "HR",
    tag: "HR",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Time",
    tag: "Time",
    ...ELEMENT_SEED_DATA,
  },
  {
    name: "UL",
    tag: "UL",
    ...ELEMENT_SEED_DATA,
  },
  {
    name: "LI",
    tag: "LI",
    ...ELEMENT_SEED_DATA,
  },
];
