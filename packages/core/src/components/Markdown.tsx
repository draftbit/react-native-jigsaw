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
      <Markdown styles={markdownStyle.collectiveMd}>{content}</Markdown>
    </>
  );
};

const markdownStyle = {
  singleLineMd: {
    text: {
      color: "blue",
      textAlign: "right",
    },
    view: {
      alignSelf: "stretch",
    },
  },
  collectiveMd: {
    heading1: {
      color: "red",
    },
    heading2: {
      color: "green",
      textAlign: "right",
    },
    strong: {
      color: "blue",
    },
    em: {
      color: "cyan",
    },
    text: {
      color: "black",
    },
    blockQuoteText: {
      color: "grey",
    },
    blockQuoteSection: {
      flexDirection: "row",
    },
    blockQuoteSectionBar: {
      width: 3,
      height: null,
      backgroundColor: "#DDDDDD",
      marginRight: 15,
    },
    codeBlock: {
      fontFamily: "Courier",
      fontWeight: "500",
      backgroundColor: "#DDDDDD",
    },
    tableHeader: {
      backgroundColor: "grey",
    },
  },
};

export default MarkdownComponent;
