import * as React from "react";
import { Text } from "react-native";
import { AccordionGroup, withTheme, AccordionItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

function AccordionExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Basic accordion with no additional styles">
        <AccordionGroup label={"Basic"}>
          <AccordionItem icon="insert-drive-file" label={"First file"} />
          <AccordionItem label={"Second file without icon"} />
        </AccordionGroup>
      </Section>
      <Section title="Expandable Accordion group with Accordion Items">
        <AccordionGroup
          openColor={theme.colors.primary}
          closedColor={theme.colors.secondary}
          caretColor={theme.colors.medium}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "bold" }}
          label={"First"}
        >
          <AccordionItem
            icon={"insert-drive-file"}
            label={"First file"}
            style={{ color: theme.colors.medium }}
            iconColor={theme.colors.medium}
          />
          <AccordionItem
            label={"Second file without icon"}
            style={{ color: theme.colors.medium }}
          />
        </AccordionGroup>
      </Section>
      <Section title="Expanded Accordion group">
        <AccordionGroup
          openColor={theme.colors.primary}
          closedColor={theme.colors.secondary}
          caretColor={theme.colors.divider}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "normal" }}
          label={"Second"}
          expanded={true}
        >
          <AccordionItem
            label={"I am visible when you first see this screen"}
            icon={"star"}
            style={{ fontSize: 20, color: theme.colors.primary }}
            iconColor={theme.colors.medium}
          />
        </AccordionGroup>
      </Section>
      <Section title="Accordion with text inside already open">
        <AccordionGroup
          label={"Basic"}
          caretColor="black"
          openColor="red"
          closedColor="green"
          style={{ padding: 8 }}
          expanded={true}
          icon={"star"}
          iconSize={50}
          caretSize={50}
        >
          <Text>Hello!</Text>
          <Text>Is it me your looking for?</Text>
        </AccordionGroup>
      </Section>
    </Container>
  );
}

export default withTheme(AccordionExample);
