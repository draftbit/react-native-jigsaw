import React from "react";
import { View, Text } from "react-native";
import color from "color";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  COMPONENT_TYPES,
  ELEVATION_TYPE,
} from "../core/component-types";
import Config from "./Config";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

class CardContainer extends React.PureComponent {
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
      textCentered,
      icon,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress,
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
              overflow: "hidden",
              backgroundColor: colors.surface,
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
                    justifyContent: textJustification,
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
                      numColumns === 3 ? spacing.text : spacing.text / 2,
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

export default withTheme(CardContainer);

const SEED_DATA_PROPS = {
  image: {
    label: "Image",
    description: "Image",
    type: FORM_TYPES.remoteImage,
    value: null,
    editable: true,
    required: true,
    group: GROUPS.data,
  },
  title: {
    label: "Title",
    description: "Text to display",
    type: FORM_TYPES.string,
    value: "Beautiful West Coast Villa",
    editable: true,
    required: false,
    group: GROUPS.data,
  },
  leftDescription: {
    label: "Left description",
    description: "Text to display on the left",
    type: FORM_TYPES.string,
    value: "San Diego",
    editable: true,
    group: GROUPS.data,
  },
  rightDescription: {
    label: "Right description",
    description: "Text to display on the right",
    type: FORM_TYPES.string,
    value: "$100",
    editable: true,
    group: GROUPS.data,
  },
  icon: {
    label: "Icon",
    description: "Icon to display on the top right",
    type: FORM_TYPES.icon,
    value: null,
    editable: true,
    group: GROUPS.basic,
  },
  aspectRatio: {
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    type: FORM_TYPES.aspectRatio,
    value: 1.5,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  textCentered: {
    label: "Centered Text",
    description: "Whether to center the text",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  elevation: ELEVATION_TYPE,
};

export const SEED_DATA = [
  {
    name: "Medium Card",
    tag: "CardContainer",
    description:
      "An elevated card with a title and description, that takes up half of its container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        type: FORM_TYPES.number,
        value: 2,
        editable: false,
        group: GROUPS.basic,
      },
    },
  },
  {
    name: "Large Card",
    tag: "CardContainer",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        type: FORM_TYPES.number,
        value: 3,
        editable: false,
        group: GROUPS.basic,
      },
    },
  },
];
