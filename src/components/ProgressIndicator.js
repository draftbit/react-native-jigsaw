import * as React from "react";
import StepIndicator from "expo-step-indicator";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

const ProgressIndicator = ({
  numberOfSteps,
  currentStep,
  currentStepStrokeWidth,
  stepStrokeCurrentColor,
  stepIndicatorSize,
  currentStepIndicatorSize,
  stepIndicatorCurrentColor,
  stepIndicatorLabelCurrentColor,
  stepIndicatorLabelFontSize,
  stepNumberFinishedColor,
  stepNumberUnfinishedColor,
  unfinishedColor,
  finishedColor,
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
        stepStrokeCurrentColor: stepStrokeCurrentColor
          ? stepStrokeCurrentColor
          : stepIndicatorCurrentColor,
        stepIndicatorLabelUnFinishedColor: stepNumberUnfinishedColor,
        stepIndicatorLabelFinishedColor: stepNumberFinishedColor,
        stepIndicatorCurrentColor: stepIndicatorCurrentColor
          ? stepIndicatorCurrentColor
          : unfinishedColor,
        stepIndicatorLabelCurrentColor: stepIndicatorLabelCurrentColor
          ? stepIndicatorLabelCurrentColor
          : stepNumberFinishedColor,
        stepIndicatorLabelFontSize,
        labelFontFamily: theme.typography.default,
      }}
    />
  );
};

export default withTheme(ProgressIndicator);

export const SEED_DATA = {
  name: "Progress Indicator",
  tag: "ProgressIndicator",
  description: "A component used to show current Step in a process",
  category: COMPONENT_TYPES.formControl,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  layout: {},
  props: {
    numberOfSteps: {
      label: "Number of Steps",
      description: "The border radius for the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      value: 5,
    },
    currentStep: {
      label: "Current Step",
      description: "The step that the user is on",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      value: 5,
    },
    stepIndicatorSize: {
      label: "Step Size",
      description: "The size of the step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      value: 25,
    },
    stepIndicatorLabelFontSize: {
      label: "Step Font Size",
      description: "The font size of the step number",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 10,
      max: 50,
      step: 1,
      precision: 0,
      value: 15,
    },
    currentStepIndicatorLabelFontSize: {
      label: "Current Step Font Size",
      description: "The font size of the current step number",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 10,
      max: 50,
      step: 1,
      precision: 0,
      value: 15,
    },
    unfinishedColor: {
      label: "Unfinished Color",
      description:
        "The color of the step and divider when the step is either not the current step or not finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    finishedColor: {
      label: "Finished Color",
      description:
        "The color of the step and divider when the step is the current step or finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    stepNumberUnfinishedColor: {
      label: "Unfinished Number Color",
      description: "The color of the number within the step when unfinished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    stepNumberFinishedColor: {
      label: "Finished Number Color",
      description: "The color of the number within the step when finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    stepIndicatorCurrentColor: {
      label: "Current Step Color",
      description: "The color of current step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    stepIndicatorLabelCurrentColor: {
      label: "Current Step Number Color",
      description: "The color of current number within the step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    stepStrokeCurrentColor: {
      label: "Current Step Border Color",
      description: "The color of current border color of the step",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      value: null,
    },
    currentStepStrokeWidth: {
      label: "Current Step Border Width",
      description: "The width of the border for the current step",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 1,
      max: 20,
      step: 1,
      precision: 0,
      value: 0,
    },
    currentStepIndicatorSize: {
      label: "Current Step Size",
      description: "The size of the current step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      value: null,
    },
  },
};
