import React from "react";
import {
  ImageSourcePropType,
  View,
  Text,
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
  createNumColumnsType,
} from "@draftbit/types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { justificationType } from "./Justification";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  titleCentered: boolean;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardBlock: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  titleCentered,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  let titleJustification: justificationType;

  let titleStyle;
  if (titleCentered && !leftDescription && !rightDescription) {
    titleJustification = "center";
  } else {
    titleJustification = "space-between";
  }

  if (numColumns === 1) {
    titleStyle = typography.button;
  } else if (numColumns === 2) {
    titleStyle = typography.headline6;
  } else {
    titleStyle = typography.headline5;
  }

  const rightDescriptionStyles = [
    typography.subtitle2,
    { color: colors.light },
  ];

  return (
    <Card style={style} onPress={onPress} numColumns={numColumns} {...rest}>
      <View style={{ backgroundColor: colors.background }}>
        <Elevation style={{ elevation, borderRadius: roundness }}>
          <Image
            style={{
              borderRadius: roundness,
              aspectRatio,
            }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
        </Elevation>
        {title ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: titleJustification,
              marginTop: numColumns === 3 ? 16 : 12,
            }}
          >
            <Text
              numberOfLines={1}
              style={[titleStyle, { color: colors.strong }]}
            >
              {title}
            </Text>
            {!leftDescription && rightDescription ? (
              <Text style={rightDescriptionStyles}>{rightDescription}</Text>
            ) : null}
          </View>
        ) : null}
        {leftDescription ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: numColumns === 3 ? 4 : 4 / 2,
            }}
          >
            <Text
              numberOfLines={1}
              style={[typography.body2, { color: colors.medium }]}
            >
              {leftDescription}
            </Text>
            {rightDescription ? (
              <Text numberOfLines={1} style={rightDescriptionStyles}>
                {rightDescription}
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </Card>
  );
};

export default withTheme(CardBlock);

const SEED_DATA_PROPS = {
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
  titleCentered: {
    group: GROUPS.basic,
    label: "Title centered",
    description: "Whether to center the title",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
  },
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Small Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one third of its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: createNumColumnsType({
        defaultValue: 1,
      }),
    },
  },
  {
    name: "Medium Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one half of its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 2,
      }),
    },
  },
  {
    name: "Large Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up the full width its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
        editable: true,
      },
      numColumns: createNumColumnsType({
        defaultValue: 3,
      }),
    },
  },
];
