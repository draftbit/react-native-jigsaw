import React from "react";
import Section, { Container } from "./Section";
import { LinearProgress } from "@draftbit/ui";

const ProgressExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Linear Progress" style={{}}>
        <LinearProgress
          value={0}
          thickness={15}
          trackThickness={15}
          trackColor="red"
          trackOpacity={0.3}
          lineCap="round"
        />
      </Section>
    </Container>
  );
};

export default ProgressExample;
