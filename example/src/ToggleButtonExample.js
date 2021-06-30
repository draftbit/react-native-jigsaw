import * as React from "react";
import { Text } from "react-native";
import { ToggleButton } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function ToggleButtonExample() {
  const [toggled, setToggled] = React.useState(false);
  const [toggled2, setToggled2] = React.useState(false);
  const toggle = (toggled) => {
    setToggled(toggled);
  };
  return (
    <Container>
      <Section title="ToggleButton" style={styles.row}>
        <ToggleButton
          style={{ margin: 5 }}
          icon="brightness-5"
          toggled={toggled}
          onPress={toggle}
        />
        <ToggleButton
          style={{ margin: 5 }}
          icon="file-download"
          width={70}
          height={70}
          toggled={toggled}
          onPress={toggle}
        />
        <Text>with initial value</Text>
        <ToggleButton
          style={{ margin: 5 }}
          icon="file-download"
          width={70}
          height={70}
          toggled={toggled2}
          onPress={(toggled) => setToggled2(toggled)}
          initialValue={true}
        />
      </Section>
    </Container>
  );
}
