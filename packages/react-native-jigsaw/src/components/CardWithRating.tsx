import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import Image from "./Image";
import CardWrapper from "./CardWrapper";
import Surface from "./Surface";
import StarRating from "./StarRating";
import { withTheme } from "../core/theming";
import { TopRightCircleIcon } from "./Card";
import { Title, Subtitle, Caption } from "./Typography";
import { Spacer, Row } from "./Layout";
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
  textCentered: boolean;
  icon?: string;
  rating: number;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
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
  numColumns = 3,
  theme,
  style,
  onPress,
  ...rest
}) => {
  return (
    <CardWrapper
      style={style}
      onPress={onPress}
      numColumns={numColumns}
      {...rest}
    >
      <Surface style={{ elevation }}>
        <Image
          style={{ aspectRatio }}
          source={typeof image === "string" ? { uri: image } : image}
          resizeMode="cover"
        />
        <Spacer all={numColumns === 1 ? 8 : 16}>
          {title ? <Title text={title} /> : null}
          {leftDescription ? <Subtitle text={leftDescription} /> : null}
          <Spacer top={8} left={0} right={0} bottom={0}>
            <Row justifyContent="space-between" alignItems="center">
              <StarRating
                starSize={numColumns === 1 ? 12 : 16}
                rating={rating}
              />
              {rightDescription ? <Caption text={rightDescription} /> : null}
            </Row>
          </Spacer>
        </Spacer>
        {icon ? <TopRightCircleIcon icon={icon} /> : null}
      </Surface>
    </CardWrapper>
  );
};

export default withTheme(CardWithRating);

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
    tag: "CardWithRating",
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
    tag: "CardWithRating",
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
