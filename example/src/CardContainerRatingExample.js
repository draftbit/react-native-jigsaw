/* @flow */

import * as React from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { CardContainerRating, withTheme } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

type Props = {
  theme: Theme
}

class CardContainerRatingExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props

    return (
      <ScrollView
        style={[styles.container, { padding: spacing.large, backgroundColor: background }]}>
        <Text style={{ marginBottom: spacing.medium }}>CardContainerRating2Col</Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rating={4}
          rightDescription="$100"
          numColumns={2}
          icon="star"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainerRating3Col</Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rating={4}
          rightDescription="$100"
          icon="star"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerRating2Col with centered text
        </Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          textCentered
          numColumns={2}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerRating2Col, 1x1 aspect ratio
        </Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rating={4}
          rightDescription="$100"
          numColumns={2}
          aspectRatio={1}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerRating3Col, 1x1 aspect ratio
        </Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rating={4}
          rightDescription="$100"
          aspectRatio={1}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>
          CardContainerRating2Col, no right description
        </Text>
        <CardContainerRating
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          numColumns={2}
          style={{ marginBottom: spacing.large }}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withTheme(CardContainerRatingExample)
