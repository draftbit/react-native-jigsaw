import React from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Image from "./Image";
import CardWrapper from "./CardWrapper";
import Surface from "./Surface";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createElevationType,
  createNumColumnsType,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  description?: string;
  textCentered: boolean;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardInline: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  description,
  textCentered,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, borderRadius, typography },
  style,
  onPress,
  ...rest
}) => {
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
    <CardWrapper
      style={style}
      onPress={onPress}
      numColumns={numColumns}
      {...rest}
    >
      <Elevation style={{ elevation, borderRadius: borderRadius }}>
        <LinearGradient
          style={{ flex: 1 }}
          colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
        >
          <Image
            resizeMode="cover"
            source={typeof image === "string" ? { uri: image } : image}
            style={{
              borderRadius,
              aspectRatio,
            }}
          />
          <View
            style={{
              position: "absolute",
              alignItems: textCentered ? "center" : "flex-start",
              bottom: numColumns === 1 ? 12 : 16,
              left: 16,
              right: 16,
            }}
          >
            {title ? (
              <Text
                numberOfLines={1}
                style={[titleStyle, { color: colors.text }]}
              >
                {title}
              </Text>
            ) : null}
            {description ? (
              <Text
                numberOfLines={1}
                style={[descriptionStyle, { color: colors.text, marginTop: 2 }]}
              >
                {description}
              </Text>
            ) : null}
          </View>
        </LinearGradient>
      </Elevation>
    </CardWrapper>
  );
};

export default withTheme(CardInline);

const SEED_DATA_PROPS = {
  image: {
    group: GROUPS.data,
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.remoteImage,
    defaultValue: null,
    editable: true,
  },
  title: {
    group: GROUPS.data,
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
  },
  textCentered: {
    group: GROUPS.basic,
    label: "Text centered",
    description: "Whether to center the text",
    formType: FORM_TYPES.boolean,
    defaultValue: false,
    editable: true,
  },
  elevation: createElevationType(2),
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
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 1,
      }),
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
        group: GROUPS.data,
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 2,
      }),
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
        group: GROUPS.data,
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 3,
      }),
    },
    layout: {},
  },
];
