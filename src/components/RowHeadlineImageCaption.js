import * as React from "react";
import { Text } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Row from "./Row";

class RowHeadlineImageCaption extends React.Component {
  render() {
    const {
      title,
      subtitle,
      caption,
      image,
      style,
      theme: { colors, typography, spacing },
    } = this.props;

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
              marginLeft: spacing.large,
            }}
          >
            {caption}
          </Text>
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowHeadlineImageCaption);

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned headline text and right aligned caption text",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineCaption.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      caption: {
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        defaultValue: "$100",
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Single Line Headline Image Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned image and headline text and right aligned caption text",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url:
      "{CLOUDINARY_URL}/Row_SingleLine_HeadlineImageCaption.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      caption: {
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        defaultValue: "$100",
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.remoteImage,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned headline text and subtitle text and right aligned caption text",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineCaption.png",
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
      caption: {
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        defaultValue: "$100",
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Image Caption",
    tag: "RowHeadlineImageCaption",
    description:
      "A row with left aligned image, headline text, and subtitle text, and right aligned caption text",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineCaption.png",
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
      caption: {
        label: "Caption",
        description: "Caption text to display",
        formType: FORM_TYPES.string,
        defaultValue: "$100",
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.remoteImage,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
];
