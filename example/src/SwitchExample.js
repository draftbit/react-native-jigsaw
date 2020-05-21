import * as React from "react";
import { Switch, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SwitchExample({ theme }) {
  const [value, toggle] = React.useState(false);
  const handleChange = (value) => toggle(value);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Enabled">
        <Switch value={value} disabled={false} onValueChange={handleChange} />
      </Section>
      <Section title="Disabled">
        <Switch value={value} disabled={true} onValueChange={handleChange} />
      </Section>
    </Container>
  );
}

export default withTheme(SwitchExample);
