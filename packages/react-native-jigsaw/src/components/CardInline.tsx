import React from "react";
import {
  Pressable,
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Image from "./Image";
import Surface from "./Surface";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createElevationType,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { Title, Subtitle } from "./Typography";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  description?: string;
  textCentered: boolean;
  aspectRatio?: number;
  elevation?: number;
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
  style,
  onPress,
  ...props
}) => {
  return (
    <Surface style={[{ elevation }, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: "#000",
        }}
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
        <LinearGradient
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
          colors={["transparent", "rgba(0, 0, 0, 0.2)"]}
          locations={[0.5, 1]}
        >
          <View
            style={{
              position: "absolute",
              alignItems: textCentered ? "center" : "flex-start",
              bottom: 16,
              left: 16,
              right: 16,
            }}
          >
            {title ? (
              <Title theme={{ colors: { text: "white" } }} text={title} />
            ) : null}
            {description ? (
              <Subtitle
                theme={{ colors: { medium: "rgba(255, 255, 255, 0.8)" } }}
                text={description}
              />
            ) : null}
          </View>
        </LinearGradient>
      </Pressable>
    </Surface>
  );
};

export default withTheme(CardInline);

export const SEED_DATA = [
  {
    name: "Inline Card",
    tag: "CardInline",
    description:
      "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
    category: COMPONENT_TYPES.card,
    layout: {},
    props: {
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
      description: {
        group: GROUPS.data,
        label: "Description",
        description: "Subtitle text",
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
      textCentered: {
        group: GROUPS.basic,
        label: "Text centered",
        description: "Whether to center the text",
        formType: FORM_TYPES.boolean,
        defaultValue: false,
        editable: true,
      },
      elevation: createElevationType(2),
    },
  },
];
