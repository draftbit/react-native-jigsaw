import * as React from "react";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "./Row";
import Config from "./Config";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  image: string | ImageSourcePropType;
  subtitle?: string;
  multilineSubtitle?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

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
      titleColor={colors.strong}
      subtitleTypeStyle={typography.body2}
      subtitleColor={colors.medium}
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
          color={colors.light}
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
