import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { WebView as NativeWV } from "react-native-webview";
import {
  WebViewSourceUri,
  WebViewSourceHtml,
  WebViewMessageEvent,
} from "react-native-webview/lib/WebViewTypes";

interface Props {
  source: WebViewSourceUri | WebViewSourceHtml;
  onMessage?: (event: WebViewMessageEvent) => void;
  scrollEnabled?: boolean;
  injectedJavaScript?: string;
  style?: StyleProp<ViewStyle>;
}
const WebView: React.FC<Props> = (props) => {
  return <NativeWV {...props} />;
};

export default WebView;
