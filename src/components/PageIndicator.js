import * as React from "react"
import {} from "react-native"
import { withTheme } from "../core/theming"
import StepIndicator from "react-native-step-indicator"

const PageIndicator = ({
  stepCount,
  stepPosition,
  currentStepStrokeWidth,
  stepStrokeCurrentColor,
  stepIndicatorSize,
  unfinishedColor,
  finishedColor,
  fontTheme
}) => {
  const currentPosition = stepPosition - 1
  // const fontThemeFontFamily = fontTheme.fontFamily
  // const fontThemeFontSize = fontTheme.fontSize
  return (
    <StepIndicator
      stepCount={stepCount}
      customStyles={{
        stepIndicatorSize,
        stepStrokeFinishedColor: finishedColor,
        stepStrokeUnFinishedColor: unfinishedColor,
        separatorFinishedColor: finishedColor,
        separatorUnFinishedColor: unfinishedColor,
        stepIndicatorFinishedColor: finishedColor,
        stepIndicatorUnFinishedColor: unfinishedColor,
        currentStepStrokeWidth,
        stepStrokeCurrentColor
      }}
      currentPosition={currentPosition}
    />
  )
}

export default withTheme(PageIndicator)
