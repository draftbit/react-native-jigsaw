import React from "react"
import { Image, View, Text } from "react-native"
import Card from "./Card"
import Elevation from "./Elevation"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES, ELEVATION_TYPE } from "../core/component-types"
import type { Theme } from "../types"
import Config from "./Config"

export type CardBlockProps = {
  image: string | { uri: string },
  title?: string,
  leftDescription?: string,
  rightDescription?: string,
  titleCentered?: boolean,
  aspectRatio?: number,
  elevation: number,
  numColumns: 1 | 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
}

class CardBlock extends React.PureComponent<CardBlockProps> {
  static defaultProps = {
    image: Config.cardImageUrl,
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3
  }

  render() {
    const {
      image,
      title,
      leftDescription,
      rightDescription,
      titleCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props

    let titleJustification, titleStyle
    if (titleCentered && !leftDescription && !rightDescription) {
      titleJustification = "center"
    } else {
      titleJustification = "space-between"
    }

    if (numColumns === 1) {
      titleStyle = typography.button
    } else if (numColumns === 2) {
      titleStyle = typography.headline6
    } else {
      titleStyle = typography.headline5
    }

    const rightDescriptionStyles = [typography.subtitle2, { color: colors.light }]

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <View>
          <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
            <Image
              style={{
                borderRadius: borderRadius.global,
                aspectRatio
              }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          </Elevation>
          {title ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: titleJustification,
                marginTop: numColumns === 3 ? spacing.large : spacing.medium
              }}>
              <Text numberOfLines={1} style={[titleStyle, { color: colors.strong }]}>
                {title}
              </Text>
              {!leftDescription && rightDescription ? (
                <Text style={rightDescriptionStyles}>{rightDescription}</Text>
              ) : null}
            </View>
          ) : null}
          {leftDescription ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: numColumns === 3 ? spacing.text : spacing.text / 2
              }}>
              <Text numberOfLines={1} style={[typography.body2, { color: colors.medium }]}>
                {leftDescription}
              </Text>
              {rightDescription ? (
                <Text numberOfLines={1} style={rightDescriptionStyles}>
                  {rightDescription}
                </Text>
              ) : null}
            </View>
          ) : null}
        </View>
      </Card>
    )
  }
}

export default withTheme(CardBlock)

const SEED_DATA_PROPS = {
  image: {
    label: "Image",
    description: "Image",
    type: FORM_TYPES.remoteImage,
    value: null,
    editable: true
  },
  title: {
    label: "Title",
    description: "Text to display",
    type: FORM_TYPES.string,
    value: "Beautiful West Coast Villa",
    editable: true
  },
  leftDescription: {
    label: "Left description",
    description: "Text to display on the left",
    type: FORM_TYPES.string,
    value: "San Diego",
    editable: true
  },
  rightDescription: {
    label: "Right description",
    description: "Text to display on the right",
    type: FORM_TYPES.string,
    value: "$100",
    editable: true
  },
  aspectRatio: {
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    type: FORM_TYPES.aspectRatio,
    value: 1.5,
    editable: true
  },
  titleCentered: {
    label: "Title centered",
    description: "Whether to center the title",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true
  },
  elevation: ELEVATION_TYPE
}

export const SEED_DATA = [
  {
    name: "Small Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one third of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_Block_1col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        type: FORM_TYPES.number,
        value: 1,
        editable: false
      }
    },
    layout: {
      width: 109,
      height: 109
    }
  },
  {
    name: "Medium Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one half of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_Block_2col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: "MaterialIcons/cloud",
        editable: true
      },
      numColumns: {
        type: FORM_TYPES.number,
        value: 2,
        editable: false
      }
    },
    layout: {
      width: 167,
      height: 172
    }
  },
  {
    name: "Large Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up the full width its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_Block_3col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: "MaterialIcons/cloud",
        editable: true
      },
      numColumns: {
        type: FORM_TYPES.number,
        value: 3,
        editable: false
      }
    },
    layout: {
      width: 343,
      height: 296
    }
  }
]
