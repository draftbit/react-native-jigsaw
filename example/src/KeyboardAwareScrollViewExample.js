import * as React from "react";
import { TextField, KeyboardAwareScrollView } from "@draftbit/ui";

import Section, { Container, styles } from "./Section";

export default function ButtonExample() {
  return (
    <Container>
      <Section title="Keyboard Aware Scroll View" style={styles.row}>
        <KeyboardAwareScrollView>
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
          <TextField
            type="solid"
            label="Solid input"
            style={{ marginBottom: 20 }}
          />
        </KeyboardAwareScrollView>
      </Section>
    </Container>
  );
}
