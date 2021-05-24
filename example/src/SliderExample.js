import * as React from "react";
import { Slider, FieldSlider, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SliderExample({ theme }) {
  const [value, setValue] = React.useState(4);
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Active">
        <Slider
          style={{ height: 4 }}
          maximumTrackTintColor="primary"
          minimumTrackTintColor="light"
          thumbTintColor="primary"
          value={value}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Disabled">
        <Slider
          disabled={true}
          style={{ height: 10 }}
          maximumTrackTintColor="primary"
          minimumTrackTintColor="light"
          thumbTintColor="primary"
          disabledThumbTintColor="strong"
          thumbBorderRadius={20}
          value={value}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Field Slider with a Title">
        <FieldSlider
          title="This is my title"
          minimumLabel="0"
          maximumLabel="10"
          style={{ height: 6 }}
          maximumTrackTintColor="primary"
          minimumTrackTintColor="light"
          thumbTintColor="primary"
          value={value}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onValueChange={handleChange}
        />
      </Section>
    </Container>
  );
}

export default withTheme(SliderExample);
