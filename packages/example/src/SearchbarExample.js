import * as React from "react";
import { View, Text } from "react-native";
import { Searchbar, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SearchbarExample({ theme }) {
  const [searchbarValue, setSearchbarValue] = React.useState(undefined);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Search bar">
        <Searchbar
          value={searchbarValue}
          onChangeText={(value) => setSearchbarValue(value)}
        />
        <View style={{ marginTop: 12 }}>
          <Text>Value: {searchbarValue}</Text>
        </View>
      </Section>
    </Container>
  );
}

export default withTheme(SearchbarExample);
