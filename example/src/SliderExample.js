import * as React from "react";
import { Text } from "react-native";
import { Slider, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SliderExample({ theme }) {
  const [value, setValue] = React.useState(4);
  const [value2, setValue2] = React.useState(4);
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Uncontrolled">
        <Slider
          onValueChange={console.log}
          style={{ marginLeft: 12, marginRight: 12 }}
        />
      </Section>

      <Section title="Controlled">
        <Slider
          step={10}
          maximumTrackTintColor={theme.colors.light}
          minimumTrackTintColor={theme.colors.primary}
          thumbTintColor={theme.colors.primary}
          value={value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={handleChange}
          style={{ width: 200, marginLeft: 12, marginRight: 12 }}
        />
        <Text style={{ fontSize: 24, marginTop: 24 }}>Value: {value}</Text>
      </Section>

      <Section title="Controlled with initial value">
        <Slider
          step={10}
          maximumTrackTintColor={theme.colors.light}
          minimumTrackTintColor={theme.colors.primary}
          thumbTintColor={theme.colors.primary}
          value={value2}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(v) => setValue2(v)}
          initialValue={90}
          style={{ width: 200, marginLeft: 12, marginRight: 12 }}
        />
        <Text style={{ fontSize: 24, marginTop: 24 }}>Value: {value2}</Text>
      </Section>
    </Container>
  );
}

export default withTheme(SliderExample);
