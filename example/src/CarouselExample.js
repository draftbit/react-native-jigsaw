/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Carousel, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class CarouselExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text style={{ padding: spacing.large }}>Carousel</Text>
        <Carousel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withTheme(CarouselExample);
