import * as React from "react";
import Markdown from "react-native-markdown-display";

import { withTheme } from "../theming";

import { COMPONENT_TYPES, createTextProp } from "@draftbit/types";

type Props = {
  content?: string;
};

const MarkdownComponent: React.FC<Props> = ({ content }) => {
  return <Markdown>{content}</Markdown>;
};

export default withTheme(MarkdownComponent);

export const SEED_DATA = {
  name: "Markdown",
  tag: "MarkdownComponent",
  description: "A markdown component",
  category: COMPONENT_TYPES.basic,
  props: {
    content: createTextProp({
      label: "Markdown Text",
      description: "Markdown Text",
      defaultValue: null,
    }),
  },
};
