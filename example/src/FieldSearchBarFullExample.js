import * as React from "react";
import { Text } from "react-native";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function FieldSearchBarFullExample({ theme }) {
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="FieldSearchBarFull">
        <FieldSearchBarFull
          placeholder="Type something..."
          value={searchBarValue}
          onChange={(value) => setSearchBarValue(value)}
        />
        <Text>Value: {searchBarValue}</Text>
      </Section>
    </Container>
  );
}

export default withTheme(FieldSearchBarFullExample);
