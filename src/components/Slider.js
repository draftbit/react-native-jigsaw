import * as React from "react"
import { default as ReactNativeSlider } from "react-native-slider"
import { withTheme } from "../core/theming"
import { FORM_TYPES, COMPONENT_TYPES, FIELD_NAME } from "../core/component-types"

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
  onValueChange,
  theme,
  trackBorderRadius,
  thumbBorderRadius,
  thumbStyle,
  thumbSize,
  ...props
}) => {
  const thumbHeightSize = style.height * 0.4
  const thumbWidthSize = style.width * 0.1
  return (
    <ReactNativeSlider
      {...props}
      disabled={disabled}
      value={disabled ? 0 : value}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      thumbTintColor={disabled && disabledThumbTintColor ? disabledThumbTintColor : thumbTintColor}
      thumbTouchSize={{ width: thumbTouchSize, height: thumbTouchSize }}
      onValueChange={onValueChange}
      trackStyle={{
        borderRadius: trackBorderRadius ? trackBorderRadius : 0,
        width: style.width,
        height: style.height
      }}
      thumbStyle={{
        borderRadius: thumbBorderRadius ? thumbBorderRadius : 0,
        width: thumbSize ? thumbSize : thumbWidthSize,
        height: thumbSize ? thumbSize : thumbHeightSize
      }}
      style={disabled ? [{ ...style }, { opacity: 0.6 }] : style}
      step={step}
    />
  )
}

export default withTheme(Slider)

export const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  props: {
    disabled: {
      label: "Disabled",
      description: "Whether the slider is disabled",
      editable: true,
      required: false,
      type: FORM_TYPES.boolean,
      value: null
    },
    maximumValue: {
      label: "Maximum value",
      description: "The maximum value of the slider",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 1000000,
      step: 1,
      precision: 0,
      value: 10
    },
    minimumValue: {
      label: "Minimum value",
      description: "The minimum value of the slider",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: -1000000,
      max: 1000000,
      step: 1,
      precision: 0,
      value: 0
    },
    step: {
      label: "Step",
      description: "The amount the value should change per step",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
      value: null
    },
    fieldName: {
      ...FIELD_NAME,
      value: "sliderValue",
      handlerPropName: "onValueChange"
    },
    maximumTrackTintColor: {
      label: "Maximum Color",
      description: "Color of the track from the right of the thumb",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: null
    },
    minimumTrackTintColor: {
      label: "Minimum Color",
      description: "Color of the track from the left of the thumb",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: null
    },
    thumbTintColor: {
      label: "Thumb Tint Color",
      description: "Color of the thumb",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: null
    },
    disabledThumbTintColor: {
      label: "Disabled Thumb Tint Color",
      description: "Color of the thumb when the slider is disabled",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: null
    },
    thumbTouchSize: {
      label: "Hit Slop",
      description: "The size of the hit slop",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 2,
      value: null
    },
    trackBorderRadius: {
      label: "Track Border Radius",
      description: "The border radius for the track ",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 50,
      step: 1,
      precision: 0,
      value: 10
    },
    thumbBorderRadius: {
      label: "Thumb Border Radius",
      description: "The border radius for the thumb",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 50,
      step: 1,
      precision: 0,
      value: 10
    },
    thumbSize: {
      label: "Thumb Size",
      description: "Size of the thumb",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 2,
      value: null
    }
  },
  layout: {
    width: 375,
    height: 24
  }
}
