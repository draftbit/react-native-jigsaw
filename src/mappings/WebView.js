import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Embed a website into your app",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  category: COMPONENT_TYPES.media,
  supports_list_render: false,
  layout: {},
  props: {
    source: {
      label: "Website URL",
      description: "The URL for the website",
      editable: true,
      required: true,
      defaultValue: "https://www.draftbit.com",
      formType: FORM_TYPES.sourceUrl,
    },
  },
};
