import * as React from "react";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "../components/Row";
import Config from "../components/Config";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  subtitle?: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
} & IconSlot;

/**
 * @deprecated DEPRECATED
 */
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
      titleColor={colors.text.medium}
      subtitleTypeStyle={typography.subtitle2}
      subtitleColor={colors.foreground.base}
      title={title}
      subtitle={subtitle}
      right={() => (
        <Icon
          name={icon}
          size={Config.rowSingleLineIconSize}
          color={colors.foreground.base}
          style={{ marginLeft: 16 }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowBodyIcon);
