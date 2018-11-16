/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CardBlock, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

const CARD_IMAGE_URL =
  "https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png";

class CardBlockExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;

    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <Text style={styles.title}>CardBlock1Col</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={1}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock2Col</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock3Col</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock1Col, 1x1 aspect ratio</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={1}
          aspectRatio={1}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock2Col, 1x1 aspect ratio</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          aspectRatio={1}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock3Col, 1x1 aspect ratio</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          aspectRatio={1}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock1Col, centered title</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Hello"
          titleCentered
          numColumns={1}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock2Col, no right description</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
          style={styles.cardBlockStyle}
        />
        <Text style={styles.title}>CardBlock3Col, no left description</Text>
        <CardBlock
          image={CARD_IMAGE_URL}
          title="Beautiful West Coast Villa"
          rightDescription="$100"
          style={styles.cardBlockStyle}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    marginBottom: 12
  },
  cardBlockStyle: {
    marginBottom: 24
  }
});

export default withTheme(CardBlockExample);
