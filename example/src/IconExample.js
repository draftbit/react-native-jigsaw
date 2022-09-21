import * as React from "react";
import { Icon } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function IconExample() {
  return (
    <Container>
      <Section title="Icon" style={styles.row}>
        <Icon name="brightness-5" size={16} color="blue" />
        <Icon name="brightness-7" size={24} />
        <Icon name="file-download" size={36} color="purple" />
      </Section>
    </Container>
  );
}
