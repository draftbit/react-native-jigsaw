import {
  COMPONENT_TYPES,
  createTextProp,
  createIconProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Tab View Item",
  tag: "TabViewItem",
  description:
    "Single Tab View item to be used in TabView. Each item represents a single tab and its content",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    flex: 1,
  },
  props: {
    title: createTextProp({
      label: "Title",
      description: "Title of tab item",
      defaultValue: "Title",
      required: true,
      group: GROUPS.basic,
    }),
    icon: createIconProp({
      defaultValue: null,
      required: false,
    }),
    accessibilityLabel: createTextProp({
      label: "Accessibility Label",
      description: "Accessibility Label",
      defaultValue: null,
      group: GROUPS.accessibility,
    }),
  },
};
