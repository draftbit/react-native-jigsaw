import * as React from "react";
import { withTheme } from "../theming";
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
