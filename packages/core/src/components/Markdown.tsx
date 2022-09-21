import * as React from "react";
import Markdown from "react-native-markdown-display";

type Props = {
  content?: string;
};

const MarkdownComponent: React.FC<Props> = ({ content }) => {
  return <Markdown>{content}</Markdown>;
};

export default MarkdownComponent;
