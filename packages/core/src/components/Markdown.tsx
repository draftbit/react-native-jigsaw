import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import MarkdownComponent from "react-native-markdown-display";

type MarkdownProps = {
  style?: StyleProp<ViewStyle>;
};

const Markdown: React.FC<React.PropsWithChildren<MarkdownProps>> = ({
  children,
  style,
}) => {
  return (
    //'body' style used for main parent container
    //@ts-ignore TS does not like the type of this named style for some reason
    <MarkdownComponent style={{ body: StyleSheet.flatten(style) }}>
      {children}
    </MarkdownComponent>
  );
};

export default Markdown;
