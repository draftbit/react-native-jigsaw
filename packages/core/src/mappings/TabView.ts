import { COMPONENT_TYPES, createTextProp } from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "TabView",
    tag: "TabView",
    category: COMPONENT_TYPES.container,
    layout: {},
    props: {},
  },
  {
    name: "TabViewItem",
    tag: "TabViewItem",
    category: COMPONENT_TYPES.container,
    layout: {},
    props: {
      title: createTextProp({
        label: "Tab Title",
        description: "Tab Title",
      }),
      id: createTextProp({
        label: "Tab Id",
        description: "Tab Id",
      }),
    },
  },
];
