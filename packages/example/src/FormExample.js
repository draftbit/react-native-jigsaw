import * as React from "react";
import {
  Button,
  Slider,
  Checkbox,
  FieldCheckbox,
  FieldRadioButton,
  RadioButton,
  Switch,
  withTheme,
} from "@draftbit/ui";
import Section, { Container } from "./Section";

function FormExample({ theme }) {
  const [value, toggle] = React.useState(false);
  const [disabled, disable] = React.useState(false);
  const [sliderValue, setSliderValue] = react.useState(5);

  const handleChange = (v) => toggle(v);
  const handleDisable = (state) => disable(!state);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Slider
        style={{ height: 4 }}
        maximumTrackTintColor="primary"
        minimumTrackTintColor="light"
        thumbTintColor="primary"
        value={sliderValue}
        minimumValue={0}
        maximumValue={10}
        step={1}
        onValueChange={(value) => setSliderValue(value)}
      />
      <Switch value={value} disabled={false} onValueChange={handleChange} />
      <Button onPress={handleDisable} type="text">
        {disabled ? "Enable" : "Disable"}
      </Button>

      <Switch onValueChange={handleChange} disabled={disabled} value={value} />

      <Checkbox
        status={value ? "checked" : "unchecked"}
        disabled={disabled}
        onPress={handleChange}
      />
      <RadioButton
        color="#5a45ff"
        selected={value}
        disabled={disabled}
        onPress={handleChange}
      />
      <FieldRadioButton
        title="Title"
        selected={value}
        disabled={disabled}
        onPress={handleDisable}
      />
      <FieldCheckbox
        title="Title"
        status={value ? "checked" : "unchecked"}
        disabled={disabled}
        onPress={handleChange}
        color={theme.colors.primary}
      />
    </Container>
  );
}

export default withTheme(FormExample);
