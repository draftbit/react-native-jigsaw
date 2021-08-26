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
import Image from "./Image";
import Surface from "./Surface";
import { Title, Subtitle, Caption } from "./Typography";

import { withTheme } from "../theming";
import Config from "./Config";

import {
  COMPONENT_TYPES,
  createElevationType,
  createTextProp,
  createImageProp,
  createIconProp,
  createAspectRatioProp,
  createStaticBoolProp,
  createTextStyle,
  // Triggers,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

const ICON_SIZE = Config.cardIconSize;
const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;
const ICON_ELEVATION = Config.cardIconElevation;

export const TopRightCircleIcon = withTheme(
  ({
    Icon,
    icon,
    theme,
    onPress,
  }: {
    icon: string;
    theme: Theme;
    onPress?: () => void;
  } & IconSlot) => {
    return (
      <Surface
        style={{
          justifyContent: "center",
          alignItems: "center",
          elevation: ICON_ELEVATION,
          position: "absolute",
          top: 12,
          right: 12,
          width: ICON_CONTAINER_SIZE,
          height: ICON_CONTAINER_SIZE,
          padding: ICON_CONTAINER_PADDING,
          borderRadius: ICON_CONTAINER_SIZE,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
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
          <Icon name={icon} size={ICON_SIZE} color={theme.colors.surface} />
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
  theme: Theme;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressIcon?: () => void;
  children?: React.ReactNode;
} & IconSlot;

const Card: React.FC<Props> = ({
  Icon,
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
  children,
}) => {
  const {
    backgroundColor: bgColor,
    padding,
    ...styles
  } = StyleSheet.flatten(style || {});

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
            {children}
          </View>
        </View>
        {icon ? (
          <TopRightCircleIcon Icon={Icon} icon={icon} onPress={onPressIcon} />
        ) : null}
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
  triggers: ["ON_PRESS"], // ON_PRESS_ICON
  props: {
    elevation: createElevationType(3),
    image: createImageProp(),
    title: createTextProp({
      label: "Title",
      description: "Large title text",
      // defaultValue: "Title",
      defaultValue: null,
    }),
    titleStyle: createTextStyle({
      label: "Title Style",
    }),
    subtitle: createTextProp({
      label: "Subtitle",
      description: "Text underneath the title",
      defaultValue: null,
      // defaultValue: "Edit me in the props panel on the right",
    }),
    subtitleStyle: createTextStyle({
      label: "Subtitle Style",
    }),
    description: createTextProp({
      label: "Description",
      description: "Smallest text underneath subtitle",
      // defaultValue:
      // "This bottom text is optional, but shows up to make your life a little easier!",
      defaultValue: null,
    }),
    descriptionStyle: createTextStyle({
      label: "Description Style",
    }),
    icon: createIconProp(),
    aspectRatio: createAspectRatioProp({
      defaultValue: 1.5,
    }),
    textCentered: createStaticBoolProp({
      label: "Centered Text",
      description: "Places your title and subtitle in the center",
    }),
  },
};
