import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextField } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function TextFieldExample() {
  const [value, setText] = React.useState("Change me!");
  const [value2, setText2] = React.useState("Change me!");
  const [value3, setText3] = React.useState("Change me!");
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
          <TextField
            type="solid"
            label="Solid input with custom border/background styles"
            value={value}
            onChangeText={handleChange}
            style={{
              borderColor: "red",
              borderWidth: 2,
              backgroundColor: "green",
            }}
          />
          <TextField
            type="solid"
            label="Solid input with custom font styles"
            value={value}
            onChangeText={handleChange}
            placeholderTextColor="green"
            style={{
              fontSize: 30,
              color: "red",
              fontFamily: "Calibri",
            }}
          />
          <TextField
            type="solid"
            label="Solid input with custom padding"
            value={value}
            onChangeText={handleChange}
            style={{
              paddingTop: 25,
              paddingRight: 25,
              paddingBottom: 25,
              paddingLeft: 25,
            }}
          />
          <TextField
            type="solid"
            label="Solid input with initial value"
            value={value2}
            onChangeText={(text) => setText2(text)}
            initialValue="Hello world!!!!!"
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
            // label="Underline input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={value}
            onChangeText={handleChange}
          />

          <TextField
            label="Underline textarea"
            onChangeText={(textareaText) => this.setState({ textareaText })}
            multiline
            disabled
            value={value}
          />

          <TextField label="Disabled underline input" disabled />

          <TextField
            label="Underline input with custom border/background styles"
            value={value}
            onChangeText={handleChange}
            style={{
              padding: 10,
              borderColor: "red",
              borderWidth: 2,
              backgroundColor: "green",
            }}
          />
          <TextField
            type="underline"
            label="Underline input with initial value"
            value={value3}
            onChangeText={(text) => setText3(text)}
            initialValue="Hello world!!!!!"
          />
        </Section>
      </Container>
    </KeyboardAvoidingView>
  );
}
