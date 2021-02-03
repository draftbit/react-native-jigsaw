import * as React from "react";
import { View } from "react-native";
import { Row, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function Box({ width = 50, height = 50 }) {
  return (
    <View style={{ width, height, backgroundColor: "#5a4fff", margin: 2 }} />
  );
}

function LayoutExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Row">
        <Row>
          <Box />
          <Box />
          <Box />
        </Row>
      </Section>
    </Container>
  );
}

export default withTheme(LayoutExample);
