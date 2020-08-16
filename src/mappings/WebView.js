import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Embed a website into your app",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  category: COMPONENT_TYPES.media,
  layout: null,
  props: {
    source: {
      group: GROUPS.data,
      label: "Website URL",
      description: "The URL for the website",
      editable: true,
      required: true,
      defaultValue: "https://www.draftbit.com",
      formType: FORM_TYPES.sourceUrl,
      propType: PROP_TYPES.STRING,
    },
  },
};
