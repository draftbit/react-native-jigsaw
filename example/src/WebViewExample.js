import React from "react";
import Section, { Container } from "./Section";
import { WebView } from "@draftbit/ui";
import { Dimensions, Platform, StyleSheet } from "react-native";

const WebViewExample = () => (
  <Container>
    <Section title="With URI">
      <WebView
        style={style.webView}
        source={{
          uri: "https://docs.expo.io/",
        }}
      />
    </Section>
    <Section title="With custom HTML">
      <WebView
        style={style.webView}
        source={{
          html: "<div> Hello! </div>",
        }}
      />
    </Section>
  </Container>
);

const style = StyleSheet.create({
  webView: Platform.select({
    // Browser WebView needs specific height
    web: {
      height: Dimensions.get("screen").height,
    },
  }),
});

export default WebViewExample;
