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
import Icon from "./Icon";
import { Title, Subtitle, Caption } from "./Typography";

import { withTheme } from "../core/theming";
import ThemeT from "../styles/DefaultTheme";
import Config from "./Config";

import {
  COMPONENT_TYPES,
  createElevationType,
  createTextType,
  createImageType,
  createIconType,
  createAspectRatioType,
  createActionType,
  createBoolType,
  createTextStyle,
} from "../core/component-types";

const ICON_SIZE = Config.cardIconSize;
const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;
const ICON_ELEVATION = Config.cardIconElevation;

export const TopRightCircleIcon = withTheme(
  ({
    icon,
    theme,
    onPress,
    IconOverride,
  }: {
    icon: string;
    theme: typeof ThemeT;
    onPress?: () => void;
    IconOverride: typeof Icon;
  }) => {
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
          <IconOverride
            name={icon}
            size={ICON_SIZE}
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
  IconOverride?: typeof Icon;
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
  IconOverride = null,
}) => {
  // Necessary to inject web-renderable Icons in buider.
  const SelectedIcon = IconOverride || Icon;

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
        {icon ? (
          <TopRightCircleIcon
            IconOverride={SelectedIcon}
            icon={icon}
            onPress={onPressIcon}
          />
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
  props: {
    elevation: createElevationType(3),
    image: createImageType(),
    onPress: createActionType(),
    onPressIcon: createActionType(),
    title: createTextType({
      label: "Title",
      description: "Large title text",
      defaultValue: "Title",
    }),
    titleStyle: createTextStyle({
      label: "Title Style",
    }),
    subtitle: createTextType({
      label: "Subtitle",
      description: "Text underneath the title",
      defaultValue: "Edit me in the props panel on the right",
    }),
    subtitleStyle: createTextStyle({
      label: "Subtitle Style",
    }),
    description: createTextType({
      label: "Description",
      description: "Smallest text underneath subtitle",
      defaultValue:
        "This bottom text is optional, but shows up to make your life a little easier!",
    }),
    descriptionStyle: createTextStyle({
      label: "Description Style",
    }),
    icon: createIconType(),
    aspectRatio: createAspectRatioType({
      defaultValue: 1.5,
    }),
    textCentered: createBoolType({
      label: "Centered Text",
      description: "Places your title and subtitle in the center",
    }),
  },
};
