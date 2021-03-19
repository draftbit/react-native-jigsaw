import * as React from "react";
import { View } from "react-native";
import { Card, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function CardExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      {Array.from({ length: 2 }).map((_v, i) => {
        const numColumns = i + 2;
        return (
          <Section key={i} title={`(${numColumns} Column)`}>
            <Card
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              rightDescription="Greyhound divisively hello coldly wonderfully marginally far upon excluding."
              numColumns={numColumns}
              icon="MaterialCommunityIcons/heart"
            />
          </Section>
        );
      })}

      {Array.from({ length: 2 }).map((_v, i) => {
        const numColumns = i + 2;
        return (
          <Section key={i} title={`(${numColumns} Columns 1:1 aspectRatio)`}>
            <Card
              image={require("./assets/images/splash.png")}
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              numColumns={numColumns}
              aspectRatio={1}
            />
          </Section>
        );
      })}

      {Array.from({ length: 3 }).map((_v, i) => {
        const numColumns = i + 1;
        return (
          <Section key={i} title={`(${numColumns} Columns 3:2 aspectRatio)`}>
            <Card
              image={require("./assets/images/splash.png")}
              title="Beautiful West Coast Villa"
              leftDescription="San Diego"
              numColumns={numColumns}
              aspectRatio={3 / 2}
            />
          </Section>
        );
      })}

      <Section title="3 Column Centered Title">
        <Card title="Beautiful West Coast Villa" textCentered numColumns={3} />
      </Section>

      <Section title="1 Column No Right Description">
        <Card
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={1}
        />
      </Section>

      <Section title="3 Column No Left Description">
        <Card
          title="Beautiful West Coast Villa"
          leftDescription="Something fun and new"
          textCentered={true}
        />
      </Section>
    </Container>
  );
}

export default withTheme(CardExample);
