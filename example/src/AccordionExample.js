import * as React from "react";
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
      <Section title="Always Expanded Accordion group">
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
            label={"I am always visible"}
            icon={"star"}
            style={{ fontSize: 20, color: theme.colors.primary }}
            iconColor={theme.colors.medium}
          />
        </AccordionGroup>
      </Section>
    </Container>
  );
}

export default withTheme(AccordionExample);
