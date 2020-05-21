import * as React from "react";
import { CardContainer, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardContainerExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section title={`(${numColumns} Column)`}>
            <CardContainer
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rightDescription="$100"
              numColumns={numColumns}
              icon="cloud"
            />
          </Section>
        );
      })}

      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section title={`(${numColumns} Columns 1x1 aspectRatio)`}>
            <CardContainer
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rightDescription="$100"
              numColumns={numColumns}
              aspectRatio={1}
            />
          </Section>
        );
      })}

      <Section title="1 Column Centered Title">
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          textCentered
          numColumns={2}
        />
      </Section>

      <Section title="2 Column No Right Description">
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
        />
      </Section>

      <Section title="3 Column No Left Description">
        <CardContainer
          title="Beautiful West Coast Villa"
          rightDescription="$100"
        />
      </Section>
    </Container>
  );
}

export default withTheme(CardContainerExample);
