import * as React from "react";
import { Text } from "react-native";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import AppBlock from "./AppBlock";

function FieldSearchBarFullExample({ theme }) {
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  const [searchBarValue2, setSearchBarValue2] = React.useState(undefined);
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="FieldSearchBarFull">
        <AppBlock>
          <FieldSearchBarFull
            placeholder="Type something..."
            value={searchBarValue}
            onChange={(value) => setSearchBarValue(value)}
            style={{ paddingHorizontal: 16, paddingVertical: 4 }}
            showIcon={false}
          />
        </AppBlock>
        <AppBlock mt={16}>
          <Text>Value: {searchBarValue}</Text>

          <FieldSearchBarFull
            placeholder="Example with initial value"
            value={searchBarValue2}
            onChange={(value) => setSearchBarValue2(value)}
            defaultValue="Replace this with your search"
            style={{ paddingHorizontal: 16, paddingVertical: 4, marginTop: 8 }}
            showIcon={true}
          />
        </AppBlock>
      </Section>
    </Container>
  );
}

export default withTheme(FieldSearchBarFullExample);
