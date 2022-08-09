import * as React from "react";
import { SVG } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function ButtonExample() {
  return (
    <Container>
      <Section title="Svg" style={styles.row}>
        <SVG
          uri={require("./assets/images/example.svg")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </Section>
    </Container>
  );
}
