import * as React from "react";
import { withTheme } from "../theming";
import { COMPONENT_TYPES, FORM_TYPES } from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "./Row";
import Config from "./Config";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  image: string | ImageSourcePropType;
  subtitle?: string;
  multilineSubtitle?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const RowHeadlineImageIcon: React.FC<Props> = ({
  Icon,
  icon,
  title,
  image,
  subtitle,
  multilineSubtitle = false,
  style,
  theme: { colors, typography },
}) => {
  return (
    <Row
      titleTypeStyle={typography.headline6}
      titleColor={colors.strong}
      subtitleTypeStyle={typography.body2}
      subtitleColor={colors.medium}
      title={title}
      subtitle={subtitle}
      multilineSubtitle={multilineSubtitle}
      image={image}
      right={() => (
        <Icon
          name={icon}
          size={
            multilineSubtitle
              ? Config.rowMultiLineIconSize
              : Config.rowSingleLineIconSize
          }
          color={colors.light}
          style={{
            marginLeft: 16,
            alignSelf: multilineSubtitle ? "flex-start" : "center",
            marginTop: multilineSubtitle ? 4 : 0,
          }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageIcon);

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Single Line Headline Icon Image",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image and headline text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIconImage.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.image,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineImageIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.image,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Multiline Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and multiline subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      multilineSubtitle: {
        formType: FORM_TYPES.boolean,
        defaultValue: true,
        editable: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Multiline Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image, headline text, and multiline subtitle text, and a right aligned icon",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineImageIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.image,
        defaultValue: null,
        editable: true,
      },
      multilineSubtitle: {
        formType: FORM_TYPES.boolean,
        defaultValue: true,
        editable: false,
      },
    },
    layout: {},
  },
];
