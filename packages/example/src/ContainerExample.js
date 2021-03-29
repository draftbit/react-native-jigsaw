import * as React from "react";
import { Text } from "react-native";
import Section, { Container as ExampleContainer } from "./Section";
import { Container, withTheme } from "@draftbit/ui";

const IMAGE =
  "https://res.cloudinary.com/altos/image/upload/w_600,f_auto,c_scale/draftbit/components/Image.png";

function ContainerExample({ theme }) {
  return (
    <ExampleContainer style={{ backgroundColor: theme.colors.background }}>
      <Section title="Container with no theme gutter padding)">
        <Container style={{ paddingVertical: 16 }}>
          <Text>Container without theme gutter padding</Text>
        </Container>
      </Section>

      <Section title="Container with theme gutter padding)">
        <Container useThemeGutterPadding style={{ paddingVertical: 16 }}>
          <Text>Container with theme gutter padding</Text>
        </Container>
      </Section>

      <Section title="Container with background color">
        <Container backgroundColor="#ff0000" style={{ paddingVertical: 16 }}>
          <Text>Container with background color</Text>
        </Container>
      </Section>

      <Section title="Container with Background Image">
        <Container
          backgroundImage={IMAGE}
          style={{
            paddingVertical: 16,
            height: 300,
          }}
        >
          <Text>Container with background image</Text>
        </Container>
      </Section>

      <Section title="Container with Background Image and resizeMode=cover">
        <Container
          backgroundImage={IMAGE}
          backgroundImageResizeMode="cover"
          style={{
            paddingVertical: 16,
            width: 300,
            height: 300,
          }}
        >
          <Text>Container with background image and resize mode cover</Text>
        </Container>
      </Section>

      <Section title="Container with Background Image and resizeMode=contain">
        <Container
          backgroundImage={IMAGE}
          backgroundImageResizeMode="contain"
          style={{
            paddingVertical: 16,
            width: 300,
            height: 300,
          }}
        >
          <Text>Container with background image and resize mode cover</Text>
        </Container>
      </Section>

      <Section title="Container with random borderColor">
        <Container
          style={{
            paddingVertical: 16,
            borderColor: "#39ff14",
            borderWidth: 10,
          }}
        >
          <Text>Container with borderColor</Text>
        </Container>
      </Section>
    </ExampleContainer>
  );
}

export default withTheme(ContainerExample);
