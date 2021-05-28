import * as React from "react";
import { Text } from "react-native";
import { Slider, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SliderExample({ theme }) {
  const [value, setValue] = React.useState(4);
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Uncontrolled">
        <Slider onValueChange={console.log} />
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
          style={{ width: 200 }}
        />
        <Text style={{ fontSize: 24, marginTop: 24 }}>Value: {value}</Text>
      </Section>
    </Container>
  );
}

export default withTheme(SliderExample);
