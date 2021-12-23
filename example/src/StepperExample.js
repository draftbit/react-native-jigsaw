import * as React from "react";
import { Stepper, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function StepperExample({ theme }) {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(100);
  const [value4, setValue4] = React.useState(5);
  const [value5, setValue5] = React.useState(5);
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

      <Section title="With State and defaultValue">
        <Stepper
          value={value2}
          onChange={(v) => setValue2(v)}
          defaultValue={100}
        />
      </Section>

      <Section title="minValue 1, maxValue 10">
        <Stepper
          value={value4}
          onChange={(v) => setValue4(v)}
          defaultValue={5}
          minValue={1}
          maxValue={10}
        />
      </Section>
      <Section title="minValue 1, maxValue 100, step 5">
        <Stepper
          value={value5}
          onChange={(v) => setValue5(v)}
          defaultValue={5}
          minValue={1}
          maxValue={100}
          step={5}
        />
      </Section>
    </Container>
  );
}

export default withTheme(StepperExample);
