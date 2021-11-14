import * as React from "react";
import { TextInput, KeyboardAvoidingView } from "react-native";
import { NumberInput } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function TextInputExample() {
  const [value, setText] = React.useState("Change me!");
  const [value2, setText2] = React.useState("Change me!");
  const [number, setNumber] = React.useState(0);
  const handleChange = (text) => setText(text);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
      <Container>
        <Section title="Text Input">
          <TextInput
            placeholder="Standard input"
            value={value}
            onChangeText={handleChange}
          />
          <TextInput
            placeholder="Disabled input"
            disabled={true}
            value={value}
            onChangeText={handleChange}
          />
          <TextInput
            placeholder="Input with initial value"
            value={value2}
            onChangeText={(text) => setText2(text)}
            defaultValue="I'm an initial value!"
          />
          <NumberInput
            placeholder="Number input with initial value"
            value={number}
            onChangeText={(num) => setNumber(num)}
            defaultValue="1"
          />
        </Section>
      </Container>
    </KeyboardAvoidingView>
  );
}
