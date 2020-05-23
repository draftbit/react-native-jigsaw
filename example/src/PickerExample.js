import * as React from "react";
import { Picker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function PickerExample({ theme }) {
  const [value, setValue] = React.useState("Audi");
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
          selectedValue={value}
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
          selectedValue={value}
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
          selectedValue={value}
          onValueChange={handleChange}
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
          selectedValue={value}
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
          selectedValue={value}
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
          selectedValue={value}
          onValueChange={handleChange}
        />
      </Section>
    </Container>
  );
}

export default withTheme(PickerExample);
