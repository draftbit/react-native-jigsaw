/* @flow */

import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Icon from "./Icon";
import Config from "./Config";
import type { Theme } from "../types";

type Props = {
  icon: string,
  placeholder?: string,
  onSubmit: (text: string) => void,
  theme: Theme,
  style?: any
};

class FieldSearchBarFull extends React.Component<Props> {
  state = {
    focused: false,
    value: ""
  };

  static defaultProps = {
    icon: "search"
  };

  clearText = () => {
    this.setState({ value: "" });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  onChange = value => {
    this.setState({ value });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.value);
  };

  render() {
    const {
      icon,
      placeholder,
      onSubmit,
      style,
      theme: { colors, spacing, typography }
    } = this.props;

    const { focused, value } = this.state;

    const { lineHeight, ...typeStyle } = typography.body2;

    return (
      <View style={[{ padding: spacing.large }, styles.container, style]}>
        <Icon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={value}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit}
          placeholderTextColor={colors.light}
          style={[
            typeStyle,
            {
              color: colors.medium,
              marginLeft: spacing.medium,
              flex: 1,
              justifyContent: "center"
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default withTheme(FieldSearchBarFull);

export const SEED_DATA = [
  {
    name: "Search Bar",
    tag: "FieldSearchBarFull",
    description: "A search bar with accompanying search icon and clear button.",
    category: COMPONENT_TYPES.field,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096665/draftbit/library/jigsaw-1.0/reps/Field_SearchBar_Full.png",
    supports_list_render: false,
    props: {
      icon: {
        label: "Icon",
        description: "Left icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true,
        required: false
      },
      placeholder: {
        label: "Placeholder",
        description: "Input placeholder text",
        type: FORM_TYPES.string,
        value: "Type something...",
        editable: true,
        required: false
      },
      onSubmit: {
        label: "Input onSubmit function",
        description:
          "Function executed when the search is executed. The value of the input is passed as an argument.",
        type: FORM_TYPES.function,
        value: "{this.onSubmit}",
        editable: true
      }
    },
    layout: {
      width: 375,
      height: 56
    }
  }
];
