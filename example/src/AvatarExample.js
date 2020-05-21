import * as React from "react";
import { Avatar, AvatarEdit } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function AvatarExample() {
  return (
    <Container>
      <Section title="Avatar" style={styles.row}>
        <Avatar size={60} style={styles.space} />
        <Avatar
          size={60}
          style={styles.space}
          image="https://picsum.photos/180/180/?random"
        />
        <Avatar
          size={60}
          style={styles.space}
          image="https://picsum.photos/180/180/?random"
        />
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
