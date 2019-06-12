import * as React from "react"
import { Platform } from "react-native"
import * as Progress from "react-native-progress"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import { withTheme } from "../core/theming"

const ProgressBar = ({
  progress,
  borderRadius,
  animationType,
  color,
  unfilledColor,
  borderColor,
  borderWidth,
  style
}) => {
  return (
    <Progress.Bar
      progress={progress}
      color={color}
      unfilledColor={unfilledColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      width={style.width}
      height={style.height}
      borderRadius={borderRadius}
      animationType={animationType}
      style
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
        editable: true,
        required: true
      },
      color: {
        label: "Progress Color",
        description: "Custom color for the progress shown",
        type: FORM_TYPES.color,
        value: null,
        editable: true,
        required: true
      },
      unfilledColor: {
        label: "Unfilled Color",
        description:
          "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
        type: FORM_TYPES.color,
        value: null,
        editable: true,
        required: true
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
        type: FORM_TYPES.color,
        value: null,
        editable: true,
        required: true
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
