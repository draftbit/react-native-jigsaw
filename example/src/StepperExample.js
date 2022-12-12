import * as React from "react";
import { Stepper, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function StepperExample({ theme }) {
  const [value, setValue] = React.useState(0);
  const [value2, _setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState("");
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="With State">
        <Stepper value={value} onChange={handleChange} />
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

      <Section title="With State and min/max">
        <Stepper
          value={value3}
          onChange={(v) => setValue3(v)}
          min={0}
          max={10}
          style={{fontSize: 24, color: theme.colors.primary}}
        />
      </Section>
    </Container>
  );
}

export default withTheme(StepperExample);
