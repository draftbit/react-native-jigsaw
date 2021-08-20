import * as React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../theming";
import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "@draftbit/types";
import theme from "../styles/DefaultTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  // height?: number;
  theme: typeof theme;
};

const Divider: React.FC<Props> = ({
  style,
  color,
  // height,
  theme: { colors },
  ...rest
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: color || colors.divider,
          height: StyleSheet.hairlineWidth,
        },
        style,
      ]}
      {...rest}
    />
  );
};

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
      // height: {
      //   group: GROUPS.basic,
      //   label: "Height",
      //   description:
      //     "The height (thickness) of the divider. If not provided, defaults to StyleSheet.hairlineWidth.",
      //   editable: true,
      //   required: false,
      //   formType: FORM_TYPES.number,
      //   propType: PROP_TYPES.NUMBER,
      //   defaultValue: 1,
      //   min: 1,
      //   max: 50,
      //   step: 1,
      //   precision: 0,
      // },
    },
    layout: {
      height: 1,
    },
  },
];
