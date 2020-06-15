import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import Icon from "./Icon";
import Config from "./Config";

class FieldSearchBarFull extends React.Component {
  state = {
    focused: false,
  };

  static defaultProps = {
    icon: "search",
  };

  clearText = () => {
    this.setState({ value: "" });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  onChange = (value) => {
    this.props.onChange && this.props.onChange(value);
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  render() {
    const {
      icon,
      placeholder,
      style,
      theme: { colors, spacing, typography },
      onChange,
      value,
    } = this.props;

    const { focused } = this.state;

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
          onChange={onChange}
          onSubmitEditing={this.onSubmit}
          placeholderTextColor={colors.light}
          style={[
            typeStyle,
            {
              color: colors.medium,
              marginLeft: spacing.medium,
              flex: 1,
              justifyContent: "center",
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(FieldSearchBarFull);

export const SEED_DATA = [
  {
    name: "Search Bar",
    tag: "FieldSearchBarFull",
    description: "A search bar with accompanying search icon and clear button.",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Field_SearchBar_Full.png",
    supports_list_render: false,
    props: {
      icon: {
        label: "Icon",
        description: "Left icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true,
        required: false,
      },
      placeholder: {
        label: "Placeholder",
        description: "Input placeholder text",
        type: FORM_TYPES.string,
        value: "Type something...",
        editable: true,
        required: false,
      },
      onSubmit: {
        label: "Submit action",
        description: "Action to execute on submission",
        editable: true,
        type: FORM_TYPES.action,
        value: null,
      },
      fieldName: {
        ...FIELD_NAME,
        value: "searchBarValue",
      },
    },
    layout: {},
  },
];
