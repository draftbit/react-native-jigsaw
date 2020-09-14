import * as React from "react";
import { RadioButtonGroup, RadioButtonFieldGroup } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function RadioButtonGroupExample() {
  const [selected, onSelect] = React.useState("First");

  const handleSelect = (value) => onSelect(value);
  return (
    <Container>
      <Section title="RadioButtonGroup (horizontal)">
        <RadioButtonGroup
          direction="horizontal"
          options={[
            { label: "First", icon: "add" },
            { label: "Second" },
            { label: "Third" },
            { label: "Fourth" },
          ]}
          borderRadius={10}
          inactiveColor="#DCDCDC"
          activeColor="#5a45ff"
          iconSize={10}
          contentColor="#ffffff"
          borderColor="#000000"
          value={selected}
          onSelect={handleSelect}
        />
      </Section>

      <Section title="RadioButtonGroup (vertical)">
        <RadioButtonGroup
          direction="vertical"
          options={[
            { label: "First", icon: "add" },
            { label: "Second" },
            { label: "Third" },
            { label: "Fourth" },
          ]}
          optionSpacing={10}
          borderRadius={100}
          inactiveColor="#DCDCDC"
          activeColor="#5a45ff"
          iconSize={10}
          contentColor="#ffffff"
          value={selected}
          onSelect={handleSelect}
        />
      </Section>

      <Section title="RadioButtonGroup (with optionSpacing)">
        <RadioButtonGroup
          direction="horizontal"
          options={[
            { label: "First", icon: "add" },
            { label: "Second" },
            { label: "Third" },
            { label: "Fourth" },
          ]}
          optionSpacing={8}
          borderRadius={10}
          inactiveColor="#DCDCDC"
          activeColor="#5a45ff"
          iconSize={10}
          contentColor="#ffffff"
          value={selected}
          onSelect={handleSelect}
        />
      </Section>

      <Section title="RadioButtonFieldGroup">
        <RadioButtonFieldGroup
          label={"Test"}
          options={[
            { key: "First", value: "First" },
            { key: "Second", value: "Second" },
            { key: "Third", value: "Third" },
            { key: "Fourth", value: "Fourth" },
          ]}
          onSelect={handleSelect}
          value={selected}
        />
      </Section>
    </Container>
  );
}
