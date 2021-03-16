import * as React from "react";
import { withTheme, FAB } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

function FABExample({ theme }) {
  const handlePress = () => {};
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Solid" style={styles.row}>
        <FAB icon="MaterialIcons/add" onPress={handlePress} />
        <FAB icon="MaterialIcons/add" disabled onPress={handlePress} />
        <FAB icon="MaterialIcons/add" loading onPress={handlePress} />
      </Section>
    </Container>
  );
}
export default withTheme(FABExample);
