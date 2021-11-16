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

const HeaderOverline: React.FC<Props> = ({
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
      titleTypeStyle={typography.overline}
      titleColor={colors.light}
      title={title && title.toUpperCase()}
      buttonText={buttonText}
      icon={icon}
      dividerTopMargin={12}
      onPress={onPress}
      style={style}
    />
  );
};

export default withTheme(HeaderOverline);
