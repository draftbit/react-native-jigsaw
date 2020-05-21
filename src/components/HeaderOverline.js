import * as React from "react";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
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
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Title",
        editable: true,
      },
      buttonText: {
        label: "Button text",
        description: "Right aligned button text to display",
        type: FORM_TYPES.string,
        value: "See All",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Name of icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true,
      },
      onPress: {
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        type: FORM_TYPES.action,
        value: null,
      },
    },
    layout: {},
  },
];
