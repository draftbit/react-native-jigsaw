import * as React from "react";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import { Text } from "react-native";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import { withTheme } from "../core/theming";

const ProgressCircle = ({
  progress,
  style,
  color,
  size,
  showsText,
  unfilledColor,
  strokeCap,
  textStyle,
  thickness,
  theme,
}) => {
  const progressNum = Math.round(progress * 100);

  const tintColor = theme.colors[color || "primary"];
  const backgroundColor = theme.colors[unfilledColor || "secondary"];

  return (
    <AnimatedCircularProgress
      size={size}
      width={thickness}
      backgroundWidth={thickness}
      fill={progressNum}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      rotation={0}
      lineCap={strokeCap}
      style={style}
    >
      {(fill) =>
        showsText ? (
          <Text
            style={[{ fontSize: size * 0.275, color: tintColor }, textStyle]}
          >
            {Math.round(fill)}%
          </Text>
        ) : null
      }
    </AnimatedCircularProgress>
  );
};

ProgressCircle.defaultProps = {
  progress: 0.5,
  color: "primary",
  size: 100,
  showsText: true,
  thickness: 1,
  strokeCap: "butt",
};

export default withTheme(ProgressCircle);

export const SEED_DATA = {
  name: "Progress Circle",
  tag: "ProgressCircle",
  description: "A circle used to show completed progress",
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
      required: true,
    },
    color: {
      label: "Color",
      description: "Color for the progress shown",
      editable: true,
      value: "primary",
      required: true,
      type: FORM_TYPES.color,
    },
    unfilledColor: {
      label: "Unfilled Color",
      description:
        "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
      editable: true,
      value: null,
      required: true,
      type: FORM_TYPES.color,
    },
    size: {
      label: "Size",
      description: "The size of the circle",
      type: FORM_TYPES.number,
      value: 100,
      min: 0,
      max: 300,
      step: 1,
      precision: 1,
      editable: true,
      required: true,
    },
    showsText: {
      label: "Show Progress Text",
      description: "Shows progress in the middle of the circle",
      type: FORM_TYPES.boolean,
      value: true,
      editable: true,
      required: true,
    },
    textStyle: {
      label: "Text Style",
      description: "Text Style of the inner circle",
      editable: true,
      required: true,
      type: FORM_TYPES.typeStyle,
      value: null,
    },
    thickness: {
      label: "Thickness",
      description: "Thickness of the inner circle",
      type: FORM_TYPES.number,
      value: 1,
      min: 0,
      max: 15,
      step: 1,
      precision: 1,
      editable: true,
      required: true,
    },
    strokeCap: {
      label: "Stroke Cap",
      description: "The style of the stroke",
      type: FORM_TYPES.flatArray,
      value: "butt",
      options: ["butt", "square", "round"],
      editable: true,
      required: true,
    },
  },
  layout: {
    width: 250,
    height: 250,
  },
};
