import React from "react";
import { Image, View, Text } from "react-native";
import color from "color";
import Card from "./Card";
import Elevation from "./Elevation";
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";
import Config from "./Config";
import type { Theme } from "../types";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2;

export type CardContainerProps = {
  image: string | { uri: string },
  title?: string,
  leftDescription?: string,
  rightDescription?: string,
  textCentered?: boolean,
  icon?: string,
  aspectRatio?: number,
  elevation: number,
  numColumns: 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
};

class CardContainer extends React.PureComponent<CardContainerProps> {
  static defaultProps = {
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3
  };

  render() {
    const {
      image,
      title,
      leftDescription,
      rightDescription,
      textCentered,
      icon,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props;

    let textJustification, titleStyle;
    if (textCentered && !rightDescription) {
      textJustification = "center";
    } else {
      textJustification = "space-between";
    }

    switch (numColumns) {
      case 2:
        titleStyle = typography.headline6;
        break;
      case 3:
        titleStyle = typography.headline5;
        break;
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <View
            style={{
              borderRadius: borderRadius.global,
              overflow: "hidden"
            }}
          >
            <Image
              style={{ aspectRatio }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
            <View style={{ padding: spacing.large }}>
              {title ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: textJustification
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={[titleStyle, { color: colors.strong }]}
                  >
                    {title}
                  </Text>
                </View>
              ) : null}
              {leftDescription ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: textJustification,
                    alignItems: "center",
                    marginTop:
                      numColumns === 3 ? spacing.text : spacing.text / 2
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={[typography.body2, { color: colors.medium }]}
                  >
                    {leftDescription}
                  </Text>
                  {rightDescription ? (
                    <Text
                      numberOfLines={1}
                      style={[typography.subtitle2, { color: colors.light }]}
                    >
                      {rightDescription}
                    </Text>
                  ) : null}
                </View>
              ) : null}
            </View>
            {icon && (
              <Elevation
                style={{
                  elevation: Config.cardIconElevation,
                  position: "absolute",
                  top: spacing.medium,
                  right: spacing.medium,
                  width: ICON_CONTAINER_SIZE,
                  height: ICON_CONTAINER_SIZE,
                  padding: ICON_CONTAINER_PADDING,
                  borderRadius: ICON_CONTAINER_SIZE,
                  backgroundColor: color(colors.strong)
                    .alpha(Config.cardIconBackgroundOpacity)
                    .rgb()
                    .string()
                }}
              >
                <Icon
                  name={icon}
                  size={Config.cardIconSize}
                  color={colors.surface}
                />
              </Elevation>
            )}
          </View>
        </Elevation>
      </Card>
    );
  }
}

export default withTheme(CardContainer);

export const SEED_DATA = [
  {
    name: "Medium contained card",
    tag: "CardContainer2Col",
    description:
      "An elevated card with a title and description, that takes up two thirds of its container.",
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
      icon: {
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: "cloud",
        editable: true
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: 1.5,
        editable: true
      },
      textCentered: {
        label: "Text centered",
        description: "Whether to center the text",
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
    name: "Large contained card",
    tag: "CardContainer3Col",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: "card",
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096706/draftbit/library/jigsaw-1.0/reps/Card_Container_3col.png",
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
      icon: {
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: "cloud",
        editable: true
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        type: FORM_TYPES.aspectRatio,
        value: 1.5,
        editable: true
      },
      textCentered: {
        label: "Text centered",
        description: "Whether to center the text",
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
