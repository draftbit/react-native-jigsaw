import React from "react";
import { View, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import color from "color";
import Image from "./Image";
import CardWrapper from "./CardWrapper";
import Surface from "./Surface";
import Icon from "./Icon";
import { Spacer } from "./Layout";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createElevationType,
  createNumColumnsType,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { Title, Subtitle, Caption } from "./Typography";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  textCentered: boolean;
  icon?: string;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const TopRightCircleIcon = withTheme(({ icon, theme }) => {
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
      <Icon
        name={icon}
        size={Config.cardIconSize}
        color={theme.colors.surface}
      />
    </Surface>
  );
});

const CardContainer: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  textCentered,
  icon,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
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
          <View style={{ alignItems: textCentered ? "center" : "flex-start" }}>
            {title ? <Title text={title} /> : null}
            {leftDescription ? <Subtitle text={leftDescription} /> : null}
            {rightDescription ? <Caption text={rightDescription} /> : null}
          </View>
        </Spacer>
        {icon ? <TopRightCircleIcon icon={icon} /> : null}
      </Surface>
    </CardWrapper>
  );
};

export default withTheme(CardContainer);

const SEED_DATA_PROPS = {
  image: {
    label: "Image",
    description: "Image",
    formType: FORM_TYPES.remoteImage,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: true,
    group: GROUPS.data,
  },
  title: {
    label: "Title",
    description: "Text to display",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
    required: false,
    group: GROUPS.data,
  },
  leftDescription: {
    label: "Left description",
    description: "Text to display on the left",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "San Diego",
    editable: true,
    required: false,
    group: GROUPS.data,
  },
  rightDescription: {
    label: "Right description",
    description: "Text to display on the right",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "$100",
    editable: true,
    required: false,
    group: GROUPS.data,
  },
  icon: {
    label: "Icon",
    description: "Icon to display on the top right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING /* OR ASSET TODO TEST ME */,
    defaultValue: null,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
  aspectRatio: {
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    formType: FORM_TYPES.aspectRatio,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 1.5,
    editable: true,
    required: false,
    group: GROUPS.basic,
  },
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
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Medium Card",
    tag: "CardContainer",
    description:
      "An elevated card with a title and description, that takes up half of its container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: createNumColumnsType({
        defaultValue: 2,
      }),
    },
  },
  {
    name: "Large Card",
    tag: "CardContainer",
    description:
      "An elevated card with a title and description, that takes up its full container.",
    category: COMPONENT_TYPES.card,
    layout: null,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: createNumColumnsType({
        defaultValue: 3,
      }),
    },
  },
];
