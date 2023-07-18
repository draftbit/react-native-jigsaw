import * as React from "react";
import { Text } from "react-native";
import {
  AspectRatio,
  HStack,
  VStack,
  ZStack,
  Center,
  Circle,
  Square,
} from "@draftbit/ui";
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
      <Section title="Aspect Ratio" style={{}}>
        <AspectRatio
          style={{
            width: 200,
            borderColor: "red",
            borderWidth: 1,
          }}
          aspectRatio={16 / 9}
        />
      </Section>
      <Section title="HStack" style={{}}>
        <HStack>
          <Text>HStack 1</Text>
          <Text>HStack 2</Text>
        </HStack>
      </Section>
      <Section title="VStack" style={{}}>
        <VStack>
          <Text>VStack 1</Text>
          <Text>VStack 2</Text>
        </VStack>
      </Section>
      <Section title="ZStack" style={{}}>
        <ZStack>
          <Text>ZStack 1</Text>
          <Text>ZStack 2</Text>
        </ZStack>
      </Section>
    </Container>
  );
};

export default LayoutExample;
