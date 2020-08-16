import * as React from "react";
// TODO replace this with community slider
import { default as ReactNativeSlider } from "react-native-slider";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  COMPONENT_TYPES,
  FIELD_NAME,
} from "../core/component-types";

const Slider = ({
  style,
  value,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  disabledThumbTintColor,
  minimumValue,
  maximumValue,
  thumbTouchSize,
  step,
  disabled,
  onValueChange = () => {},
  theme,
  trackBorderRadius,
  thumbBorderRadius,
  thumbSize,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(0);

  const thumbStyle = {
    borderRadius: thumbBorderRadius || 0,
    width: thumbSize || (style && style.height ? style.height * 0.4 : null),
    height: thumbSize || (style && style.width ? style.width * 0.1 : null),
  };

  let actualThumbTouchSize = thumbSize + (thumbTouchSize || 0);

  return (
    <ReactNativeSlider
      {...props}
      disabled={disabled}
      value={disabled ? 0 : value || internalValue}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      thumbTintColor={
        disabled && disabledThumbTintColor
          ? disabledThumbTintColor
          : thumbTintColor
      }
      thumbTouchSize={{
        width: actualThumbTouchSize || 0,
        height: actualThumbTouchSize || 0,
      }}
      onValueChange={(newValue) => {
        onValueChange(newValue);
        setInternalValue(newValue);
      }}
      trackStyle={{
        borderRadius: trackBorderRadius ? trackBorderRadius : 0,
        width: style ? style.width : "100%",
        height: style ? style.height : null,
      }}
      thumbStyle={thumbStyle}
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
      defaultValue: null,
    },
    minimumTrackTintColor: {
      group: GROUPS.basic,
      label: "Minimum Color",
      description: "Color of the track from the left of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      defaultValue: null,
    },
    thumbTintColor: {
      group: GROUPS.basic,
      label: "Thumb Tint Color",
      description: "Color of the thumb",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      defaultValue: null,
    },
    disabledThumbTintColor: {
      group: GROUPS.basic,
      label: "Disabled Thumb Tint Color",
      description: "Color of the thumb when the slider is disabled",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      defaultValue: null,
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
      defaultValue: null,
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
      defaultValue: 10,
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
      defaultValue: 10,
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
      defaultValue: null,
    },
  },
  layout: {},
};
