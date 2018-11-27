/* @flow */

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Slider from "./Slider";
import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";

type Props = {
  title?: string,
  minimumLabel?: string,
  maximumLabel?: string,
  disabled?: boolean,
  maximumValue?: number,
  minimumValue?: number,
  step?: number,
  onValueChange: () => void,
  value: number,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
};

class FieldSlider extends React.Component {
  render() {
    const {
      title,
      minimumLabel,
      maximumLabel,
      style,
      theme,
      ...props
    } = this.props;
    const { colors, typography, spacing } = theme;

    const labelStyle = [typography.caption, { color: colors.light }];

    return (
      <View>
        {title && (
          <Text style={[typography.body1, { marginBottom: spacing.text / 2 }]}>
            {title}
          </Text>
        )}
        <Slider {...props} />
        <View style={[styles.bottomContainer, { marginTop: spacing.text }]}>
          <Text style={[labelStyle, { flex: 1 }]}>{minimumLabel}</Text>
          <Text style={labelStyle}>{this.props.value}</Text>
          <Text style={[labelStyle, { flex: 1, textAlign: "right" }]}>
            {maximumLabel}
          </Text>
        </View>
      </View>
    );
  }
}

export default withTheme(FieldSlider);

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export const SEED_DATA = {
  name: "Slider Field",
  tag: "FieldSlider",
  description:
    "A component used to set a value in a range, along with a title and label text",
  category: COMPONENT_TYPES.formControl,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/v1541096666/draftbit/library/jigsaw-1.0/reps/Control_Slider.png",
  supports_list_render: false,
  props: {
    title: {
      label: "Title",
      description: "Title to show above slider",
      editable: true,
      required: false,
      type: FORM_TYPES.string,
      value: "Title"
    },
    minimumLabel: {
      label: "Minimum label",
      description: "Label to show below left side of slider",
      editable: true,
      required: false,
      type: FORM_TYPES.string,
      value: "0"
    },
    maximumLabel: {
      label: "Maximum label",
      description: "Label to show below right side of slider",
      editable: true,
      required: false,
      type: FORM_TYPES.string,
      value: "10"
    },
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
      value: 1
    },
    onValueChange: {
      label: "Slider onValueChange function",
      description: "Function to run when slider is moved",
      editable: true,
      type: FORM_TYPES.function,
      value: "{this.onValueChange}"
    },
    value: {
      label: "Value",
      description: "Slider value",
      editable: true,
      type: FORM_TYPES.number,
      min: -1000000,
      max: 1000000,
      step: 0.01,
      precision: 2,
      value: 5
    }
  },
  layout: {
    width: 343,
    height: 72
  }
};
