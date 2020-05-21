import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "Query",
  tag: "Query",
  description: "GraphQL-connected Query component",
  category: COMPONENT_TYPES.data,
  supports_list_render: false,
  layout: {},
  props: {
    query: {
      label: "Query",
      editable: true,
      required: true,
      type: FORM_TYPES.query,
      description:
        "A GraphQL-enabled query that lets you fetch data from your database",
      value: "",
    },
    loading: {
      label: "Loading Component",
      editable: true,
      required: false,
      type: FORM_TYPES.component,
      description: "Loading component to render until data shows up",
      value: null,
    },
    error: {
      label: "Error Component",
      editable: true,
      required: false,
      type: FORM_TYPES.component,
      description: "Error component to render until data shows up",
      value: null,
    },
  },
};
