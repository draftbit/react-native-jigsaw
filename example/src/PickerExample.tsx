import * as React from "react";
import { Picker, MultiSelectPicker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const OPTIONS = [
  { value: "AudiValue", label: "Audi" },
  { value: "BMWValue", label: "BMW" },
  {
    value: "CadillacValue",
    label: "Cadillac",
  },
  { value: "DodgeValue", label: "Dodge" },
  { value: "KiaValue", label: "Kia" },
  { value: "HyundaiValue", label: "Hyundai" },
];

function PickerExample() {
  const [value1, setValue] = React.useState("Audi");
  const [value2, setValue2] = React.useState("Audi");
  const [value3, setValue3] = React.useState(1);
  const [value4, setValue4] = React.useState<(string | number)[]>([]);

  return (
    <Container style={{}}>
      <Section style={{}} title="Picker - Underline">
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown"
        onValueChange={(value) => setValue(value.toString())}
        rightIconName={"AntDesign/caretright"}
        leftIconName={"AntDesign/caretleft"}
        leftIconMode="outset"
      />
      <MultiSelectPicker
        label="Make"
        placeholder="Select multiple makes"
        options={OPTIONS}
        value={value4}
        onValueChange={(value) => setValue4(value)}
      />

      <Section style={{}} title="Picker - Underline (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          disabled
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Underline (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          error
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Underline (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          disabled
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
          style={{
            backgroundColor: "red",
            padding: 16,
          }}
        />
      </Section>

      <Section style={{}} title="Picker - Underline with string options">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={["Audi", "BMW", "Cadillac", "Dodge"]}
          value={value2}
          onValueChange={(value) => setValue2(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Solid">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
          leftIconName={"AntDesign/caretleft"}
          leftIconMode="outset"
        />
      </Section>

      <Section style={{}} title="Picker - Solid (Disabled)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          disabled
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Solid (Error)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          error
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Solid (custom styles)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
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

      <Section style={{}} title="Picker - Solid (custom font)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
          placeholderTextColor="green"
          style={{
            fontSize: 30,
            color: "red",
          }}
          leftIconName={"AntDesign/caretleft"}
        />
      </Section>

      <Section style={{}} title="Picker - Solid (custom padding)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
          style={{
            paddingTop: 25,
            paddingRight: 25,
            paddingBottom: 25,
            paddingLeft: 25,
          }}
        />
      </Section>

      <Section style={{}} title="Picker - Solid (custom margin)">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
          style={{
            marginTop: 25,
            marginRight: 25,
            marginBottom: 25,
            marginLeft: 25,
          }}
        />
      </Section>

      <Section style={{}} title="Picker - Solid with string options">
        <Picker
          label="Make"
          placeholder="Select a make..."
          type="solid"
          options={["Audi", "BMW", "Cadillac", "Dodge"]}
          value={value2}
          onValueChange={(value) => setValue2(value.toString())}
        />
      </Section>

      <Section style={{}} title="Picker - Solid with numeric values">
        <Picker
          label="Number"
          placeholder="Select a make..."
          type="solid"
          options={[
            { value: 1, label: "One" },
            { value: 2, label: "Two" },
          ]}
          value={value3}
          onValueChange={(value) => setValue3(value as number)}
        />
      </Section>
    </Container>
  );
}

export default withTheme(PickerExample);
