import {
  COMPONENT_TYPES,
  createTextProp,
  createTextEnumProp,
  createBoolProp,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "TabView",
    tag: "TabView",
    category: COMPONENT_TYPES.container,
    layout: {},
    props: {
      tabBarPosition: createTextEnumProp({
        label: "Tab Bar Position",
        description: "Tab Bar Position",
        options: ["top", "bottom"],
        defaultValue: "top",
      }),
      keyboardDismissMode: createTextEnumProp({
        label: "Keyboard Dismiss Mode",
        description: "Keyboard Dismiss Mode",
        options: ["auto", "on-drag", "none"],
        defaultValue: "auto",
      }),
      swipeEnabled: createBoolProp({
        label: "Swipe Enabled",
        description: "Swipe Enabled",
        defaultValue: true,
      }),
      scrollEnabled: createBoolProp({
        label: "Scroll Enabled",
        description: "Scroll Enabled",
        defaultValue: true,
      }),
      activeColor: createColorProp({
        label: "Active Color",
        description: "Active Color",
        defaultValue: "primary",
      }),
      inactiveColor: createColorProp({
        label: "Inactive Color",
        description: "Inactive Color",
        defaultValue: null,
      }),
      pressColor: createColorProp({
        label: "Press Color",
        description: "Press Color",
        defaultValue: null,
      }),
      indicatorColor: createColorProp({
        label: "Indicator Color",
        description: "Indicator Color",
        defaultValue: null,
      }),
    },
  },
  {
    name: "TabViewItem",
    tag: "TabViewItem",
    category: COMPONENT_TYPES.container,
    layout: {},
    props: {
      title: createTextProp({
        label: "Title",
        description: "Tab Title",
      }),
      id: createTextProp({
        label: "Id",
        description: "Tab Id",
      }),
      accessibilityLabel: createTextProp({
        label: "Accessibility Label",
        description: "Accessibility Label",
      }),
    },
  },
];
