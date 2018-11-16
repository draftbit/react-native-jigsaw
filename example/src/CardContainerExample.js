/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CardContainer, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

const CARD_IMAGE_URL =
  "https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png";

class CardContainerExample extends React.Component<Props> {
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
          { padding: spacing.large, backgroundColor: background }
        ]}
      >
        <Text style={{ marginBottom: spacing.medium }}>CardContainer2Col</Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          icon="cloud"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainer3Col</Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          icon="cloud"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainer2Col with centered text
        </Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          textCentered
          numColumns={2}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainer2Col, 1x1 aspect ratio
        </Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          aspectRatio={1}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainer3Col, 1x1 aspect ratio
        </Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          aspectRatio={1}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainer2Col, no right description
        </Text>
        <CardContainer
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
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

export default withTheme(CardContainerExample);
