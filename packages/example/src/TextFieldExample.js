import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextField } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function TextFieldExample() {
  const [value, setText] = React.useState("Change me!");
  const handleChange = (text) => setText(text);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
      <Container>
        <Section title="Solid">
          <TextField
            type="solid"
            label="Solid input"
            value={value}
            onChangeText={handleChange}
          />
          <TextField
            type="solid"
            label="Solid input with placeholder"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />
          <TextField
            type="solid"
            label="Solid input with assistive text"
            placeholder="Enter username, only letters"
            error={true}
            assistiveText="Only letters are allowed"
            value={value}
            onChangeText={handleChange}
          />
          <TextField
            type="solid"
            label="Solid input with left outset icon"
            leftIconName="add"
            leftIconMode="outset"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />
          <TextField
            type="solid"
            label="Solid input with left inset icon"
            leftIconName="add"
            leftIconMode="inset"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />
          <TextField
            type="solid"
            label="Solid input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />
          <TextField type="solid" label="Disabled solid input" disabled />
          <TextField
            type="solid"
            label="Solid textarea"
            multiline
            value={value}
            onChangeText={handleChange}
          />
        </Section>

        <Section title="Underline">
          <TextField
            label="Underline input"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline input with placeholder"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline input with assistive text"
            placeholder="Enter username, only letters"
            error={true}
            assistiveText="Only letters are allowed"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline input with left outset icon"
            leftIconName="add"
            leftIconMode="outset"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline input with left inset icon"
            leftIconName="add"
            leftIconMode="inset"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline textarea"
            onChangeText={(textareaText) => this.setState({ textareaText })}
            multiline
            value={value}
          />

          <TextField label="Disabled underline input" disabled />
        </Section>
      </Container>
    </KeyboardAvoidingView>
  );
}
