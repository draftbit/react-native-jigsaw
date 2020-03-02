import * as React from "react"
import { StyleSheet, Text, ScrollView } from "react-native"
import { CardContainer, withTheme } from "@draftbit/ui"

class CardContainerExample extends React.Component {
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
        <Text style={{ marginBottom: spacing.medium }}>CardContainer2Col</Text>
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          icon="cloud"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainer3Col</Text>
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          icon="cloud"
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainer2Col with centered text</Text>
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          textCentered
          numColumns={2}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainer2Col, 1x1 aspect ratio</Text>
        <CardContainer
          title="Beautiful West Coast Villa"
          leftDescription="San Diego"
          rightDescription="$100"
          numColumns={2}
          aspectRatio={1}
          style={{ marginBottom: spacing.large }}
        />
        <Text style={{ marginBottom: spacing.medium }}>CardContainer3Col, 1x1 aspect ratio</Text>
        <CardContainer
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

export default withTheme(CardContainerExample)
