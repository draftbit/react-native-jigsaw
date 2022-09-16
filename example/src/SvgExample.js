import * as React from "react";
import { SVG } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function SvgExample() {
  return (
    <Container>
      <Section title="SVG" style={styles.row}>
        <SVG
          source={
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg"
          }
          style={{
            width: 200,
            height: 200,
          }}
        />
      </Section>
    </Container>
  );
}
