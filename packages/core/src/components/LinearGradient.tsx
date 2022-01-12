import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { extractStyles } from "../utilities";
import {
  createColorProp,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";

type LinearGradientComponentProps = {
  color1: string;
  color2: string;
  color3?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const LinearGradientComponent = ({
  children,
  color1,
  color2,
  color3 = undefined,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = 0,
  style,
}: LinearGradientComponentProps) => {
  const { viewStyles } = extractStyles(style);
  const colors = [color1, color2, color3].filter((color) => color) as string[];
  const start = { x: startX / 100, y: startY / 100 };
  const end = { x: endX / 100, y: endY / 100 };
  return (
    <LinearGradient colors={colors} start={start} end={end} style={viewStyles}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientComponent;

export const SEED_DATA = {
  name: "LinearGradient",
  tag: "LinearGradient",
  description: "Linear Gradient Component",
  props: {
    color1: createColorProp({
      label: "Color 1",
    }),
    color2: createColorProp({
      label: "Color 2",
    }),
    color3: createColorProp({
      label: "Color 3",
    }),
    startX: {
      group: GROUPS.basic,
      label: "Start X",
      description: "Start position from Left",
      editable: true,
      required: false,
      defaultValue: 0,
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
    },
    startY: {
      group: GROUPS.basic,
      label: "Start Y",
      description: "Start position from Top",
      editable: true,
      required: false,
      defaultValue: 0,
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
    },
    endX: {
      group: GROUPS.basic,
      label: "End Y",
      description: "End position from Right",
      editable: true,
      required: false,
      defaultValue: 100,
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
    },
    endY: {
      group: GROUPS.basic,
      label: "End Y",
      description: "End position from Bottom",
      editable: true,
      required: false,
      defaultValue: 100,
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
    },
  },
};
