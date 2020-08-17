import * as React from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

class Divider extends React.Component {
  render() {
    const {
      style,
      color,
      height,
      theme: { colors },
    } = this.props;

    return (
      <View
        style={[
          { backgroundColor: color || colors.divider },
          style,
          { height: height || StyleSheet.hairlineWidth },
        ]}
      />
    );
  }
}

export default withTheme(Divider);

export const SEED_DATA = [
  {
    name: "Divider",
    tag: "Divider",
    category: COMPONENT_TYPES.layout,
    description: "A horizontal line used to divide content",
    preview_image_url: "{CLOUDINARY_URL}/Divider.png",
    supports_list_render: false,
    props: {
      color: {
        group: GROUPS.basic,
        label: "Color",
        description: "The color of the divider",
        editable: true,
        required: false,
        defaultValue: "divider",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
      },
      height: {
        group: GROUPS.basic,
        label: "Height",
        description:
          "The height (thickness) of the divider. If not provided, defaults to StyleSheet.hairlineWidth.",
        editable: true,
        required: false,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 1,
        min: 1,
        max: 50,
        step: 1,
        precision: 0,
      },
    },
    layout: {
      height: 1,
    },
  },
];
