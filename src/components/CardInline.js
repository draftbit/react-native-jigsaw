import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  ELEVATION_TYPE,
} from "../core/component-types";
import Config from "./Config";

class CardInline extends React.PureComponent {
  static defaultProps = {
    image: Config.cardImageUrl,
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3,
  };

  render() {
    const {
      image,
      title,
      description,
      textCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress,
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
              aspectRatio,
            }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              alignItems: textCentered ? "center" : "flex-start",
              bottom: numColumns === 1 ? spacing.medium : spacing.large,
              left: spacing.large,
              right: spacing.large,
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
                  { color: colors.lightInverse, marginTop: spacing.text },
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

const SEED_DATA_PROPS = {
  image: {
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.remoteImage,
    defaultValue: null,
    editable: true,
  },
  title: {
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
  },
  textCentered: {
    label: "Text centered",
    description: "Whether to center the text",
    formType: FORM_TYPES.boolean,
    defaultValue: false,
    editable: true,
  },
  elevation: ELEVATION_TYPE,
};

export const SEED_DATA = [
  {
    name: "Small Card (Inline)",
    tag: "CardInline",
    description:
      "An elevated card with image and a centered line of text overlayed, that takes up a third of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_Inline_1col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1,
        editable: true,
      },
      numColumns: {
        formType: FORM_TYPES.number,
        defaultValue: 1,
        editable: false,
      },
    },
    layout: {},
  },
  {
    name: "Medium Card (Inline)",
    tag: "CardInline",
    description:
      "An elevated card with image and a title and description overlayed, that takes up half of its container.",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Card_Inline_2col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      description: {
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: {
        formType: FORM_TYPES.number,
        defaultValue: 2,
        editable: false,
      },
    },
    layout: {},
  },
  {
    name: "Large Card (Inline)",
    tag: "CardInline",
    description:
      "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_Inline_3col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      description: {
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: {
        formType: FORM_TYPES.number,
        defaultValue: 3,
        editable: false,
      },
    },
    layout: {},
  },
];
