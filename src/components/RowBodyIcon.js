/* @flow */

import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Row from "./Row";
import Icon from "./Icon";
import Config from "./Config";
import type { Theme } from "../types";

type Props = {
  title: string,
  subtitle?: string,
  icon: string,
  style?: any,
  theme: Theme
};

class RowBodyIcon extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      icon,
      style,
      theme: { colors, typography, spacing }
    } = this.props;

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => (
          <Icon
            name={icon}
            size={Config.rowSingleLineIconSize}
            color={colors.light}
            style={{ marginLeft: spacing.large }}
          />
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowBodyIcon);

export const SEED_DATA = [
  {
    name: "Row Single Line Body Icon",
    tag: "RowBodyIcon",
    description: "A row with left aligned body text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/draftbit/library/jigsaw-1.0/reps/Row_SingleLine_BodyIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: "favorite",
        editable: true
      }
    },
    layout: {
      width: 375,
      height: 59
    }
  },
  {
    name: "Row Double Line Body Icon",
    tag: "RowBodyIcon",
    description:
      "A row with left aligned body text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/draftbit/library/jigsaw-1.0/reps/Row_DoubleLine_BodyIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: "favorite",
        editable: true
      }
    },
    layout: {
      width: 375,
      height: 81
    }
  }
];
