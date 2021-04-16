import * as React from "react";
import { withTheme, FAB } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

function FABExample({ theme }) {
  // const [elevation, setElevation] = React.useState(0);

  const handlePress = () => {};
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Solid">
        <FAB type="standard" icon="add" onPress={handlePress} />
        <FAB type="standard" icon="add" disabled onPress={handlePress} />
        <FAB
          type="standard"
          icon="add"
          loading
          onPress={handlePress}
          style={{ margin: 20 }}
        />
      </Section>

      <Section title="Extended" style={styles.row}>
        <FAB type="extended" label="Extended FAB" onPress={handlePress} />
        <FAB
          type="extended"
          icon="add"
          label="Extended FAB"
          onPress={handlePress}
        />
        <FAB
          type="extended"
          icon="add"
          label="Extended Disabled FAB"
          disabled
          onPress={handlePress}
        />
        <FAB
          type="extended"
          icon="add"
          label="Extended Loading FAB"
          loading
          onPress={handlePress}
        />
      </Section>

      <Section title="Outline">
        <FAB type="outline" icon="add" onPress={handlePress} />
        <FAB type="outline" icon="add" disabled onPress={handlePress} />
        <FAB type="outline" icon="add" loading onPress={handlePress} />
      </Section>

      <Section title="Fixed">
        <FAB type="fixed" label="Fixed FAB" onPress={handlePress} />
        <FAB
          type="fixed"
          icon="alarm"
          label="Fixed FAB"
          onPress={handlePress}
        />
        <FAB
          type="fixed"
          icon="alarm"
          label="Fixed Disabled FAB"
          disabled
          onPress={handlePress}
        />
        <FAB
          type="fixed"
          icon="alarm"
          label="Fixed Loading FAB"
          loading
          onPress={handlePress}
        />
      </Section>
    </Container>
  );
}
export default withTheme(FABExample);
