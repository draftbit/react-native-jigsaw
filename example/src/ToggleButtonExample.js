import * as React from "react";
import { ToggleButton } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function ToggleButtonExample() {
  const [toggled, setToggled] = React.useState(false);
  const toggle = () => {
    setToggled(!toggled);
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
      </Section>
    </Container>
  );
}
