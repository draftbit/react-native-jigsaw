import * as React from "react";
import { View, Text } from "react-native";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function FieldSearchBarFullExample({ theme }) {
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="FieldSearchBarFull">
        <FieldSearchBarFull
          value={searchBarValue}
          onChangeText={(value) => setSearchBarValue(value)}
        />
        <View style={{ marginTop: 12 }}>
          <Text>Value: {searchBarValue}</Text>
        </View>
      </Section>
    </Container>
  );
}

export default withTheme(FieldSearchBarFullExample);
