/* @flow */

import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Row from "./Row";
import Icon from "./Icon";
import Config from "./Config";

type Props = {
  title: string,
  subtitle?: string,
  icon: string,
  style?: any,
  theme: Theme
};

class RowBodyIcon extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      icon,
      style,
      theme: { colors, typography, spacing }
    } = this.props;

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
            style={{ marginLeft: spacing.large }}
          />
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowBodyIcon);
