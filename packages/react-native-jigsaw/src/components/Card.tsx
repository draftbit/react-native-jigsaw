import React from "react";
import {
  StyleSheet,
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import color from "color";
import Image from "./Image";
import Surface from "./Surface";
import Icon from "./Icon";
import { Title, Subtitle, Caption } from "./Typography";

import { withTheme } from "../core/theming";
import Config from "./Config";
import ThemeT from "../styles/DefaultTheme";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createElevationType,
  createTextType,
  createImageType,
  createIconType,
  createAspectRatioType,
} from "../core/component-types";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

export const TopRightCircleIcon = withTheme(
  ({
    icon,
    theme,
    onPress,
  }: {
    icon: string;
    theme: typeof ThemeT;
    onPress?: () => void;
  }) => {
    return (
      <Surface
        style={{
          justifyContent: "center",
          alignItems: "center",
          elevation: Config.cardIconElevation,
          position: "absolute",
          top: 12,
          right: 12,
          width: ICON_CONTAINER_SIZE,
          height: ICON_CONTAINER_SIZE,
          padding: ICON_CONTAINER_PADDING,
          borderRadius: ICON_CONTAINER_SIZE,
          backgroundColor: color(theme.colors.text)
            .alpha(Config.cardIconBackgroundOpacity)
            .rgb()
            .string(),
        }}
      >
        <Pressable
          disabled={!onPress}
          onPress={onPress}
          style={({ pressed }) => {
            return [
              {
                opacity: pressed ? 0.8 : 1,
              },
            ];
          }}
        >
          <Icon
            name={icon}
            size={Config.cardIconSize}
            color={theme.colors.surface}
          />
        </Pressable>
      </Surface>
    );
  }
);

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  subtitle?: string;
  description?: string;
  textCentered: boolean;
  icon?: string;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof ThemeT;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressIcon?: () => void;
};

const Card: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  subtitle,
  description,
  textCentered,
  icon,
  aspectRatio = 1.5,
  elevation = 2,
  style,
  onPress,
  onPressIcon,
  titleStyle,
  subtitleStyle,
  descriptionStyle,
  theme,
}) => {
  const { backgroundColor: bgColor, padding, ...styles } = StyleSheet.flatten(
    style || {}
  );

  const backgroundColor = bgColor ? bgColor : theme.colors.surface;
  const innerPadding = padding ? padding : 12;

  return (
    <Surface style={[{ elevation, backgroundColor }, styles]}>
      <Pressable
        disabled={!onPress}
        onPress={onPress}
        style={({ pressed }) => {
          return [
            {
              opacity: pressed ? 0.8 : 1,
            },
          ];
        }}
      >
        <Image
          style={{ aspectRatio }}
          source={typeof image === "string" ? { uri: image } : image}
          resizeMode="cover"
        />
        <View style={{ padding: innerPadding }}>
          <View style={{ alignItems: textCentered ? "center" : "flex-start" }}>
            {title || (title && title !== "") ? (
              <Title text={title} style={titleStyle} />
            ) : null}
            {subtitle || (subtitle && subtitle !== "") ? (
              <Subtitle text={subtitle} style={subtitleStyle} />
            ) : null}
            {description || (description && description !== "") ? (
              <View style={{ marginTop: 4 }}>
                <Caption text={description} style={descriptionStyle} />
              </View>
            ) : null}
          </View>
        </View>
        {icon ? <TopRightCircleIcon icon={icon} onPress={onPressIcon} /> : null}
      </Pressable>
    </Surface>
  );
};

export default withTheme(Card);

export const SEED_DATA = {
  name: "Card",
  tag: "Card",
  description: "A card you can customize however you'd like",
  category: COMPONENT_TYPES.card,
  props: {
    elevation: createElevationType(3),
    image: createImageType(),
    title: createTextType({
      label: "Title",
      description: "Large title text",
      defaultValue: "Title",
    }),
    subtitle: createTextType({
      label: "Subtitle",
      description: "Text underneath the title",
      defaultValue: "Edit me in the props panel on the right",
    }),
    description: createTextType({
      label: "Description",
      description: "Smallest text underneath subtitle",
      defaultValue:
        "This bottom text is optional, but shows up to make your life a little easier!",
    }),
    icon: createIconType(),
    aspectRatio: createAspectRatioType({
      defaultValue: 1.5,
    }),
    textCentered: {
      label: "Centered Text",
      description: "Whether to center the text",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: false,
      editable: true,
      required: false,
      group: GROUPS.basic,
    },
  },
};
