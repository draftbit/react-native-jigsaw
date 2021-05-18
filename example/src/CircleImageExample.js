import * as React from "react";
import { CircleImage, AvatarEdit } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function CircleImageExample() {
  return (
    <Container>
      <Section title="CircleImage" style={styles.row}>
        <CircleImage size={60} style={styles.space} />
        <CircleImage
          size={60}
          style={styles.space}
          source="https://picsum.photos/180/180/?random"
        />
        <CircleImage style={styles.space} />
      </Section>
      <Section title="AvatarEdit" style={styles.row}>
        <AvatarEdit size={60} style={styles.space} />
        <AvatarEdit
          size={60}
          style={styles.space}
          image="https://picsum.photos/180/180/?random"
        />
        <AvatarEdit
          size={60}
          style={styles.space}
          image="https://picsum.photos/180/180/?random"
        />
      </Section>
    </Container>
  );
}
