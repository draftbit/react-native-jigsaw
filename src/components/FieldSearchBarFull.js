import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
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
        group: GROUPS.basic,
        label: "Icon",
        description: "Left icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      placeholder: {
        group: GROUPS.basic,
        label: "Placeholder",
        description: "Input placeholder text",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Search for...",
        editable: true,
        required: false,
      },
      onSubmit: {
        group: GROUPS.basic,
        label: "Submit action",
        description: "Action to execute on submission",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "searchBarValue",
      },
    },
    layout: {},
  },
];
