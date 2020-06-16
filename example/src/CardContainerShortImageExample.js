import * as React from "react";
import { CardContainerShortImage, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardContainerShortImageExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Left Image">
        <CardContainerShortImage
          title="Beautiful West Coast Villa"
          subtitle="San Diego"
          mode="left"
        />
      </Section>

      <Section title="Left Image Long Title & Subtitle">
        <CardContainerShortImage
          title="Title that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          mode="left"
        />
      </Section>

      <Section title="Right">
        <CardContainerShortImage
          title="Beautiful West Coast Villa"
          subtitle="San Diego"
          mode="right"
        />
      </Section>

      <Section title="Right Image Long Title & Subtitle">
        <CardContainerShortImage
          title="Title that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          mode="right"
        />
      </Section>
    </Container>
  );
}

export default withTheme(CardContainerShortImageExample);
