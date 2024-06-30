import * as React from "react";
import StepIndicator from "./StepIndicator";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  numberOfSteps: number;
  currentStep: number;
  currentStepStrokeWidth?: number;
  stepStrokeCurrentColor?: string;
  stepIndicatorSize?: number;
  currentStepIndicatorSize?: number;
  stepIndicatorCurrentColor?: string;
  stepIndicatorLabelCurrentColor?: string;
  stepIndicatorLabelFontSize?: number;
  stepNumberFinishedColor?: string;
  stepNumberUnfinishedColor?: string;
  unfinishedColor?: string;
  finishedColor?: string;
  theme: ReadTheme;
};

const ProgressIndicator: React.FC<React.PropsWithChildren<Props>> = ({
  numberOfSteps,
  currentStep,
  currentStepStrokeWidth = 3,
  stepStrokeCurrentColor = "primary",
  stepIndicatorSize,
  currentStepIndicatorSize,
  stepIndicatorCurrentColor,
  stepIndicatorLabelCurrentColor,
  stepIndicatorLabelFontSize = 12,
  stepNumberFinishedColor = "strongInverse",
  stepNumberUnfinishedColor = "primary",
  unfinishedColor = "light",
  finishedColor = "primary",
  theme,
}) => {
  const currentPosition = currentStep - 1;
  return (
    <StepIndicator
      stepCount={numberOfSteps}
      currentPosition={currentPosition}
      customStyles={{
        stepIndicatorSize,
        currentStepIndicatorSize: currentStepIndicatorSize
          ? currentStepIndicatorSize
          : stepIndicatorSize,
        stepStrokeFinishedColor: finishedColor,
        stepStrokeUnFinishedColor: unfinishedColor,
        separatorFinishedColor: finishedColor,
        separatorUnFinishedColor: unfinishedColor,
        stepIndicatorFinishedColor: finishedColor,
        stepIndicatorUnFinishedColor: unfinishedColor,
        currentStepStrokeWidth,
        stepStrokeCurrentColor:
          stepStrokeCurrentColor || stepIndicatorCurrentColor,
        stepIndicatorLabelUnFinishedColor: stepNumberUnfinishedColor,
        stepIndicatorLabelFinishedColor: stepNumberFinishedColor,
        stepIndicatorCurrentColor: stepIndicatorCurrentColor || unfinishedColor,
        stepIndicatorLabelCurrentColor:
          stepIndicatorLabelCurrentColor || stepNumberUnfinishedColor,
        stepIndicatorLabelFontSize,
        labelFontFamily: theme.typography.body1.fontFamily,
      }}
    />
  );
};

export default withTheme(ProgressIndicator);
