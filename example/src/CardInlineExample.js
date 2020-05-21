import * as React from "react";
import { CardInline, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardInlineExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section title={`(${numColumns} Column)`}>
            <CardInline
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
          <Section title={`(${numColumns} Column 1x1 aspectRatio)`}>
            <CardInline
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
        <CardInline title="Hello" titleCentered numColumns={1} />
      </Section>

      <Section title="2 Column No Right Description">
        <CardInline
          title="Beautiful West Coast Villa"
          description="San Diego"
          numColumns={2}
        />
      </Section>

      <Section title="1 Column No Left Description">
        <CardInline title="Beautiful West Coast Villa" />
      </Section>
    </Container>
  );
}

export default withTheme(CardInlineExample);
