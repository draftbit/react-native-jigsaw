import * as React from "react";
import { Picker, MultiSelectPicker, PickerItem, withTheme } from "@draftbit/ui";
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
  const [value3, setValue3] = React.useState(1);
  const [value4, setValue4] = React.useState<(string | number)[]>([]);

  return (
    <Container style={{}}>
      {/* Dropdown and Multiselect Pickers placed outside Section to be able to draw over sibling components */}
      <Section style={{}} title="Picker - Dropdown">
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown"
        onValueChange={(value) => setValue(value.toString())}
        style={{ marginBottom: 20 }}
      />

      <Section style={{}} title="Picker - Dropdown (customized item)">
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown"
        onValueChange={(value) => setValue(value.toString())}
        style={{ marginBottom: 20 }}
        selectedIconColor="white"
      >
        <PickerItem
          style={{ color: "red", fontWeight: 600 }}
          selectedTextColor="white"
          selectedBackgroundColor="black"
          selectedTextSize={22}
        />
      </Picker>

      <Section style={{}} title="Picker - Modal">
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown-modal"
        dropDownBorderColor="blue"
        dropDownTextColor="red"
        onValueChange={(value) => setValue(value.toString())}
        style={{ marginBottom: 20 }}
      />

      <Section style={{}} title="Picker - Modal (customized item)">
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown-modal"
        onValueChange={(value) => setValue(value.toString())}
        style={{ marginBottom: 20 }}
        selectedIconColor="white"
      >
        <PickerItem
          style={{ color: "red", fontWeight: 600 }}
          selectedTextColor="white"
          selectedBackgroundColor="black"
          selectedTextSize={22}
        />
      </Picker>
      <Section
        style={{}}
        title="Picker - Modal (custom transparent dropdown overlay)"
      >
        <></>
      </Section>
      <Picker
        label="Make"
        placeholder="Select a make..."
        options={OPTIONS}
        value={value1}
        mode="dropdown-modal"
        onValueChange={(value) => setValue(value.toString())}
        style={{ marginBottom: 20 }}
        selectedIconColor="white"
        dropdownOverlayColor="transparent"
      >
        <PickerItem
          style={{ color: "red", fontWeight: 600 }}
          selectedTextColor="white"
          selectedBackgroundColor="black"
          selectedTextSize={22}
        />
      </Picker>
      <Section style={{}} title="Multiselect Picker">
        <></>
      </Section>
      <MultiSelectPicker
        label="Make"
        placeholder="Select multiple makes"
        options={OPTIONS}
        value={value4}
        onValueChange={(value) => setValue4(value)}
        style={{ marginBottom: 20 }}
      />

      <Section style={{}} title="Picker - Underline">
        <Picker
          label="Make"
          placeholder="Select a make..."
          options={OPTIONS}
          value={value1}
          onValueChange={(value) => setValue(value.toString())}
        />
      </Section>

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
      {/* Dropdown and Multiselect Pickers placed outside Section to be able to draw over sibling components */}
      <Section style={{}} title="Picker - Custom smaller size">
        <Picker
          type="solid"
          placeholder="Select a make..."
          options={OPTIONS}
          value={value1}
          mode="dropdown"
          onValueChange={(value) => setValue(value.toString())}
          iconSize={20}
          leftIconMode="inset"
          leftIconName="add"
          style={{
            width: 120,
            paddingTop: 0,
            paddingBottom: 0,
            height: 35,
          }}
        />
      </Section>
    </Container>
  );
}

export default withTheme(PickerExample);
