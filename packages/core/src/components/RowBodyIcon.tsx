import * as React from "react";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "./Row";
import Config from "./Config";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  subtitle?: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const RowBodyIcon: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  title,
  subtitle,
  icon,
  style,
  theme: { colors, typography },
}) => {
  return (
    <Row
      titleTypeStyle={typography.body1}
      titleColor={colors.medium}
      subtitleTypeStyle={typography.subtitle2}
      subtitleColor={colors.light}
      title={title}
      subtitle={subtitle}
      right={() => (
        <Icon
          name={icon}
          size={Config.rowSingleLineIconSize}
          color={colors.light}
          style={{ marginLeft: 16 }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowBodyIcon);
