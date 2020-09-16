import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
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
  PROP_TYPES,
  COMPONENT_TYPES,
  createElevationType,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

interface Props {
  image?: string | Blob;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  textCentered: boolean;
  icon?: string;
  rating: number;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const CardContainerRating: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  icon,
  rating,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, borderRadius, typography, spacing },
  style,
  onPress,
}) => {
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
            backgroundColor: colors.background,
            //background color is needed for bug on android 9 - https://github.com/facebook/react-native/issues/25093
          }}
        >
          <Image
            style={{ aspectRatio }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
          <View
            style={{
              padding: numColumns === 1 ? spacing.small : spacing.large,
            }}
          >
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
              <StarRating
                starSize={numColumns === 1 ? 10 : 16}
                rating={rating}
              />
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
};

export default withTheme(CardContainerRating);

const SEED_DATA_PROPS = {
  image: {
    group: GROUPS.data,
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.remoteImage,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false,
  },
  title: {
    group: GROUPS.data,
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
    required: false,
  },
  leftDescription: {
    group: GROUPS.data,
    label: "Left description",
    description: "Text to display on the left",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "San Diego",
    editable: true,
    required: false,
  },
  rightDescription: {
    group: GROUPS.data,
    label: "Right description",
    description: "Text to display on the right",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "$100",
    editable: true,
    required: false,
  },
  icon: {
    group: GROUPS.basic,
    label: "Icon",
    description: "Icon to display on the top right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false,
  },
  aspectRatio: {
    group: GROUPS.basic,
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    formType: FORM_TYPES.aspectRatio,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 1.5,
    editable: true,
    required: false,
  },
  rating: {
    group: GROUPS.data,
    label: "Rating",
    description: "Number of stars to show. A number 0-5.",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 5,
    min: 0,
    max: 5,
    step: 1,
    precision: 0,
    editable: true,
    required: false,
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
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_2col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        description: "Numbre of columns",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 2,
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Large Card (Rating)",
    tag: "CardContainerRating",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_3col.png",
    supports_list_render: true,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        label: "Number of Columns",
        description: "Numbre of columns",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 3,
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
];
