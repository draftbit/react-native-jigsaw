import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import MarkdownComponent from "react-native-markdown-display";

type MarkdownProps = {
  style?: StyleProp<ViewStyle>;
};

const childToString = (child?: React.ReactNode): string => {
  if (
    typeof child === "undefined" ||
    child === null ||
    typeof child === "boolean"
  ) {
    return "";
  }

  if (JSON.stringify(child) === "{}") {
    return "";
  }

  return (child as number | string).toString();
};

const Markdown: React.FC<React.PropsWithChildren<MarkdownProps>> = ({
  children: childrenProp,
  style,
}) => {
  const children = React.Children.toArray(childrenProp);
  const text = children.map(childToString).join("");

  return (
    //'body' style applies to all markdown components
    //@ts-ignore TS does not like the type of this named style for some reason
    <MarkdownComponent style={{ body: StyleSheet.flatten(style) }}>
      {text}
    </MarkdownComponent>
  );
};

export default Markdown;
