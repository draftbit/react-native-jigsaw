import * as React from "react";
import { Text } from "react-native";
import { Center, Circle, Square } from "@draftbit/ui";
import Section, { Container } from "./Section";

const LayoutExample = () => {
  return (
    <Container style={{}}>
      <Section title="Center" style={{}}>
        <Center
          style={{
            width: 200,
            height: 50,
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          <Text>Centered Text</Text>
        </Center>
      </Section>
      <Section title="Circle" style={{}}>
        <Circle
          style={{
            width: 100,
            borderColor: "red",
            borderWidth: 1,
          }}
        />
      </Section>
      <Section title="Square" style={{}}>
        <Square
          style={{
            width: 100,
            borderColor: "red",
            borderWidth: 1,
          }}
        />
      </Section>
    </Container>
  );
};

export default LayoutExample;
