/* Temporarily Commented Out


import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createTextEnumProp,
  createBoolProp,
  createIconProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
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
  layout: {},
  triggers: {},
};

export const SEED_DATA = [
  {
    name: "Button",
    tag: "Button",
    description:
      "The Button component triggers an event or an action. Examples can be submitting forms and deleting a data point.",
    ...SHARED_SEED_DATA,
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
    ...SHARED_SEED_DATA,
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
];
 */
