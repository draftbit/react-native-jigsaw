import * as React from "react";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import { withTheme } from "../theming";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "@draftbit/types";

type Props = {
  progress?: number;
  style?: StyleProp<ViewStyle>;
  color?: colorTypes;
  size?: number;
  showsText?: boolean;
  unfilledColor?: colorTypes;
  strokeCap?: "butt" | "square" | "round" | undefined;
  textStyle?: StyleProp<TextStyle>;
  thickness?: number;
  theme: typeof themeT;
};

const ProgressCircle: React.FC<Props> = ({
  progress = 0.5,
  style,
  color = "primary",
  size = 100,
  showsText = true,
  unfilledColor,
  strokeCap = "butt",
  textStyle,
  thickness = 1,
  theme,
}) => {
  const progressNum = Math.round(progress * 100);

  const tintColor = color || theme.colors.primary;
  const backgroundColor = unfilledColor || theme.colors.secondary;

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

export default withTheme(ProgressCircle);

export const SEED_DATA = {
  name: "Progress Circle",
  tag: "ProgressCircle",
  description: "A circle used to show completed progress",
  category: COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Status_Progress.png",
  supports_list_render: false,
  props: {
    progress: {
      group: GROUPS.data,
      label: "Progress",
      description: "The amount of progress to display. A number 0-1.",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
      precision: 2,
      editable: true,
      required: true,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Color for the progress shown",
      editable: true,
      defaultValue: "primary",
      required: true,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
    },
    unfilledColor: {
      group: GROUPS.basic,
      label: "Unfilled Color",
      description:
        "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
      editable: true,
      defaultValue: null,
      required: true,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
    },
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "The size of the circle",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 100,
      min: 0,
      max: 300,
      step: 1,
      precision: 1,
      editable: true,
      required: true,
    },
    showsText: {
      group: GROUPS.basic,
      label: "Show Progress Text",
      description: "Shows progress in the middle of the circle",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: true,
      required: true,
    },
    textStyle: {
      group: GROUPS.basic,
      label: "Text Style",
      description: "Text Style of the inner circle",
      editable: true,
      required: true,
      formType: FORM_TYPES.typeStyle,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    thickness: {
      group: GROUPS.basic,
      label: "Thickness",
      description: "Thickness of the inner circle",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 1,
      min: 0,
      max: 15,
      step: 1,
      precision: 1,
      editable: true,
      required: true,
    },
    strokeCap: {
      group: GROUPS.basic,
      label: "Stroke Cap",
      description: "The style of the stroke",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "butt",
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
