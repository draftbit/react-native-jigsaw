import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export const SEED_DATA = {
  name: "Fetch",
  tag: "Fetch",
  description:
    "Rest API Declarative Fetch component. Uses react-request internally",
  category: COMPONENT_TYPES.data,
  supports_list_render: false,
  layout: {},
  props: {
    url: {
      label: "URL",
      description:
        "The URL you want to fetch data from. You may have to add draftbit.com to your CORS setting",
      required: true,
      editable: true,
      type: FORM_TYPES.url,
    },
    method: {
      label: "HTTP Method",
      description: "The HTTP method required to complete the request",
      required: true,
      editable: true,
      value: "GET",
      type: FORM_TYPES.flatArray,
      options: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
    headers: {
      label: "HTTP Headers",
      description:
        "Any specific headers you have to add to complete the request.",
      required: false,
      editable: true,
      type: FORM_TYPES.json,
      value: JSON.stringify(
        {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
        null,
        2
      ),
    },
    body: {
      label: "HTTP Body",
      description:
        "Any specific JSON body you have to add to complete the request.",
      required: false,
      editable: true,
      type: FORM_TYPES.json,
      value: null,
    },
    mode: {
      label: "HTTP Mode",
      description: "The mode you want to use for the request",
      required: true,
      editable: true,
      value: "same-origin",
      type: FORM_TYPES.flatArray,
      options: ["cors", "no-cors", "same-origin"],
    },
    credentials: {
      label: "HTTP Credentials",
      description: "The credentials you want to use for the request",
      required: true,
      editable: true,
      value: "same-origin",
      type: FORM_TYPES.flatArray,
      options: ["omit", "same-origin", "include"],
    },
    lazy: {
      label: "Lazy Request",
      description:
        "Set this to true if you don't want to make the request initially",
      required: false,
      editable: true,
      value: false,
      type: FORM_TYPES.boolean,
    },
    fetchPolicy: {
      label: "Fetch Policy",
      description: "Determines how the request interacts with the cache",
      editable: true,
      required: false,
      type: FORM_TYPES.flatArray,
      options: [
        "cache-first",
        "cache-and-network",
        "network-only",
        "cache-only",
      ],
      value: "cache-first",
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
