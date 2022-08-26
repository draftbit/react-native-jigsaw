import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { NumberInput, ButtonSolid } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function TextInputExample() {
  const [number, setNumber] = React.useState(123);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
      <Container>
        <Section title="Number Input">
          <NumberInput
            placeholder="Number input using value"
            value={number}
            onChangeText={(num) => setNumber(num)}
          />
          <NumberInput
            placeholder="Number input using value (2)"
            value={number}
            onChangeText={(num) => setNumber(num)}
          />
          <NumberInput
            placeholder="Number input using defaultValue"
            onChangeText={(num) => setNumber(num)}
            defaultValue={1}
          />
          <NumberInput
            placeholder="Disabled number input"
            onChangeText={(num) => setNumber(num)}
            defaultValue={1}
            editable={false}
          />

          <ButtonSolid
            style={[styles.button]}
            title="Reset Number"
            onPress={(_) => setNumber(0)}
          />
        </Section>
      </Container>
    </KeyboardAvoidingView>
  );
}
