import * as React from "react";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "./Row";
import Config from "./Config";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  subtitle?: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const RowBodyIcon: React.FC<Props> = ({
  Icon,
  title,
  subtitle,
  icon,
  style,
  theme: { colors, typography },
}) => {
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
          style={{ marginLeft: 16 }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowBodyIcon);

export const SEED_DATA = [
  {
    name: "Row Single Line Body Icon",
    tag: "RowBodyIcon",
    description: "A row with left aligned body text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyIcon.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Body Icon",
    tag: "RowBodyIcon",
    description:
      "A row with left aligned body text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_BodyIcon.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
        required: false,
      },
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
];
