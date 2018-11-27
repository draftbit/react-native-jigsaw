/* @flow */
import * as React from "react";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import { StyleSheet, View, Text } from "react-native";
import Touchable from "./Touchable";
import Checkbox from "./Checkbox";
import type { Theme } from "../types";
import color from "color";


type Props = {|
  title: string,
  style?: any,
  theme: Theme,
  status: 'checked' | 'unchecked' | 'indeterminate',
  disabled?: boolean,
  color?: string,
  onPress?: () => mixed,
|};

class FieldCheckbox extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  };

  render() {
    const {
      title,
      status,
      onPress,
      color: checkboxColor,
      disabled,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props;

    let titleColor = status === 'checked' ? colors.medium : colors.light;

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string();
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={[styles.container,  { padding: spacing.large }]}>
          <Checkbox
            status={status}
            color={ status === 'checked' ? checkboxColor || colors.medium : checkboxColor || colors.light}
            disabled={disabled}
            onPress={onPress}
          />
          <View>
            <Text style={[, { color: titleColor }, typography.body1,
            { marginLeft: spacing.medium }, 
            ]}>
              {title}
            </Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

export default withTheme(FieldCheckbox);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export const SEED_DATA = [
  {
    name: "Field Single Line Body Checkbox",
    tag: "FieldCheckbox",
    description: "A row with left aligned checkbox and body",
    preview_image_url: "",
    category: COMPONENT_TYPES.row,
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      status: {
        label: "Checkbox status",
        description: "Status of checkbox",
        required: true,
        editable: false,
        value: 'checked',
        type: FORM_TYPES.flatArray,
        options: ['checked', 'unchecked', 'indeterminate']
      },
      color: {
        label: "Checkbox color",
        description: "Custom color for the checkbox",
        editable: true,
        required: false,
        type: FORM_TYPES.color,
      },
      onPress: {
        label: "OnPress handler",
        description: "function that handles checking or unchecking",
        editable: true,
        required: false,
        value: "{this.onPress}",
        type: FORM_TYPES.function,
      },
      disabled: {
        label: "Disable checkbox",
        description: "Whether checkbox and headline is disabled",
        editable: true,
        required: false,
        value: false,
        type: FORM_TYPES.boolean,
      },
    },
    layout: {
      width: 375,
      height: 59
    },
  },
];
