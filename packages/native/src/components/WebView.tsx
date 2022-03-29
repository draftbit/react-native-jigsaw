import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  WebViewMessageEvent,
  WebViewSourceHtml,
  WebViewSourceUri,
} from "react-native-webview/lib/WebViewTypes";

// Auto-height fix (if this is not present, scrolling on Android does not work)
const injectFirst = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;

interface WebViewProps {
  source: WebViewSourceUri | WebViewSourceHtml;
  optimizeVideoChat?: boolean;
  style?: ViewStyle;
}

const NativeWebView: React.FC<WebViewProps> = ({
  source,
  style,
  optimizeVideoChat,
}) => {
  const [height, setHeight] = useState(0);
  const { width } = Dimensions.get("window");

  const videoChatProps = optimizeVideoChat
    ? {
        allowsInlineMediaPlayback: true,
        domStorageEnabled: true,
        javaScriptEnabled: true,
        mediaPlaybackRequiresUserAction: false,
        startInLoadingState: true,
      }
    : ({} as Record<string, boolean>);

  const onMessage = (event: WebViewMessageEvent) =>
    setHeight(Number(event.nativeEvent.data));

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, height: style?.height || height }}
    >
      <WebView
        source={source}
        style={[{ width: optimizeVideoChat ? width : undefined }, style]}
        injectedJavaScript={injectFirst}
        onMessage={onMessage}
        {...videoChatProps}
      />
    </ScrollView>
  );
};

const BrowserWebView: React.FC<WebViewProps> = ({
  source,
  style,
  optimizeVideoChat,
}) => {
  const videoChatProps = optimizeVideoChat
    ? {
        frameBorder: "0",
        allow: "camera; microphone; fullscreen; speaker; display-capture",
      }
    : {};

  const videoChatStyles = optimizeVideoChat
    ? { width: "100%", height: "100%" }
    : {};

  const flatStyles = StyleSheet.flatten([videoChatStyles, style]);
  return React.createElement("iframe", {
    style: flatStyles,
    height: flatStyles?.height,
    width: flatStyles?.width,
    src: (source as WebViewSourceUri)?.uri,
    srcDoc: (source as WebViewSourceHtml)?.html,
    allowFullScreen: true,
    seamless: true,
    ...videoChatProps,
  });
};

export default Platform.select({
  native: NativeWebView,
  default: BrowserWebView,
});
