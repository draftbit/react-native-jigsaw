import * as React from "react";
import ReactNativeSlider from "@react-native-community/slider";

import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  COMPONENT_TYPES,
  FIELD_NAME,
  PROP_TYPES,
} from "../core/component-types";
import { StyleProp, ViewStyle } from "react-native";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "../types";

export interface Props {
  style?: StyleProp<ViewStyle>;
  value?: number;
  minimumTrackTintColor: colorTypes;
  maximumTrackTintColor: colorTypes;
  thumbTintColor: colorTypes;
  disabledThumbTintColor?: colorTypes;
  minimumValue: number;
  maximumValue: number;
  //thumbTouchSize: number;
  step: number;
  disabled?: boolean;
  onValueChange?: (value: number) => void;
  theme: typeof themeT;
  //trackBorderRadius?: number;
  //thumbBorderRadius?: number;
  //thumbSize: number;
}

const Slider: React.FC<Props> = ({
  style = { height: 4 },
  value,
  minimumTrackTintColor = "light",
  maximumTrackTintColor = "primary",
  thumbTintColor = "primary",
  disabledThumbTintColor = "strong",
  minimumValue = 0,
  maximumValue = 10,
  step = 1,
  theme,
  disabled = false,
  onValueChange = () => {},

  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(0);

  return (
    <ReactNativeSlider
      {...props}
      disabled={disabled}
      value={disabled ? 0 : value || internalValue}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={theme.colors[minimumTrackTintColor]}
      maximumTrackTintColor={theme.colors[maximumTrackTintColor]}
      thumbTintColor={
        disabled && disabledThumbTintColor
          ? theme.colors[disabledThumbTintColor]
          : theme.colors[thumbTintColor]
      }
      onValueChange={(newValue: number) => {
        onValueChange(newValue);
        setInternalValue(newValue);
      }}
      style={disabled ? [style, { opacity: 0.6 }] : style}
      step={step}
    />
  );
};

export default withTheme(Slider);

export const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  props: {
    disabled: {
      group: GROUPS.data,
      label: "Disabled",
      description: "Whether the slider is disabled",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: null,
    },
    maximumValue: {
      group: GROUPS.basic,
      label: "Maximum value",
      description: "The maximum value of the slider",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 1000000,
      step: 1,
      precision: 0,
      defaultValue: 10,
    },
    minimumValue: {
      group: GROUPS.basic,
      label: "Minimum value",
      description: "The minimum value of the slider",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: -1000000,
      max: 1000000,
      step: 1,
      precision: 0,
      defaultValue: 0,
    },
    step: {
      group: GROUPS.basic,
      label: "Step",
      description: "The amount the value should change per step",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
      defaultValue: null,
    },
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "sliderValue",
      handlerPropName: "onValueChange",
    },
    maximumTrackTintColor: {
      group: GROUPS.basic,
      label: "Maximum Color",
      description: "Color of the track from the right of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: "primary",
    },
    minimumTrackTintColor: {
      group: GROUPS.basic,
      label: "Minimum Color",
      description: "Color of the track from the left of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: "light",
    },
    thumbTintColor: {
      group: GROUPS.basic,
      label: "Thumb Tint Color",
      description: "Color of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: "primary",
    },
    disabledThumbTintColor: {
      group: GROUPS.basic,
      label: "Disabled Thumb Tint Color",
      description: "Color of the thumb when the slider is disabled",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: "strong",
    },
    thumbTouchSize: {
      group: GROUPS.advanced,
      label: "Hit Slop",
      description: "The size of the hit slop",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 2,
      defaultValue: 4,
    },
    trackBorderRadius: {
      group: GROUPS.basic,
      label: "Track Border Radius",
      description: "The border radius for the track ",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 50,
      step: 1,
      precision: 0,
      defaultValue: 4,
    },
    thumbBorderRadius: {
      group: GROUPS.basic,
      label: "Thumb Border Radius",
      description: "The border radius for the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 50,
      step: 1,
      precision: 0,
      defaultValue: 4,
    },
    thumbSize: {
      group: GROUPS.basic,
      label: "Thumb Size",
      description: "Size of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 2,
      defaultValue: 8,
    },
  },
  layout: {},
};
