import * as React from "react";
// @ts-ignore
import Markdown from "react-native-markdown-package";

type Props = {
  content?: string;
};

const MarkdownComponent: React.FC<Props> = ({ content }) => {
  return (
    <>
      {
        // @ts-ignore
      }
      <Markdown styles={markdownStyle}>{content}</Markdown>
    </>
  );
};

const markdownStyle = {
  singleLineMd: {},
  collectiveMd: {},
};

export default MarkdownComponent;
