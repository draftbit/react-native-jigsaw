import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createBoolProp,
  createIconProp,
} from "@draftbit/types";

const NB_FORMS_PROPS = {
  category: COMPONENT_TYPES.NBForms,
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
  allowChildren: true,
  layout: {},
  triggers: {},
};

export const SEED_DATA = [
  {
    name: "Button",
    tag: "Button",
    description:
      "The Button component triggers an event or an action. Examples can be submitting forms and deleting a data point.",
    ...NB_FORMS_PROPS,
    props: {
      isLoading: createBoolProp({
        label: "Loading",
        description: "If true, the button will show a spinner.",
      }),
      isDisabled: createBoolProp({
        label: "Disabled",
        description: "If true, the button will be disabled.",
      }),
      leftIcon: createIconProp({
        label: "Left Icon",
        description: "The icon to display on the left side of the button",
      }),
      rightIcon: createIconProp({
        label: "Right Icon",
        description: "The icon to display on the right side of the button",
      }),
      spinnerPlacement: createTextEnumProp({
        label: "Spinner Placement",
        description: "The placement of the spinner",
        options: ["start", "end"],
        defaultValue: "start",
      }),
    },
  },
  {
    name: "Button Group",
    tag: "ButtonGroup",
    description:
      "Used to group buttons whose actions are related, with an option to flush them together.",
    ...NB_FORMS_PROPS,
    allowChildren: true,
    props: {
      direction: createTextEnumProp({
        label: "Direction",
        description: "The direction of the button group",
        options: ["row", "column"],
        defaultValue: "row",
      }),
      isAttached: createBoolProp({
        label: "Attached",
        description: "If true, the buttons will be attached",
      }),
    },
  },
  {
    name: "Box",
    tag: "Box",
    description:
      "This is a generic component for low level layout needs. It is similar to a div in HTML",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Center",
    tag: "Center",
    description: "Centers its child",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Square",
    tag: "Square",
    description: "Centers its child inside a square",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Circle",
    tag: "Circle",
    description: "Centers its child inside a circle",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Column",
    tag: "Column",
    description: "Column aligns items vertically",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Container",
    tag: "Container",
    description:
      "The Container restricts a content's width according to current breakpoint, while keeping the size fluid.",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Flex",
    tag: "Flex",
    description: "A Box with Flexbox properties. ",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Spacer",
    tag: "Spacer",
    description:
      "An adjustable, empty space that can be used to tune the spacing between child elements within Flex",
    ...NB_LAYOUT_PROPS,
  },
  {
    name: "Row",
    tag: "Row",
    description: "Column aligns items horizontally",
    ...NB_LAYOUT_PROPS,
    props: {},
  },
  {
    name: "Stack",
    tag: "Stack",
    description:
      "Stack aligns items vertically or horizontally based on the direction prop.",
    ...NB_LAYOUT_PROPS,
    props: {
      direction: createTextEnumProp({
        label: "Direction",
        description: "The direction of the Stack",
        options: ["row", "column"],
        defaultValue: "column",
      }),
      reversed: createBoolProp({
        label: "Reversed",
        description: "Determines whether to reverse the direction of items.",
      }),
      isDisabled: createBoolProp({
        label: "Disabled",
        description: "If true, the Stack will be disabled.",
      }),
      isInvalid: createBoolProp({
        label: "Invalid",
        description: "If true, the Stack will be invalid.",
      }),
    },
  },
  {
    name: "ZStack",
    tag: "ZStack",
    description: "ZStack aligns items to the z-axis.",
    ...NB_LAYOUT_PROPS,
    props: {
      reversed: createBoolProp({
        label: "Reversed",
        description: "Determines whether to reverse the direction of items.",
      }),
    },
  },
];
