/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CardContainerShortImage, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

const CARD_IMAGE_URL =
  "https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png";

class CardContainerShortImageExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: background, padding: spacing.large }
        ]}
      >
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerShortLeftImage
        </Text>
        <CardContainerShortImage
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          subtitle="San Diego"
          mode="left"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerShortLeftImage with long title and subtitle
        </Text>
        <CardContainerShortImage
          image={CARD_IMAGE_URL}
          title="Title that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          mode="left"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerShortRightImage
        </Text>
        <CardContainerShortImage
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          subtitle="San Diego"
          mode="right"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerShortRightImage with long title and subtitle
        </Text>
        <CardContainerShortImage
          image={CARD_IMAGE_URL}
          title="Title that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          mode="right"
          style={{ marginBottom: spacing.large }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withTheme(CardContainerShortImageExample);
