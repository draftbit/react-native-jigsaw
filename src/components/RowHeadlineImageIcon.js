/* @flow */

import * as React from "react";
import { View, Image } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Row from "./Row";
import Icon from "./Icon";
import Config from "./Config";

type Props = {
  title: string,
  subtitle?: string,
  multilineSubtitle?: string,
  image: string | { uri: string },
  icon: string,
  style?: any,
  theme: Theme
};

class RowHeadlineImageIcon extends React.Component<Props> {
  render() {
    const {
      title,
      image,
      subtitle,
      multilineSubtitle,
      icon,
      style,
      theme: { colors, typography, spacing }
    } = this.props;

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
              marginLeft: spacing.large,
              alignSelf: multilineSubtitle ? "flex-start" : "center",
              marginTop: multilineSubtitle ? spacing.text : 0
            }}
          />
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowHeadlineImageIcon);
