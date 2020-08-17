import * as React from "react";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";
import Header from "./Header";

class HeaderOverline extends React.Component {
  static defaultProps = {
    onPress: () => {},
  };

  render() {
    const {
      title,
      buttonText,
      icon,
      onPress,
      style,
      theme: { colors, spacing, typography },
    } = this.props;

    return (
      <Header
        titleTypeStyle={typography.overline}
        titleColor={colors.light}
        title={title && title.toUpperCase()}
        buttonText={buttonText}
        icon={icon}
        dividerTopMargin={spacing.medium}
        onPress={onPress}
        style={style}
      />
    );
  }
}

export default withTheme(HeaderOverline);

export const SEED_DATA = [
  {
    name: "Header Overline",
    tag: "HeaderOverline",
    description:
      "A small header with an optional touchable right aligned text and icon.",
    category: COMPONENT_TYPES.header,
    preview_image_url: "{CLOUDINARY_URL}/Header_OverlineIconText.png",
    supports_list_render: false,
    props: {
      title: {
        groups: GROUPS.data,
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Title",
        editable: true,
        required: false,
      },
      buttonText: {
        groups: GROUPS.data,
        label: "Button text",
        description: "Right aligned button text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "See All",
        editable: true,
        required: false,
      },
      icon: {
        groups: GROUPS.basic,
        label: "Icon",
        description: "Name of icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      onPress: {
        groups: GROUPS.basic,
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
    },
    layout: {},
  },
];
