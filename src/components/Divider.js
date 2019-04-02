/* @flow */

import * as React from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "../core/theming";
import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";
import type { Theme } from "../types";

type Props = {
  style?: any,
  /**
   * @optional
   */
  theme: Theme
};

class Divider extends React.Component<Props> {
  render() {
    const {
      style,
      color,
      height,
      theme: { colors }
    } = this.props;

    return (
      <View
        style={[{ backgroundColor: color || colors.divider }, style, { height: height || StyleSheet.hairlineWidth }]}
      />
    );
  }
}

export default withTheme(Divider);

export const SEED_DATA = [
  {
    name: "Divider",
    tag: "Divider",
    category: COMPONENT_TYPES.primitive,
    description: "A horizontal line used to divide content",
    preview_image_url: "{CLOUDINARY_URL}/Divider.png",
    supports_list_render: false,
    props: {
      color: {
        label: "Color",
        editable: true,
        required: false,
        value: "divider",
        type: FORM_TYPES.color
      },
      height: {
        label: "Height",
        description: "The height (thickness) of the divider. If not provided, defaults to StyleSheet.hairlineWidth.",
        editable: true,
        required: false,
        type: FORM_TYPES.number,
        min: 1,
        max: 50,
        step: 1,
        precision: 0
      }
    },
    layout: {
      width: 343,
      height: 1
    }
  }
];
