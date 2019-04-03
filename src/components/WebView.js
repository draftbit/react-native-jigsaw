import { WebView } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default WebView;

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Given a URL, displays a website in a view",
  doc_link: "https://docs.expo.io/versions/latest/sdk/webview/",
  code_link:
    "https://github.com/expo/expo/blob/master/ios/versioned-react-native/ABI32_0_0/Libraries/Components/WebView/WebViewShared.js",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: "100%",
    height: "100%"
  },
  props: {
    source: {
      label: "Website url",
      description:
        "The Website URL the Web View should load (https://www.draftbit.com)",
      editable: true,
      required: true,
      value: "https://www.draftbit.com",
      type: FORM_TYPES.sourceUrl
    },
    mediaPlaybackRequiresUserAction: {
      label: "User Controls Media Playback",
      description:
        "Determines whether HTML5 audio / video requires the user to tap them before they start playing. (Default: true)",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    allowsInlineMediaPlayback: {
      label: "Inline Video Playback",
      description:
        "Determines whether HTML5 videos play inline or use the native, full-screen mode. (Default: false)",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    scalesPageToFit: {
      label: "Scale Page To Fit",
      description:
        "Controls whether the website is scaled to fit inside the view and allows the user to change the scale. (Default: true)",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    bounces: {
      label: "Scroll Bounce",
      description:
        "Determines whether the web view bounces when it reaches the bottom / top of the page. (Default: true)",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    scrollEnabled: {
      label: "Scrollable",
      description:
        "Whether scrolling is enabled inside the website. (Default: true)",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    contentInset: {
      label: "Content Inset",
      description:
        "The amount the web view content is inset from the edges of the scrollview (Default: top: 0, left: 0, right: 0, bottom: 0)",
      editable: true,
      required: false,
      value: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      type: FORM_TYPES.position
    },
    dataDetectorTypes: {
      label: "Clickable Data Types",
      description:
        "Determines the type of data thats converted into clickable URLs inside the web view. (Default is phone numbers only)",
      editable: true,
      required: false,
      value: ["phoneNumber"],
      options: [
        "phoneNumber",
        "link",
        "address",
        "calendarEvent",
        "none",
        "all"
      ],
      type: FORM_TYPES.multiselect
    }
  }
};
