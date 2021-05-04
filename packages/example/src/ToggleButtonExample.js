import * as React from "react";
import { ToggleButton } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function ToggleButtonExample() {
  const [checked, setChecked] = React.useState("unchecked");
  const toggleChecked = () => {
    if (checked === "unchecked") {
      setChecked("checked");
    } else {
      setChecked("unchecked");
    }
  };
  return (
    <Container>
      <Section title="ToggleButton" style={styles.row}>
        <ToggleButton
          style={{ margin: 5 }}
          icon="brightness-5"
          status={checked}
          onPress={toggleChecked}
        />
        <ToggleButton
          style={{ margin: 5 }}
          icon="file-download"
          width={70}
          height={70}
          status={checked}
          onPress={toggleChecked}
        />
      </Section>
    </Container>
  );
}
