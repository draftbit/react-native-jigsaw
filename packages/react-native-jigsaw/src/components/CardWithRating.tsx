import React from "react";
import {
  ImageSourcePropType,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Image from "./Image";
import Surface from "./Surface";
import StarRating from "./StarRating";
import { withTheme } from "../core/theming";
import { TopRightCircleIcon } from "./Card";
import { Title, Subtitle, Caption } from "./Typography";
import { Row } from "./Layout";
import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createElevationType,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  icon?: string;
  rating: number;
  aspectRatio?: number;
  elevation?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TexStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  captionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardWithRating: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  icon,
  rating,
  aspectRatio = 1.5,
  elevation = 2,
  style,
  titleStyle,
  subtitleStyle,
  captionStyle,
  onPress,
}) => {
  return (
    <Surface style={[{ elevation }, style]}>
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
        <View style={{ padding: 16 }}>
          {title ? <Title text={title} style={titleStyle} /> : null}
          {leftDescription ? (
            <Subtitle text={leftDescription} style={subtitleStyle} />
          ) : null}
          <View style={{ marginTop: 8 }}>
            <Row justifyContent="space-between" alignItems="center">
              {rating ? <StarRating starSize={16} rating={rating} /> : null}
              {rightDescription ? (
                <Caption text={rightDescription} style={captionStyle} />
              ) : null}
            </Row>
          </View>
        </View>
        {icon ? <TopRightCircleIcon icon={icon} /> : null}
      </Pressable>
    </Surface>
  );
};

export default withTheme(CardWithRating);

export const SEED_DATA = {
  name: "Card with Rating",
  tag: "CardWithRating",
  description:
    "An elevated card with a title and description, that takes up its full container.",
  category: COMPONENT_TYPES.card,
  layout: {},
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
  },
};
