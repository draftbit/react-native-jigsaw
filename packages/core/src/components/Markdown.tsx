import * as React from "react";
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import MarkdownComponent from "react-native-markdown-display";
import { extractStyles } from "../utilities";

type MarkdownProps = {
  style?: StyleProp<ViewStyle & TextStyle>;
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

  const bodyStyle = StyleSheet.flatten(style);
  const { textStyles } = extractStyles(bodyStyle);

  return (
    //'body' style applies to all markdown components
    //@ts-ignore TS does not like the type of this named style for some reason
    <MarkdownComponent
      style={{ body: bodyStyle }}
      rules={{
        // By default, strong does not work with custom fonts on iOS. This addresses the issue
        strong: (node) => (
          <Text
            key={node.key}
            style={{
              ...textStyles,
              fontWeight: "bold",
            }}
          >
            {node.children[0].content}
          </Text>
        ),
      }}
    >
      {text}
    </MarkdownComponent>
  );
};

export default Markdown;
