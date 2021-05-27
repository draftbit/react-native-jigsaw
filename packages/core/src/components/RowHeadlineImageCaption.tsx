import * as React from "react";
import { Text, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
} from "@draftbit/types";
import Row from "./Row";
import theme from "../styles/DefaultTheme";

type Props = {
  title?: string;
  subtitle?: string;
  caption?: string;
  image: string | ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
};

const RowHeadlineImageCaption: React.FC<Props> = ({
  title,
  subtitle,
  caption,
  image,
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
      image={image}
      right={() => (
        <Text
          style={{
            ...typography.caption,
            color: colors.strong,
            marginLeft: 16,
          }}
        >
          {caption}
        </Text>
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageCaption);

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned headline text and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineCaption.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      caption: {
        group: GROUPS.data,
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "$100",
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Single Line Headline Image Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned image and headline text and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url:
      "{CLOUDINARY_URL}/Row_SingleLine_HeadlineImageCaption.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      caption: {
        group: GROUPS.data,
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "$100",
        editable: true,
        required: false,
      },
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.image,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned headline text and subtitle text and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineCaption.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Headline text to display",
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
      caption: {
        group: GROUPS.data,
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "$100",
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Image Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned image, headline text, and subtitle text, and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineCaption.png",
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Headline text to display",
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
      caption: {
        group: GROUPS.data,
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "$100",
        editable: true,
        required: false,
      },
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.image,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
];
