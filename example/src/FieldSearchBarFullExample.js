import * as React from "react";
import { Text } from "react-native";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function FieldSearchBarFullExample({ theme }) {
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  const [searchBarValue2, setSearchBarValue2] = React.useState(undefined);
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="FieldSearchBarFull">
        <FieldSearchBarFull
          placeholder="Type something..."
          value={searchBarValue}
          onChange={(value) => setSearchBarValue(value)}
        />
        <Text>Value: {searchBarValue}</Text>

        <FieldSearchBarFull
          placeholder="Example with initial value"
          value={searchBarValue2}
          onChange={(value) => setSearchBarValue2(value)}
          initialValue="Replace this with your search"
        />
      </Section>
    </Container>
  );
}

export default withTheme(FieldSearchBarFullExample);
