import React from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
} from "@draftbit/types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  subtitle?: string;
  mode?: "right" | "left";
  aspectRatio?: number;
  elevation?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardContainerShortImage: React.FC<Props> = ({
  image = Config.squareImageUrl,
  title,
  subtitle,
  mode = "left",
  aspectRatio = 1,
  elevation = 2,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  return (
    <Card style={style} onPress={onPress} {...rest}>
      <Elevation
        style={{
          elevation,
          borderRadius: roundness,
        }}
      >
        <View
          style={{
            overflow: "hidden",
            flexDirection: "row",
            justifyContent: mode === "right" ? "space-between" : "flex-start",
            borderRadius: roundness,
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
              padding: 16,
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
                  { color: colors.medium, marginTop: 4 },
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
};

export default withTheme(CardContainerShortImage);

export const SEED_DATA = [
  {
    name: "Short Card (Left)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a left aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortLeftImage.png",
    supports_list_render: true,
    props: {
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image",
        formType: FORM_TYPES.image,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Title to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
        required: false,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
        required: false,
      },
      elevation: createElevationType(2),
      mode: {
        group: GROUPS.uncategorized,
        label: "Image Side",
        description: "The side on which the image is on (left or right)",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "left",
        options: ["left", "right"],
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Short Card (Right)",
    tag: "CardContainerShortImage",
    description:
      "An elevated card with a right aligned image and a title and subtitle",
    category: COMPONENT_TYPES.card,
    preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortRightImage.png",
    supports_list_render: true,
    props: {
      image: {
        group: GROUPS.data,
        label: "Image",
        description: "Image",
        formType: FORM_TYPES.image,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Title to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
        required: false,
      },
      subtitle: {
        group: GROUPS.data,
        label: "Subtitle",
        description: "Subtitle to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
        required: false,
      },
      elevation: createElevationType(2),
      mode: {
        label: "Mode",
        description: "Mode",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "right",
        editable: false,
        required: false,
      },
    },
    layout: {},
  },
];
