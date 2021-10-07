import * as React from "react";
import { Picker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const OPTIONS = [
  { value: "AudiValue", label: "Audi" },
  { value: "BMWValue", label: "BMW" },
  { value: "CadillacValue", label: "Cadillac" },
  { value: "DodgeValue", label: "Dodge" },
];

function PickerExample({ theme }) {
  const [value, setValue] = React.useState("Audi");
  const [value2, setValue2] = React.useState("Audi");
  const [value3, setValue3] = React.useState(1);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Picker - Underline">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Underline (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          disabled
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Underline (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          error
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Underline (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          disabled
          value={value}
          onValueChange={setValue}
          style={{
            backgroundColor: "red",
            padding: 16,
          }}
        />
      </Section>

      <Section title="Picker - Underline with string options">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={["Audi", "BMW", "Cadillac", "Dodge"]}
          value={value2}
          onValueChange={setValue2}
        />
      </Section>

      <Section title="Picker - Underline with initial value">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          initialValue="Dodge"
        />
      </Section>

      <Section title="Picker - Solid">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Solid (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          disabled
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Solid (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          error
          value={value}
          onValueChange={setValue}
        />
      </Section>

      <Section title="Picker - Solid (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          style={{
            backgroundColor: "red",
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderColor: "green",
          }}
        />
      </Section>

      <Section title="Picker - Solid (custom font)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          placeholderTextColor="green"
          style={{
            fontSize: 30,
            color: "red",
            fontFamily: "Calibri",
          }}
        />
      </Section>

      <Section title="Picker - Solid (custom padding)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          style={{
            paddingTop: 25,
            paddingRight: 25,
            paddingBottom: 25,
            paddingLeft: 25,
          }}
        />
      </Section>

      <Section title="Picker - Solid (custom margin)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          style={{
            marginTop: 25,
            marginRight: 25,
            marginBottom: 25,
            marginLeft: 25,
          }}
        />
      </Section>

      <Section title="Picker - Solid with string options">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={["Audi", "BMW", "Cadillac", "Dodge"]}
          value={value2}
          onValueChange={setValue2}
        />
      </Section>

      <Section title="Picker - Solid with numeric values">
        <Picker
          label="Number"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: 1, label: "One" },
            { value: 2, label: "Two" },
          ]}
          value={value3}
          onValueChange={setValue3}
        />
      </Section>
    </Container>
  );
}

export default withTheme(PickerExample);
