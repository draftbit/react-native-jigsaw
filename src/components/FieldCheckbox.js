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
  status: "checked" | "unchecked" | "indeterminate",
  disabled?: boolean,
  color?: string,
  onPress?: () => mixed
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

    let titleColor = status === "checked" ? colors.medium : colors.light;

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string();
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={styles.container}>
          <Checkbox
            status={status}
            disabled={disabled}
            onPress={onPress}
            color={checkboxColor}
          />
          <Text
            style={[
              typography.body1,
              { marginLeft: spacing.medium, color: titleColor }
            ]}
          >
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default withTheme(FieldCheckbox);

export const SEED_DATA = [
  {
    name: "Field Checkbox",
    tag: "FieldCheckbox",
    description: "A row with left aligned checkbox and body",
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096663/draftbit/library/jigsaw-1.0/reps/Field_Checkbox.png",
    category: COMPONENT_TYPES.field,
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
        label: "Status",
        description: "Status of checkbox",
        required: true,
        editable: true,
        value: "checked",
        type: FORM_TYPES.flatArray,
        options: ["checked", "unchecked", "indeterminate"]
      },
      color: {
        label: "Color",
        description: "Custom color for the checkbox",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      onPress: {
        label: "onPress handler",
        description: "Function that handles checking or unchecking",
        editable: true,
        required: false,
        value: "{this.onPress}",
        type: FORM_TYPES.function
      },
      disabled: {
        label: "Disabled",
        description: "Whether checkbox and headline is disabled",
        editable: true,
        required: false,
        value: false,
        type: FORM_TYPES.boolean
      }
    },
    layout: {
      width: 343,
      height: 59
    }
  }
];
