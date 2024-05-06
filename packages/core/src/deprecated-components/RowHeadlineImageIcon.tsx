import * as React from "react";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "../components/Row";
import Config from "../components/Config";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  image: string | ImageSourcePropType;
  subtitle?: string;
  multilineSubtitle?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
} & IconSlot;

/**
 * @deprecated DEPRECATED
 */
const RowHeadlineImageIcon: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  icon,
  title,
  image,
  subtitle,
  multilineSubtitle = false,
  style,
  theme: { colors, typography },
}) => {
  return (
    <Row
      titleTypeStyle={typography.headline6}
      titleColor={colors.text.strong}
      subtitleTypeStyle={typography.body2}
      subtitleColor={colors.text.medium}
      title={title}
      subtitle={subtitle}
      multilineSubtitle={multilineSubtitle}
      image={image}
      right={() => (
        <Icon
          name={icon}
          size={
            multilineSubtitle
              ? Config.rowMultiLineIconSize
              : Config.rowSingleLineIconSize
          }
          color={colors.text.light}
          style={{
            marginLeft: 16,
            alignSelf: multilineSubtitle ? "flex-start" : "center",
            marginTop: multilineSubtitle ? 4 : 0,
          }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageIcon);
