import * as React from "react";
import { withTheme, ProgressBar, ProgressCircle } from "@draftbit/ui";
import Section, { Container } from "./Section";

function ProgressBarExample({ theme }) {
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
          color="#5a45ff"
          unfilledColor="#eee"
          showsText={true}
          direction="clockwise"
          thickness={4}
        />
      </Section>

      <Section title="ProgressCircle">
        <ProgressCircle
          size={100}
          progress={0.5}
          color="#5a45ff"
          unfilledColor="#eee"
          showsText={false}
          direction="counter-clockwise"
        />
      </Section>
    </Container>
  );
}

export default withTheme(ProgressBarExample);
