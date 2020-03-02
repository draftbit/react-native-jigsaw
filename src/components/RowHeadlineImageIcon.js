import * as React from "react"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"

import Row from "./Row"
import Icon from "./Icon"
import Config from "./Config"

class RowHeadlineImageIcon extends React.Component {
  render() {
    const {
      title,
      image,
      subtitle,
      multilineSubtitle,
      icon,
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
        multilineSubtitle={multilineSubtitle}
        image={image}
        right={() => (
          <Icon
            name={icon}
            size={multilineSubtitle ? Config.rowMultiLineIconSize : Config.rowSingleLineIconSize}
            color={colors.light}
            style={{
              marginLeft: spacing.large,
              alignSelf: multilineSubtitle ? "flex-start" : "center",
              marginTop: multilineSubtitle ? spacing.text : 0
            }}
          />
        )}
        style={style}
      />
    )
  }
}

export default withTheme(RowHeadlineImageIcon)

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description: "A row with left aligned headline text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true
      }
    },
    layout: {}
  },
  {
    name: "Row Single Line Headline Icon Image",
    tag: "RowHeadlineImageIcon",
    description: "A row with left aligned image and headline text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIconImage.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
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
    name: "Row Double Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description: "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineIcon.png",
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
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true
      }
    },
    layout: {}
  },
  {
    name: "Row Double Line Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description: "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineImageIcon.png",
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
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
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
    name: "Row Multiline Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and multiline subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineIcon.png",
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
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true
      },
      multilineSubtitle: {
        type: FORM_TYPES.boolean,
        value: true,
        editable: false
      }
    },
    layout: {}
  },
  {
    name: "Row Multiline Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image, headline text, and multiline subtitle text, and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineImageIcon.png",
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
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        type: FORM_TYPES.icon,
        value: null,
        editable: true
      },
      image: {
        label: "Image",
        description: "Image to display",
        type: FORM_TYPES.remoteImage,
        value: null,
        editable: true
      },
      multilineSubtitle: {
        type: FORM_TYPES.boolean,
        value: true,
        editable: false
      }
    },
    layout: {}
  }
]
