import * as React from "react";
// @ts-ignore
import Markdown from "react-native-markdown-display";

type Props = {
  content?: string;
};

const MarkdownComponent: React.FC<Props> = ({ content }) => {
  return (
    <>
      {
        // @ts-ignore
      }
      <Markdown>{content}</Markdown>
    </>
  );
};

export default MarkdownComponent;
