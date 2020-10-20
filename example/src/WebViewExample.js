import * as React from "react";
import { WebView } from "@draftbit/ui";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function WebViewExample() {
  return (
    <WebView
      style={{ width, height: height * 0.88 }}
      source={{ uri: "https://reactnative.dev" }}
    />
  );
}
