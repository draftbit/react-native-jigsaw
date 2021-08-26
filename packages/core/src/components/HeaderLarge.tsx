import * as React from "react";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  Triggers,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Header from "./Header";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  title: string;
  buttonText: string;
  icon: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const HeaderLarge: React.FC<Props> = ({
  Icon,
  title,
  buttonText,
  icon,
  onPress = () => {},
  style,
  theme: { colors, typography },
}) => {
  return (
    <Header
      Icon={Icon}
      titleTypeStyle={typography.headline4}
      titleColor={colors.strong}
      title={title}
      buttonText={buttonText}
      icon={icon}
      onPress={onPress}
      style={style}
    />
  );
};

export default withTheme(HeaderLarge);

export const SEED_DATA = [
  {
    name: "Header Large",
    tag: "HeaderLarge",
    description:
      "A large header with an optional touchable right aligned text and icon.",
    category: COMPONENT_TYPES.header,
    layout: {},
    triggers: [Triggers.OnPress],
    props: {
      title: createTextProp({
        label: "Title",
        description: "Text to display",
        defaultValue: "Title",
      }),
      buttonText: createTextProp({
        label: "Button text",
        description: "Right aligned button text to display",
        defaultValue: "See All",
      }),
      icon: createIconProp({
        defaultValue: null,
        required: false,
      }),
    },
  },
];
