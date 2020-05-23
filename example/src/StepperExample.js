import * as React from "react";
import { Stepper, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function StepperExample({ theme }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="With State">
        <Stepper value={value} onChange={handleChange} />
      </Section>

      <Section title="Static">
        <Stepper value={value} />
      </Section>

      <Section title="No Value">
        <Stepper />
      </Section>
    </Container>
  );
}

export default withTheme(StepperExample);
