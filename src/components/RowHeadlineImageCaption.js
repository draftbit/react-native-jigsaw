/* @flow */

import * as React from "react";
import { Text } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Row from "./Row";

type Props = {
  title: string,
  subtitle?: string,
  caption: string,
  image: string | { uri: string },
  style?: any,
  theme: Theme
};

class RowHeadlineImageCaption extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      caption,
      image,
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
        image={image}
        right={() => (
          <Text
            style={{
              ...typography.caption,
              color: colors.strong,
              marginLeft: spacing.large
            }}
          >
            {caption}
          </Text>
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowHeadlineImageCaption);
