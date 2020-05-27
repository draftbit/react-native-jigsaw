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
          currentStepStrokeWidth={0}
          stepIndicatorSize={28}
          stepIndicatorLabelFontSize={16}
          stepNumberFinishedColor={"#5a45ff"}
          stepNumberUnfinishedColor={"#ffffff"}
          unfinishedColor={"#eee"}
          finishedColor={"#5a45ff"}
        />
      </Section>
    </Container>
  );
}

export default withTheme(ProgressIndicatorExample);
