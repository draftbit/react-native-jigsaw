import * as React from "react";
import { ProgressIndicator, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function ProgressIndicatorExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="ProgressIndicator">
        <ProgressIndicator
          numberOfSteps={5}
          currentStep={3}
          currentStepStrokeWidth={3}
          stepIndicatorSize={28}
          stepIndicatorLabelFontSize={12}
          stepIndicatorCurrentColor={"primary"}
          stepNumberFinishedColor={"strongInverse"}
          stepNumberUnfinishedColor={"strongInverse"}
          unfinishedColor={"light"}
          finishedColor={"primary"}
        />
      </Section>
    </Container>
  );
}

export default withTheme(ProgressIndicatorExample);
