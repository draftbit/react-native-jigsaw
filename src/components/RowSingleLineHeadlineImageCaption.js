/* @flow */

import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Row from "./Row";
import Config from "./Config";

type Props = {
  title: string,
  caption: string,
  image: string | { uri: string },
  style?: any,
  theme: Theme
};

class RowSingleLineHeadlineImageCaption extends React.Component<Props> {
  render() {
    const {
      title,
      caption,
      image,
      style,
      theme: { colors, typography, spacing }
    } = this.props;

    return (
      <Row
        left={() => (
          <View style={styles.leftContainer}>
            <Image
              source={typeof image === "string" ? { uri: image } : image}
              style={{
                marginRight: spacing.medium,
                width: Config.rowImageSize,
                height: Config.rowImageSize
              }}
            />
            <Text style={{ ...typography.headline6, color: colors.strong }}>
              {title}
            </Text>
          </View>
        )}
        right={() => (
          <Text style={{ ...typography.caption, color: colors.strong }}>
            {caption}
          </Text>
        )}
        style={style}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row"
  }
});

export default withTheme(RowSingleLineHeadlineImageCaption);
