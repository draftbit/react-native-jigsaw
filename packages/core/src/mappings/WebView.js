import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Embed a website into your app",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  category: COMPONENT_TYPES.media,
  layout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  props: {
    source: {
      group: GROUPS.data,
      label: "Website URL",
      description: "The URL for the website",
      editable: true,
      required: true,
      defaultValue: "https://draftbit.com",
      formType: FORM_TYPES.sourceUrl,
      propType: PROP_TYPES.OBJECT,
    },
  },
};
