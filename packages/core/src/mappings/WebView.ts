import {
  COMPONENT_TYPES,
  createSourceProp,
  createStaticBoolProp,
  createTextProp,
  GROUPS,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Render web content inside a view",
  category: COMPONENT_TYPES.utility,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Borders,
  ],
  layout: { flex: 1 },
  props: {
    source: createSourceProp({
      defaultValue: "https://reactnative.dev",
    }),
    optimizeVideoChat: createStaticBoolProp({
      defaultValue: false,
      label: "Optimize Video Chat",
      description:
        "Allows for a better experience from web hosted video chat services",
    }),
    javaScriptEnabled: createStaticBoolProp({
      defaultValue: true,
      group: GROUPS.advanced,
      label: "Enable Javascript",
      description:
        "Boolean value to enable JavaScript in the WebView. The default value is true.",
    }),
    javaScriptCanOpenWindowsAutomatically: createStaticBoolProp({
      defaultValue: false,
      group: GROUPS.advanced,
      label: "Allow New Windows",
      description:
        "A Boolean value indicating whether JavaScript can open windows without user interaction. The default value is false.",
    }),
    showsHorizontalScrollIndicator: createStaticBoolProp({
      defaultValue: true,
      group: GROUPS.advanced,
      label: "Horizontal Scollbars",
      description:
        "Boolean value that determines whether a horizontal scroll indicator is shown in the WebView. The default value is true.",
    }),
    showsVerticalScrollIndicator: createStaticBoolProp({
      defaultValue: true,
      group: GROUPS.advanced,
      label: "Vertical Scollbars",
      description:
        "Boolean value that determines whether a vertical scroll indicator is shown in the WebView. The default value is true.",
    }),
    mediaPlaybackRequiresUserAction: createStaticBoolProp({
      label: "Media Playback Requires User Action",
      group: GROUPS.advanced,
      description:
        "Boolean that determines whether HTML5 audio and video requires the user to tap them before they start playing. The default value is true. (Android API minimum version 17).",
    }),
    startInLoadingState: createStaticBoolProp({
      label: "Start In Loading State",
      group: GROUPS.advanced,
      description:
        "Boolean value that forces the WebView to show the loading view on the first load. This prop must be set to true in order for the renderLoading prop to work.",
    }),
    allowFileAccessFromFileURLs: createStaticBoolProp({
      label: "Allow File Access From File URLs",
      group: GROUPS.advanced,
      description:
        "Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from other file scheme URLs. The default value is false.",
    }),
    allowUniversalAccessFromFileURLs: createStaticBoolProp({
      label: "Allow Universal Access From File URLs",
      group: GROUPS.advanced,
      description:
        "Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from any origin. Including accessing content from other file scheme URLs. The default value is false.",
    }),
    cacheEnabled: createStaticBoolProp({
      label: "Enable Cache",
      defaultValue: true,
      description: "Sets whether WebView should use browser caching.",
    }),
    incognito: createStaticBoolProp({
      label: "Use Incognito Mode",
      description:
        "Does not store any data within the lifetime of the WebView.",
    }),
    userAgent: createTextProp({
      group: GROUPS.advanced,
      defaultValue: null,
      label: "User Agent",
      description: "Sets the user-agent for the WebView.",
    }),
    applicationNameForUserAgent: createTextProp({
      group: GROUPS.advanced,
      defaultValue: null,
      label: "User Agent App Name",
      description:
        "Append to the existing user-agent. Setting userAgent will override this.",
    }),
  },
};
