import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export const SEED_DATA = {
  name: "Fetch",
  tag: "Fetch",
  description:
    "Rest API Declarative Fetch component. Uses react-request internally",
  category: COMPONENT_TYPES.data,
  props: {
    url: {
      label: "URL",
      description:
        "The URL you want to fetch data from. You may have to add draftbit.com to your CORS setting",
      required: true,
      editable: true,
      formType: FORM_TYPES.url,
    },
    method: {
      label: "HTTP Method",
      description: "The HTTP method required to complete the request",
      required: true,
      editable: true,
      defaultValue: "GET",
      formType: FORM_TYPES.flatArray,
      options: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
    headers: {
      label: "HTTP Headers",
      description:
        "Any specific headers you have to add to complete the request.",
      required: false,
      editable: true,
      formType: FORM_TYPES.json,
      defaultValue: JSON.stringify(
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
      formType: FORM_TYPES.json,
      defaultValue: null,
    },
    mode: {
      label: "HTTP Mode",
      description: "The mode you want to use for the request",
      required: true,
      editable: true,
      defaultValue: null,
      formType: FORM_TYPES.flatArray,
      options: ["cors", "no-cors", "same-origin"],
    },
    credentials: {
      label: "HTTP Credentials",
      description: "The credentials you want to use for the request",
      required: true,
      editable: true,
      defaultValue: null,
      formType: FORM_TYPES.flatArray,
      options: ["omit", "same-origin", "include"],
    },
    lazy: {
      label: "Lazy Request",
      description:
        "Set this to true if you don't want to make the request initially",
      required: false,
      editable: true,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
    },
    fetchPolicy: {
      label: "Fetch Policy",
      description: "Determines how the request interacts with the cache",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      options: [
        "cache-first",
        "cache-and-network",
        "network-only",
        "cache-only",
      ],
      defaultValue: null,
    },
    loading: {
      label: "Loading Component",
      editable: true,
      required: false,
      formType: FORM_TYPES.component,
      description: "Loading component to render until data shows up",
      defaultValue: null,
    },
    error: {
      label: "Error Component",
      editable: true,
      required: false,
      formType: FORM_TYPES.component,
      description: "Error component to render until data shows up",
      defaultValue: null,
    },
  },
};
