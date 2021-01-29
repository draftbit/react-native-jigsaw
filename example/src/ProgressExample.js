import * as React from "react";
import { withTheme, ProgressBar, ProgressCircle } from "@draftbit/ui";
import Section, { Container } from "./Section";

function ProgressExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="ProgressBar">
        <ProgressBar
          progress={0.5}
          style={{ height: 8 }}
          borderRadius={4}
          color="#5a45ff"
          unfilledColor="#eee"
        />
      </Section>

      <Section title="ProgressCircle">
        <ProgressCircle
          size={100}
          progress={0.8}
          color="primary"
          unfilledColor="secondary"
          showsText={true}
          thickness={4}
          strokeCap={"round"}
        />
      </Section>
    </Container>
  );
}

export default withTheme(ProgressExample);
