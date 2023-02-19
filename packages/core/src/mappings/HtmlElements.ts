import {
  COMPONENT_TYPES,
  createTextProp,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  StylesPanelSections,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

const ELEMENT_SEED_DATA = {
  doc_link: "https://www.npmjs.com/package/@expo/html-elements",
  code_link: "https://github.com/expo/expo/tree/master/packages/html-elements",
  packageName: "@expo/html-elements",
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  category: COMPONENT_TYPES.webelement,
};

const TEXT_SEED_DATA = {
  ...ELEMENT_SEED_DATA,
  category: COMPONENT_TYPES.text,
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Effects,
  ],
  layout: {
    color: "strong",
  },
  props: {
    children: {
      group: GROUPS.data,
      label: "Text",
      description: "Text",
      defaultValue: "Double click me to edit 👀",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
    },
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
      defaultValue: true,
    },
  },
};

export const SEED_DATA = [
  {
    name: "Heading 1",
    tag: "H1",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Heading 2",
    tag: "H2",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Heading 3",
    tag: "H3",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Heading 4",
    tag: "H4",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Heading 5",
    tag: "H5",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Heading 6",
    tag: "H6",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Paragraph",
    tag: "P",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Bold",
    tag: "B",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Strikethrough",
    tag: "S",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Italic",
    tag: "I",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Code",
    tag: "Code",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Preformatted",
    tag: "Pre",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Mark",
    tag: "Mark",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Block Quote",
    tag: "BlockQuote",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Quoted",
    tag: "Q",
    ...TEXT_SEED_DATA,
  },

  {
    name: "Time",
    tag: "Time",
    ...TEXT_SEED_DATA,
  },
  {
    name: "Unordered List",
    tag: "UL",
    ...ELEMENT_SEED_DATA,
  },
  {
    name: "List Item",
    tag: "LI",
    ...TEXT_SEED_DATA,
    category: COMPONENT_TYPES.webelement,
  },
  {
    name: "Line Break",
    tag: "BR",
    ...ELEMENT_SEED_DATA,
  },
  {
    name: "Horizontal Rule",
    tag: "HR",
    ...ELEMENT_SEED_DATA,
  },
  {
    name: "Anchor",
    tag: "A",
    ...TEXT_SEED_DATA,
    props: {
      ...TEXT_SEED_DATA.props,
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
    category: COMPONENT_TYPES.webelement,
  },
];
