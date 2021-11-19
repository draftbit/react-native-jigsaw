import * as React from "react";
import Markdown from "react-native-markdown-display";

import { withTheme } from "../theming";

type Props = {
  content?: string;
};

const MarkdownComponent: React.FC<Props> = ({ content }) => {
  return <Markdown>{content}</Markdown>;
};

export default withTheme(MarkdownComponent);
