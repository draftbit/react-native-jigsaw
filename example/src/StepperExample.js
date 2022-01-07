import * as React from "react";
import { Stepper, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function StepperExample({ theme }) {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value4, setValue4] = React.useState(0);
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="With State">
        <Stepper value={value} onChange={handleChange} min={5} max={10} />
      </Section>

      <Section title="Static">
        <Stepper value={value2} />
      </Section>

      <Section title="No Value">
        <Stepper />
      </Section>

      <Section title="With State and defaultValue">
        <Stepper
          value={value4}
          onChange={(v) => setValue4(v)}
          defaultValue={100}
        />
      </Section>
    </Container>
  );
}

export default withTheme(StepperExample);
