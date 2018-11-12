/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CardInline, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

const CARD_IMAGE_URL =
  "https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png";

class CardInlineExample extends React.Component<Props> {
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
        <Text style={{ marginBottom: spacing.medium }}>CardInline1Col</Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          numColumns={1}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardInline2Col</Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          description="San Diego"
          numColumns={2}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardInline3Col</Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          description="San Diego"
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline1Col, 1x1 aspect ratio
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          numColumns={1}
          aspectRatio={1}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline2Col, 1x1 aspect ratio
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          description="San Diego"
          numColumns={2}
          aspectRatio={1}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline3Col, 1x1 aspect ratio
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          description="San Diego"
          aspectRatio={1}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline1Col, centered title
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Hello"
          titleCentered
          numColumns={1}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline2Col, no right description
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          description="San Diego"
          numColumns={2}
          style={{ marginBottom: spacing.medium * 2 }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardInline3Col, no left description
        </Text>
        <CardInline
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          style={{ marginBottom: spacing.medium * 2 }}
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

export default withTheme(CardInlineExample);
