import * as React from "react";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function FieldSearchBarFullExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="FieldSearchBarFull">
        <FieldSearchBarFull
          placeholder="Type something..."
          onSubmit={(_text) => {}}
        />
      </Section>
    </Container>
  );
}

export default withTheme(FieldSearchBarFullExample);
