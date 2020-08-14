import React from "react";
import { View, Text } from "react-native";
import color from "color";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import Icon from "./Icon";
import StarRating from "./StarRating";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  COMPONENT_TYPES,
  createElevationType,
} from "../core/component-types";
import Config from "./Config";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

class CardContainerRating extends React.PureComponent {
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
      leftDescription,
      rightDescription,
      icon,
      rating,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress,
    } = this.props;

    let titleStyle, rightDescriptionStyle;
    switch (numColumns) {
      case 2:
        titleStyle = typography.headline6;
        rightDescriptionStyle = typography.body2;
        break;
      case 3:
        titleStyle = typography.headline5;
        rightDescriptionStyle = typography.caption;
        break;
    }

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
          <View
            style={{
              borderRadius: borderRadius.global,
              overflow: "hidden",
            }}
          >
            <Image
              style={{ aspectRatio }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="contain"
            />
            <View style={{ padding: spacing.large }}>
              {title ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                <Text
                  numberOfLines={1}
                  style={[
                    typography.body2,
                    {
                      color: colors.medium,
                      marginTop:
                        numColumns === 3 ? spacing.text : spacing.text / 2,
                    },
                  ]}
                >
                  {leftDescription}
                </Text>
              ) : null}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: numColumns === 3 ? spacing.large : spacing.medium,
                }}
              >
                <StarRating rating={rating} />
                <Text
                  style={[
                    rightDescriptionStyle,
                    {
                      color: colors.medium,
                      marginLeft: spacing.small,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {rightDescription}
                </Text>
              </View>
            </View>
            {icon ? (
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
                    .string(),
                }}
              >
                <Icon
                  name={icon}
                  size={Config.cardIconSize}
                  color={colors.surface}
                />
              </Elevation>
            ) : null}
          </View>
        </Elevation>
      </Card>
    );
  }
}

export default withTheme(CardContainerRating);

const SEED_DATA_PROPS = {
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
    description: "Text to display",
    type: FORM_TYPES.string,
    value: "Beautiful West Coast Villa",
    editable: true,
  },
  leftDescription: {
    group: GROUPS.data,
    label: "Left description",
    description: "Text to display on the left",
    type: FORM_TYPES.string,
    value: "San Diego",
    editable: true,
  },
  rightDescription: {
    group: GROUPS.data,
    label: "Right description",
    description: "Text to display on the right",
    type: FORM_TYPES.string,
    value: "$100",
    editable: true,
  },
  icon: {
    group: GROUPS.basic,
    label: "Icon",
    description: "Icon to display on the top right",
    type: FORM_TYPES.icon,
    value: null,
    editable: true,
  },
  aspectRatio: {
    group: GROUPS.basic,
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    type: FORM_TYPES.aspectRatio,
    value: 1.5,
    editable: true,
  },
  rating: {
    group: GROUPS.data,
    label: "Rating",
    description: "Number of stars to show. A number 0-5.",
    type: FORM_TYPES.number,
    min: 0,
    max: 5,
    step: 1,
    precision: 0,
    editable: true,
  },
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Medium Card (Rating)",
    tag: "CardContainerRating",
    description:
      "An elevated card with a title and description, that takes up half of its container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        group: GROUPS.basic,
        type: FORM_TYPES.number,
        value: 2,
        editable: false,
      },
    },
  },
  {
    name: "Large Card (Rating)",
    tag: "CardContainerRating",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        group: GROUPS.basic,
        type: FORM_TYPES.number,
        value: 3,
        editable: false,
      },
    },
  },
];
