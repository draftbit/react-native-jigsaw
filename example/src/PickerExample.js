import * as React from "react";
import { Picker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function PickerExample({ theme }) {
  const [value, setValue] = React.useState("Audi");
  const [value2, setValue2] = React.useState("Audi");
  const handleChange = (v) => setValue(v);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Picker - Underline">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Underline (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          disabled
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Underline (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          error
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Underline (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          disabled
          value={value}
          onValueChange={handleChange}
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
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Underline with initial value">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          value={value2}
          onValueChange={(v) => setValue2(v)}
          initialValue="Dodge"
        />
      </Section>

      <Section title="Picker - Solid">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Solid (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          disabled
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Solid (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          error
          value={value}
          onValueChange={handleChange}
        />
      </Section>

      <Section title="Picker - Solid (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          value={value}
          onValueChange={handleChange}
          style={{
            backgroundColor: "red",
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderColor: "green",
            padding: 16,
          }}
        />
      </Section>

      <Section title="Picker - Solid (custom font)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: "Audi", label: "Audi" },
            { value: "BMW", label: "BMW" },
            { value: "Cadillac", label: "Cadillac" },
            { value: "Dodge", label: "Dodge" },
          ]}
          value={value}
          onValueChange={handleChange}
          placeholderTextColor="green"
          style={{
            fontSize: 30,
            color: "red",
            fontFamily: "Calibri",
          }}
        />
      </Section>

      <Section title="Picker - Solid with string options">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={["Audi", "BMW", "Cadillac", "Dodge"]}
          value={value}
          onValueChange={handleChange}
        />
      </Section>
    </Container>
  );
}

export default withTheme(PickerExample);
