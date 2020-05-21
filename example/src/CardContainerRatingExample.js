import * as React from "react";
import { CardContainerRating, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardContainerRatingExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section title={`(${numColumns} Column)`}>
            <CardContainerRating
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rating={4}
              rightDescription="$100"
              numColumns={numColumns}
              icon="star"
            />
          </Section>
        );
      })}

      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section title={`(${numColumns} Columns 1x1 aspectRatio)`}>
            <CardContainerRating
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rating={5}
              rightDescription="$100"
              numColumns={numColumns}
              aspectRatio={1}
            />
          </Section>
        );
      })}

      <Section title="1 Column Centered Title">
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          textCentered
          numColumns={2}
        />
      </Section>

      <Section title="2 Column No Right Description">
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
        />
      </Section>

      <Section title="2 Column No Left Description">
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rating={4}
          rightDescription="$100"
          aspectRatio={1}
        />
      </Section>
    </Container>
  );
}

export default withTheme(CardContainerRatingExample);
