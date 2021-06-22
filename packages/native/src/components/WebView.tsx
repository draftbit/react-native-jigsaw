import * as React from "react";
import { Platform, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { WebView } from "react-native-webview";
import {
  WebViewMessageEvent,
  WebViewSourceHtml,
  WebViewSourceUri,
} from "react-native-webview/lib/WebViewTypes";

import { COMPONENT_TYPES, createSourceProp } from "@draftbit/types";

// Auto-height fix (if this is not present, scrolling on Android does not work)
const injectFirst = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;

interface Props {
  source: WebViewSourceUri | WebViewSourceHtml;
  style?: ViewStyle;
}

const NativeWebView: React.FC<Props> = ({ source, style }) => {
  const [height, setHeight] = React.useState(0);
  const onMessage = (event: WebViewMessageEvent) =>
    setHeight(Number(event.nativeEvent.data));
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, height: style?.height || height }}
    >
      <WebView
        source={source}
        style={style}
        injectedJavaScript={injectFirst}
        onMessage={onMessage}
      />
    </ScrollView>
  );
};

const BrowserWebView: React.FC<Props> = ({ source, style }) => {
  const flatStyles = StyleSheet.flatten(style);
  return React.createElement("iframe", {
    style: flatStyles,
    height: flatStyles?.height,
    width: flatStyles?.width,
    src: (source as WebViewSourceUri)?.uri,
    srcDoc: (source as WebViewSourceHtml)?.html,
    allowFullScreen: true,
    seamless: true,
  });
};

export default Platform.select({
  native: NativeWebView,
  default: BrowserWebView,
});

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Render web content inside a view",
  category: COMPONENT_TYPES.media,
  layout: { flex: 1 },
  props: {
    source: createSourceProp({
      defaultValue: "https://reactnative.dev",
    }),
  },
};
