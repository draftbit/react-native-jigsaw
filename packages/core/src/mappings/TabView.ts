import {
  COMPONENT_TYPES,
  createTextEnumProp,
  createColorProp,
  BLOCK_STYLES_SECTIONS,
  StylesPanelSections,
  Triggers,
  createActionProp,
  createStaticBoolProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Tab View",
  tag: "TabView",
  description: "Tab view container",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: [
    ...BLOCK_STYLES_SECTIONS,
    StylesPanelSections.Background,
  ],
  triggers: [Triggers.OnIndexChanged, Triggers.OnEndReached],
  props: {
    onIndexChanged: createActionProp({
      label: "On index changed",
      description: "Action to execute when swipe to new index",
    }),
    onEndReached: createActionProp({
      label: "On end reached",
      description: "Action to execute when end of swiping reached",
    }),
    tabBarPosition: createTextEnumProp({
      label: "Tab Bar Position",
      description: "Position of tab bar",
      options: ["top", "bottom"],
      defaultValue: "top",
    }),
    keyboardDismissMode: createTextEnumProp({
      label: "Keyboard Dismiss Mode",
      description: "Keyboard Dismiss Mode",
      options: ["auto", "on-drag", "none"],
      defaultValue: "auto",
    }),
    swipeEnabled: createStaticBoolProp({
      label: "Swipe Enabled",
      description: "Whether swiping is enabled or not",
      defaultValue: true,
    }),
    scrollEnabled: createStaticBoolProp({
      label: "Scroll Enabled",
      description: "Whether scrolling of tabs is enabled or not",
      defaultValue: true,
    }),
    activeColor: createColorProp({
      label: "Active Color",
      description: "Color of icon and text of active tab",
      defaultValue: "primary",
    }),
    inactiveColor: createColorProp({
      label: "Inactive Color",
      description: "Color of icon and text of inactive tab(s)",
      defaultValue: null,
    }),
    pressColor: createColorProp({
      label: "Press Color",
      description: "Color of ripple when pressed (android only)",
      defaultValue: "primary",
    }),
    indicatorColor: createColorProp({
      label: "Indicator Color",
      description: "Color of indicator",
      defaultValue: "primary",
    }),
    tabsBackgroundColor: createColorProp({
      label: "Tabs Background Color",
      description: "Background color of tabs container",
      defaultValue: "background",
    }),
  },
};
