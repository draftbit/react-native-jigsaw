import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Config from "./Config";

class CardContainerShortImage extends React.PureComponent {
  static defaultProps = {
    image: Config.squareImageUrl,
    elevation: 2,
    aspectRatio: 1,
    mode: "left",
  };

  render() {
    const {
      image,
      title,
      subtitle,
      mode,
      aspectRatio,
      elevation,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress,
    } = this.props;

    return (
      <Card style={style} onPress={onPress}>
        <Elevation
          style={{
            elevation,
            borderRadius: borderRadius.global,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: mode === "right" ? "space-between" : "flex-start",
              borderRadius: borderRadius.global,
            }}
          >
            {mode === "left" && (
              <Image
                style={{ aspectRatio }}
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                padding: spacing.large,
                backgroundColor: colors.surface,
                flex: 1,
              }}
            >
              <Text
                numberOfLines={1}
                style={[typography.headline5, { color: colors.strong }]}
              >
                {title}
              </Text>
              {subtitle ? (
                <Text
                  numberOfLines={1}
                  style={[
                    typography.body2,
                    { color: colors.medium, marginTop: spacing.text },
                  ]}
                >
                  {subtitle}
                </Text>
              ) : null}
            </View>
            {mode === "right" && (
              <Image
                style={{ aspectRatio }}
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode="cover"
              />
            )}
          </View>
        </Elevation>
      </Card>
    );
  }
}

export default withTheme(CardContainerShortImage);

export const SEED_DATA = [
  {
    name: "Short Card (Left)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a left aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortLeftImage.png",
    supports_list_render: true,
    props: {
      image: {
        label: "Image",
        description: "Image",
        formType: FORM_TYPES.remoteImage,
        value: null,
        editable: true,
      },
      title: {
        label: "Title",
        description: "Title to display",
        formType: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        value: "San Diego",
        editable: true,
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        value: null,
        editable: true,
        required: false,
      },
      elevation: {
        label: "Elevation",
        description: "Elevation of the card. A number 0-3.",
        formType: FORM_TYPES.number,
        value: 2,
        min: 0,
        max: 3,
        step: 1,
        precision: 0,
        editable: true,
      },
      mode: {
        formType: FORM_TYPES.string,
        value: "left",
        editable: false,
      },
    },
    layout: {},
  },
  {
    name: "Short Card (Right)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a right aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortRightImage.png",
    supports_list_render: true,
    props: {
      image: {
        label: "Image",
        description: "Image",
        formType: FORM_TYPES.remoteImage,
        value: null,
        editable: true,
      },
      title: {
        label: "Title",
        description: "Title to display",
        formType: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        value: "San Diego",
        editable: true,
      },
      elevation: {
        label: "Elevation",
        description: "Elevation of the card. A number 0-3.",
        formType: FORM_TYPES.number,
        value: 2,
        min: 0,
        max: 3,
        step: 1,
        precision: 0,
        editable: true,
      },
      mode: {
        formType: FORM_TYPES.string,
        value: "right",
        editable: false,
      },
    },
    layout: {},
  },
];
