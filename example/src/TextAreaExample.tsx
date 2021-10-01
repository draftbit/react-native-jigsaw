import React from "react";
import Section, { Container } from "./Section";
import { TextArea } from "@draftbit/ui";

const TextAreaExample = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <Container style={{}}>
      <Section title="Text Area" style={{}}>
        <TextArea onChangeText={onChangeText} value={text} multiline={true} />
      </Section>
    </Container>
  );
};

export default TextAreaExample;
