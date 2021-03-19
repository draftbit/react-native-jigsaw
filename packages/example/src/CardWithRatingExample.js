import * as React from "react";
import { CardWithRating, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardWithRatingExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section key={i} title={`(${numColumns} Column)`}>
            <CardWithRating
              title="Air Force 1"
              leftDescription="Nike"
              rightDescription="$125"
              rating={4}
              numColumns={numColumns}
              icon="MaterialCommunityIcons/heart"
            />
          </Section>
        );
      })}

      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section key={i} title={`(${numColumns} Columns 1x1 aspectRatio)`}>
            <CardWithRating
              title="Air Force 1"
              leftDescription="Nike"
              rightDescription="$125"
              rating={i + 1}
              numColumns={numColumns}
              aspectRatio={1}
            />
          </Section>
        );
      })}

      <Section title="1 Column Centered Title">
        <CardWithRating
          title="Air Force 1"
          leftDescription="Nike"
          textCentered
          numColumns={2}
        />
      </Section>

      <Section title="2 Column No Right Description">
        <CardWithRating
          title="Air Force 1"
          leftDescription="Nike"
          numColumns={2}
        />
      </Section>

      <Section title="2 Column No Left Description">
        <CardWithRating
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

export default withTheme(CardWithRatingExample);
