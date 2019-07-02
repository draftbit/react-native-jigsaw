/* @flow */

import * as React from "react"
import { Text } from "react-native"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import Row from "./Row"
import type { Theme } from "../types"

type Props = {
  title: string,
  subtitle?: string,
  caption: string,
  image: string | { uri: string },
  style?: any,
  theme: Theme
}

class RowHeadlineImageCaption extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      caption,
      image,
      style,
      theme: { colors, typography, spacing }
    } = this.props

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
              marginLeft: spacing.large
            }}>
            {caption}
          </Text>
        )}
        style={style}
      />
    )
  }
}

export default withTheme(RowHeadlineImageCaption)

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Caption",
    tag: "RowHeadlineImageCaption",
    description: "A row with left aligned headline text and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineCaption.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      caption: {
        label: "Caption",
        description: "Caption text to display",
        type: FORM_TYPES.string,
        value: "$100",
        editable: true
      }
    },
    layout: {}
  },
  {
    name: "Row Single Line Headline Image Caption",
    tag: "RowHeadlineImageCaption",
    description: "A row with left aligned image and headline text and right aligned caption text",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineImageCaption.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      caption: {
        label: "Caption",
        description: "Caption text to display",
        type: FORM_TYPES.string,
        value: "$100",
        editable: true
      },
      image: {
        label: "Image",
        description: "Image to display",
        type: FORM_TYPES.remoteImage,
        value: null,
        editable: true
      }
    },
    layout: {}
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
        label: "Title",
        description: "Headline text to display",
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
      caption: {
        label: "Caption",
        description: "Caption text to display",
        type: FORM_TYPES.string,
        value: "$100",
        editable: true
      }
    },
    layout: {}
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
        label: "Title",
        description: "Headline text to display",
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
      caption: {
        label: "Caption",
        description: "Caption text to display",
        type: FORM_TYPES.string,
        value: "$100",
        editable: true
      },
      image: {
        label: "Image",
        description: "Image to display",
        type: FORM_TYPES.remoteImage,
        value: null,
        editable: true
      }
    },
    layout: {}
  }
]
