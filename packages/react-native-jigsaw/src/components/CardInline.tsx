import React from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
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
  theme: { colors, roundness, typography },
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
    <Card style={style} onPress={onPress} numColumns={numColumns} {...rest}>
      <Elevation style={{ elevation, borderRadius: roundness }}>
        <Image
          style={{
            borderRadius: roundness,
            aspectRatio,
          }}
          source={typeof image === "string" ? { uri: image } : image}
          resizeMode="cover"
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
              style={[titleStyle, { color: colors.strongInverse }]}
            >
              {title}
            </Text>
          ) : null}
          {description ? (
            <Text
              numberOfLines={1}
              style={[
                descriptionStyle,
                { color: colors.lightInverse, marginTop: 4 },
              ]}
            >
              {description}
            </Text>
          ) : null}
        </View>
      </Elevation>
    </Card>
  );
};

export default withTheme(CardInline);

const SEED_DATA_PROPS = {
  image: {
    group: GROUPS.data,
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.image,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
  },
  title: {
    group: GROUPS.data,
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
  },
  textCentered: {
    group: GROUPS.basic,
    label: "Text centered",
    description: "Whether to center the text",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
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
    supports_list_render: true,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 1,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 1,
      }),
    },
  },
  {
    name: "Medium Card (Inline)",
    tag: "CardInline",
    description:
      "An elevated card with image and a title and description overlayed, that takes up half of its container.",
    category: COMPONENT_TYPES.deprecated,
    supports_list_render: true,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      description: {
        group: GROUPS.data,
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 2,
      }),
    },
  },
  {
    name: "Large Card (Inline)",
    tag: "CardInline",
    description:
      "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
    category: COMPONENT_TYPES.card,
    supports_list_render: true,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      description: {
        group: GROUPS.data,
        label: "Left description",
        description: "Text to display on the left",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "San Diego",
        editable: true,
      },
      aspectRatio: {
        group: GROUPS.basic,
        label: "Aspect ratio",
        description: "Aspect ratio of the image",
        formType: FORM_TYPES.aspectRatio,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 1.5,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 3,
      }),
    },
  },
];
