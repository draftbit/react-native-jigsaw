import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function TextInputExample() {
  const [value, setText] = React.useState("Change me!");
  const [value2, setText2] = React.useState("Change me!");
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
            editable={false}
            value={value}
            onChangeText={handleChange}
          />
          <TextInput
            placeholder="Input with initial value"
            value={value2}
            onChangeText={(text) => setText2(text)}
            defaultValue="I'm an initial value!"
          />
          <TextInput
            placeholder="Input that logs with delayed callback"
            value={value2}
            onChangeText={(text) => setText2(text)}
            onChangeTextDelayed={(text) => console.log(text)}
          />
        </Section>
      </Container>
    </KeyboardAvoidingView>
  );
}
