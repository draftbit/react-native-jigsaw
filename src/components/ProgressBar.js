import * as React from "react"
import * as Progress from "react-native-progress"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import { withTheme } from "../../core/theming"

const ProgressBar = ({
  progress,
  style,
  borderRadius,
  animationType,
  progressColor,
  unfilledColor,
  borderColor,
  borderWidth
}) => {
  return (
    <Progress.Bar
      progress={progress}
      color={progressColor}
      unfilledColor={unfilledColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      width={style.width}
      height={style.height}
      borderRadius={borderRadius}
      animationType={animationType}
    />
  )
}

export default withTheme(ProgressBar)

export const SEED_DATA = [
  {
    name: "Progress Bar",
    tag: "ProgressBar",
    description: "A horizontal bar used to show completed progress",
    category: COMPONENT_TYPES.formControl,
    preview_image_url: "{CLOUDINARY_URL}/Status_Progress.png",
    supports_list_render: false,
    props: {
      progress: {
        label: "Progress",
        description: "The amount of progress to display. A number 0-1.",
        type: FORM_TYPES.number,
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        precision: 2,
        editable: true
      },
      progressColor: {
        label: "Progress Color",
        description: "Custom color for the progress shown",
        editable: true,
        value: null,
        required: true,
        type: FORM_TYPES.color
      },
      unfilledColor: {
        label: "Unfilled Color",
        description:
          "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
        editable: true,
        value: null,
        required: true,
        type: FORM_TYPES.color
      },
      borderRadius: {
        label: "Border Radius",
        description: "The border radius of the bar",
        type: FORM_TYPES.number,
        value: 10,
        min: 0,
        max: 100,
        step: 1,
        precision: 1,
        editable: true,
        required: true
      },
      borderWidth: {
        label: "Border Width",
        description: "The width of the border that surrounds the bar.",
        type: FORM_TYPES.number,
        value: 1,
        min: 0,
        max: 15,
        step: 1,
        precision: 1,
        editable: true,
        required: true
      },
      borderColor: {
        label: "Border Color",
        description: "Custom color for border of the entire bar",
        editable: true,
        value: null,
        required: true,
        type: FORM_TYPES.color
      },
      animationType: {
        label: "Animation Type",
        description: "The type of animation that occurs when the bar is filled(Default is Spring)",
        type: FORM_TYPES.flatArray,
        value: "spring",
        options: ["decay", "timing", "spring"],
        editable: true,
        required: true
      }
    },
    layout: {
      width: 343,
      height: 2
    }
  }
]
