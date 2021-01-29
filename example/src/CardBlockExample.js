import * as React from "react";
import { CardBlock, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardBlockExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section key={i} title={`(${numColumns} Column)`}>
            <CardBlock
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rightDescription="$100"
              numColumns={numColumns}
            />
          </Section>
        );
      })}

      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section key={i} title={`(${numColumns} Column 1x1 aspectRatio)`}>
            <CardBlock
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
        <CardBlock title="Hello" titleCentered numColumns={1} />
      </Section>

      <Section title="2 Column No Right Description">
        <CardBlock
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
        />
      </Section>

      <Section title="3 Column No Left Description">
        <CardBlock title="Beautiful West Coast Villa" rightDescription="$100" />
      </Section>
    </Container>
  );
}

export default withTheme(CardBlockExample);
