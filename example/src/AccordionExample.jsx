import * as React from "react";
import { Text, View } from "react-native";
import { AccordionGroup, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function AccordionExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background.base }}>
      <Section title="Basic accordion with no additional styles">
        <AccordionGroup label={"Basic"}>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </AccordionGroup>
      </Section>
      <Section title="Expandable Accordion group">
        <AccordionGroup
          openColor={theme.colors.branding.primary}
          closedColor={theme.colors.branding.secondary}
          caretColor={theme.colors.text.medium}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "bold" }}
          label={"First"}
        >
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </AccordionGroup>
      </Section>
      <Section title="Expanded Accordion group">
        <AccordionGroup
          openColor={theme.colors.branding.primary}
          closedColor={theme.colors.branding.secondary}
          caretColor={theme.colors.border.base}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "normal" }}
          label={"Second"}
          expanded={true}
        >
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </AccordionGroup>
      </Section>
    </Container>
  );
}

export default withTheme(AccordionExample);
