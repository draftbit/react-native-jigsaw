import * as React from "react";
import { Slider, FieldSlider, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SliderExample({ theme }) {
  const [value, setValue] = React.useState(4);
  const handleChange = (value) => setValue(value);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Active">
        <Slider
          style={{ height: 4 }}
          maximumTrackTintColor="#5a45ff"
          minimumTrackTintColor="#536070"
          thumbTintColor="#5a45ff"
          thumbBorderRadius={4}
          trackBorderRadius={4}
          thumbSize={8}
          thumbTouchSize={4}
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
          minimumTrackTintColor="#5a45ff"
          maximumTrackTintColor="#536070"
          thumbTintColor="#00FF00"
          disabledThumbTintColor="#000000"
          thumbBorderRadius={20}
          thumbSize={20}
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
          minimumTrackTintColor="#5a45ff"
          maximumTrackTintColor="#536070"
          thumbTintColor="#3BC9EA"
          thumbBorderRadius={10}
          trackBorderRadius={10}
          thumbSize={20}
          thumbTouchSize={20}
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
