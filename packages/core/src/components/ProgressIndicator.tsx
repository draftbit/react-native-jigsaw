import * as React from "react";
import StepIndicator from "./StepIndicator";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "@draftbit/types";

type Props = {
  numberOfSteps: number;
  currentStep: number;
  currentStepStrokeWidth?: number;
  stepStrokeCurrentColor?: colorTypes;
  stepIndicatorSize?: number;
  currentStepIndicatorSize?: number;
  stepIndicatorCurrentColor?: colorTypes;
  stepIndicatorLabelCurrentColor?: colorTypes;
  stepIndicatorLabelFontSize?: number;
  stepNumberFinishedColor?: colorTypes;
  stepNumberUnfinishedColor?: colorTypes;
  unfinishedColor?: colorTypes;
  finishedColor?: colorTypes;
  theme: typeof themeT;
};

const ProgressIndicator: React.FC<Props> = ({
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

export const SEED_DATA = {
  name: "Progress Indicator",
  tag: "ProgressIndicator",
  description: "A component used to show current Step in a process",
  category: COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  layout: {},
  props: {
    numberOfSteps: {
      group: GROUPS.data,
      label: "Number of Steps",
      description: "The border radius for the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      defaultValue: 5,
    },
    currentStep: {
      group: GROUPS.data,
      label: "Current Step",
      description: "The step that the user is on",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      defaultValue: 5,
    },
    stepIndicatorSize: {
      group: GROUPS.basic,
      label: "Step Size",
      description: "The size of the step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      defaultValue: 25,
    },
    stepIndicatorLabelFontSize: {
      group: GROUPS.basic,
      label: "Step Font Size",
      description: "The font size of the step number",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 6,
      max: 36,
      step: 1,
      precision: 0,
      defaultValue: 15,
    },
    currentStepIndicatorLabelFontSize: {
      group: GROUPS.basic,
      label: "Current Step Font Size",
      description: "The font size of the current step number",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 6,
      max: 36,
      step: 1,
      precision: 0,
      defaultValue: 15,
    },
    unfinishedColor: {
      group: GROUPS.basic,
      label: "Unfinished Color",
      description:
        "The color of the step and divider when the step is either not the current step or not finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    finishedColor: {
      group: GROUPS.basic,
      label: "Finished Color",
      description:
        "The color of the step and divider when the step is the current step or finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    stepNumberUnfinishedColor: {
      group: GROUPS.basic,
      label: "Unfinished Number Color",
      description: "The color of the number within the step when unfinished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    stepNumberFinishedColor: {
      group: GROUPS.basic,
      label: "Finished Number Color",
      description: "The color of the number within the step when finished",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    stepIndicatorCurrentColor: {
      group: GROUPS.basic,
      label: "Current Step Color",
      description: "The color of current step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    stepIndicatorLabelCurrentColor: {
      group: GROUPS.basic,
      label: "Current Step Number Color",
      description: "The color of current number within the step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    stepStrokeCurrentColor: {
      group: GROUPS.basic,
      label: "Current Step Border Color",
      description: "The color of current border color of the step",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    currentStepStrokeWidth: {
      group: GROUPS.basic,
      label: "Current Step Border Width",
      description: "The width of the border for the current step",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 1,
      max: 20,
      step: 1,
      precision: 0,
      defaultValue: 0,
    },
    currentStepIndicatorSize: {
      group: GROUPS.basic,
      label: "Current Step Size",
      description: "The size of the current step circle",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      defaultValue: null,
    },
  },
};
