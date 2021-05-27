import * as React from "react";
import { Switch, SwitchRow, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SwitchExample({ theme }) {
  const [value, toggle] = React.useState(false);
  const handleChange = (v) => toggle(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Enabled">
        <Switch value={value} disabled={false} onValueChange={handleChange} />
      </Section>
      <Section title="Disabled">
        <Switch value={value} disabled={true} onValueChange={handleChange} />
      </Section>
      <Section title="Switch Row">
        <SwitchRow
          value={value}
          onValueChange={handleChange}
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        />
      </Section>
    </Container>
  );
}

export default withTheme(SwitchExample);
