import * as React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../core/theming";

import Slider, { Props as SliderProps } from "./Slider";
import {
  GROUPS,
  FORM_TYPES,
  COMPONENT_TYPES,
  FIELD_NAME,
} from "../core/component-types";

type Props = {
  title?: string;
  minimumLabel: string;
  maximumLabel: string;
  style?: StyleProp<ViewStyle>;
} & SliderProps;

const FieldSlider: React.FC<Props> = ({
  title,
  minimumLabel,
  maximumLabel,
  style,
  theme: { colors, typography, spacing },
  ...props
}) => {
  const labelStyle = [typography.caption, { color: colors.light }];

  return (
    <View style={[styles.container, style]}>
      {title && (
        <Text style={[typography.body1, { marginBottom: spacing.text / 2 }]}>
          {title}
        </Text>
      )}
      <Slider
        style={{
          width: style ? (style as ViewStyle).width : 0,
          height: style ? (style as ViewStyle).height : 0,
        }}
        {...props}
      />
      <View style={[styles.bottomContainer, { marginTop: spacing.text }]}>
        <Text style={[labelStyle, { flex: 1 }]}>{minimumLabel}</Text>
        <Text style={labelStyle}>{props.value}</Text>
        <Text style={[labelStyle, { flex: 1, textAlign: "right" }]}>
          {maximumLabel}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(FieldSlider);

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const SEED_DATA = {
  name: "Slider Field",
  tag: "FieldSlider",
  description:
    "A component used to set a value in a range, along with a title and label text",
  category: COMPONENT_TYPES.field,
  preview_image_url: "{CLOUDINARY_URL}/Field_Slider.png",
  supports_list_render: false,
  props: {
    title: {
      group: GROUPS.data,
      label: "Title",
      description: "Title to show above slider",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      defaultValue: "Title",
    },
    minimumLabel: {
      group: GROUPS.basic,
      label: "Minimum label",
      description: "Label to show below left side of slider",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      defaultValue: "0",
    },
    maximumLabel: {
      group: GROUPS.basic,
      label: "Maximum label",
      description: "Label to show below right side of slider",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      defaultValue: "10",
    },
    disabled: {
      group: GROUPS.basic,
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
      defaultValue: 1,
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
    thumbTouchSize: {
      group: GROUPS.basic,
      label: "Hit Slop",
      description: "The size of the hit slop",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 40,
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
