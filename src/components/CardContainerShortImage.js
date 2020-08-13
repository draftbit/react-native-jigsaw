import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  ELEVATION_TYPE,
} from "../core/component-types";
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
    layout: null,
    props: {
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image",
        type: FORM_TYPES.remoteImage,
        value: null,
        editable: true,
      },
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Title to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: null,
        editable: true,
        required: false,
      },
      mode: {
        group: GROUPS.basic,
        label: "Image Side",
        description: "The side on which the image is on (left or right)",
        type: FORM_TYPES.flatArray,
        value: "left",
        options: ["left", "right"],
        editable: false,
      },
      ...ELEVATION_TYPE,
    },
  },
  {
    name: "Short Card (Right)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a right aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image",
        type: FORM_TYPES.remoteImage,
        value: null,
        editable: true,
      },
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Title to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true,
      },
      mode: {
        type: FORM_TYPES.string,
        value: "right",
        editable: false,
      },
      ...ELEVATION_TYPE,
    },
  },
];
