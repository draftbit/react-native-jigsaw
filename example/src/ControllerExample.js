import * as React from "react";
import {
  Button,
  withTheme,
  Switch,
  Checkbox,
  RadioButton,
  FieldRadioButton,
  FieldCheckbox,
} from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

function ControllerExample({ theme }) {
  const [value, setValue] = React.useState(false);
  const [disabled, disable] = React.useState(false);

  const handleDisable = (state) => disable(!state);
  const handleChange = (value) => setValue(value);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Controlled Elements" style={styles.row}>
        <Button onPress={handleDisable} type="text">
          {disabled ? "Enable" : "Disable"}
        </Button>

        <Switch
          onValueChange={handleChange}
          disabled={disabled}
          value={value}
        />

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
      </Section>
      <Section title="Controlled Elements via Field" style={styles.row}>
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
      </Section>
    </Container>
  );
}

export default withTheme(ControllerExample);
