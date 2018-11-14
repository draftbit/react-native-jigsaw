import React from "react";
import { Image, View, Text } from "react-native";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Config from "./Config";
import type { Theme } from "../types";

export type CardInlineProps = {
  image: string | { uri: string },
  title?: string,
  description?: string,
  titleCentered?: boolean,
  aspectRatio?: number,
  elevation: number,
  numColumns: 1 | 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
};

class CardInline extends React.PureComponent<CardInlineProps> {
  static defaultProps = {
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3
  };

  render() {
    const {
      image,
      title,
      description,
      titleCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props;

    let titleStyle, descriptionStyle;
    switch (numColumns) {
      case 1:
        titleStyle = typography.headline6;
        descriptionStyle = typography.subtitle2;
        break;
      case 2:
        titleStyle = typography.headline5;
        descriptionStyle = typography.subtitle2;
        break;
      case 3:
        titleStyle = typography.headline4;
        descriptionStyle = typography.subtitle1;
        break;
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <Image
            style={{
              borderRadius: borderRadius.global,
              aspectRatio
            }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              alignItems: titleCentered ? "center" : "flex-start",
              bottom: numColumns === 1 ? spacing.medium : spacing.large,
              left: spacing.large,
              right: spacing.large
            }}
          >
            {title ? (
              <Text
                numberOfLines={1}
                style={[titleStyle, { color: colors.strongInverse }]}
              >
                {title}
              </Text>
            ) : null}
            {description ? (
              <Text
                numberOfLines={1}
                style={[
                  descriptionStyle,
                  { color: colors.lightInverse, marginTop: spacing.text }
                ]}
              >
                {description}
              </Text>
            ) : null}
          </View>
        </Elevation>
      </Card>
    );
  }
}

export default withTheme(CardInline);

export const SEED_DATA = [
  {
    name: "Small Inline Card",
    tag: "CardInline1Col",
    description:
      "An elevated card with image and a centered line of text overlayed, that takes up a third of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096714/draftbit/library/jigsaw-1.0/reps/Card_Inline_1col.png",
    supports_list_render: true,
    props: {
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
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: 1,
        editable: true
      },
      titleCentered: {
        label: "Title centered",
        description: "Whether to center the text.",
        type: FORM_TYPES.boolean,
        value: true,
        editable: true
      },
      elevation: {
        label: "Elevation",
        description: "Elevation of the card. A number 0-3.",
        type: FORM_TYPES.number,
        value: 2,
        min: 0,
        max: 3,
        step: 1,
        precision: 0,
        editable: true
      },
      numColumns: {
        type: FORM_TYPES.number,
        value: 1,
        editable: false
      }
    },
    layout: {
      width: 375,
      height: 296
    }
  },
  {
    name: "Medium Inline Card",
    tag: "CardInline2Col",
    description:
      "An elevated card with image and a title and description overlayed, that takes up two thirds of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096650/draftbit/library/jigsaw-1.0/reps/Card_Inline_2col.png",
    supports_list_render: true,
    props: {
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
      description: {
        label: "Left description",
        description: "Text to display on the left",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: 3 / 2,
        editable: true
      },
      titleCentered: {
        label: "Title centered",
        description: "Whether to center the text.",
        type: FORM_TYPES.boolean,
        value: false,
        editable: true
      },
      elevation: {
        label: "Elevation",
        description: "Elevation of the card. A number 0-3.",
        type: FORM_TYPES.number,
        value: 2,
        min: 0,
        max: 3,
        step: 1,
        precision: 0,
        editable: true
      },
      numColumns: {
        type: FORM_TYPES.number,
        value: 2,
        editable: false
      }
    },
    layout: {
      width: 375,
      height: 296
    }
  },
  {
    name: "Large Inline Card",
    tag: "CardInline3Col",
    description:
      "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096652/draftbit/library/jigsaw-1.0/reps/Card_Inline_3col.png",
    supports_list_render: true,
    props: {
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
      description: {
        label: "Left description",
        description: "Text to display on the left",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: 3 / 2,
        editable: true
      },
      titleCentered: {
        label: "Title centered",
        description: "Whether to center the text.",
        type: FORM_TYPES.boolean,
        value: false,
        editable: true
      },
      elevation: {
        label: "Elevation",
        description: "Elevation of the card. A number 0-3.",
        type: FORM_TYPES.number,
        value: 2,
        min: 0,
        max: 3,
        step: 1,
        precision: 0,
        editable: true
      },
      numColumns: {
        type: FORM_TYPES.number,
        value: 3,
        editable: false
      }
    },
    layout: {
      width: 375,
      height: 296
    }
  }
];
