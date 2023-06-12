import React from "react";
import Section, { Container } from "./Section";
import { CodeInput } from "@draftbit/ui";

const CodeInputExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="CodeInput (default cell)" style={{}}>
        <CodeInput />
      </Section>
    </Container>
  );
};

export default CodeInputExample;
