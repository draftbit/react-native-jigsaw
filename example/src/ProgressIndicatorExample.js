import * as React from "react";
import { ProgressIndicator, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function ProgressIndicatorExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="ProgressIndicator">
        <ProgressIndicator
          numberOfSteps={6}
          currentStep={3}
          currentStepStrokeWidth={0}
          stepIndicatorSize={16}
          stepIndicatorLabelFontSize={13}
          stepNumberFinishedColor={"#5a45ff"}
          stepNumberUnfinishedColor={"#ffffff"}
          unfinishedColor={"#eee"}
          finishedColor={"#fff"}
        />
      </Section>
    </Container>
  );
}

export default withTheme(ProgressIndicatorExample);
