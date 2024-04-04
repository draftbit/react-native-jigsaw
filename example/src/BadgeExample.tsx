import * as React from "react";
import { Badge, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function BadgeExample() {
  return (
    <Container style={{}}>
      <Section style={{}} title="Badge - Without text">
        <Badge />
      </Section>
      <Section style={{}} title="Badge - With text">
        <Badge title="5" />
      </Section>
      <Section style={{}} title="Badge - With long text">
        <Badge title="999+" />
      </Section>
      <Section style={{}} title="Badge - Dot with color">
        <Badge
          size={7}
          style={{
            backgroundColor: "red",
          }}
        />
      </Section>
    </Container>
  );
}

export default withTheme(BadgeExample);
