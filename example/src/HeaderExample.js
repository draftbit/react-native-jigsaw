import * as React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { HeaderLarge, HeaderMedium, HeaderOverline, withTheme } from "@draftbit/ui"

class HeaderExample extends React.Component {
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
        <HeaderLarge title="Title" style={{ marginVertical: spacing.large }} />
        <HeaderLarge
          title="Title that is quite long so that it won't fit on a single line"
          style={{ marginVertical: spacing.large }}
        />
        <HeaderLarge
          title="Title"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
        />
        <HeaderLarge
          title="Title that is quite long so that it won't fit on a single line"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
        />
        <HeaderMedium title="Title" style={{ marginVertical: spacing.large }} />
        <HeaderMedium
          title="Title that is quite long so that it won't fit on a single line"
          style={{ marginVertical: spacing.large }}
        />
        <HeaderMedium
          title="Title"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
        />
        <HeaderMedium
          title="Title that is quite long so that it won't fit on a single line"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
        />
        <HeaderOverline title="Title" style={{ marginVertical: spacing.large }} />
        <HeaderOverline
          title="Title that is quite long so that it won't fit on a single line"
          style={{ marginVertical: spacing.large }}
        />
        <HeaderOverline
          title="Title"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
        />
        <HeaderOverline
          title="Title that is quite long so that it won't fit on a single line"
          buttonText="See All"
          onPress={() => {}}
          style={{ marginVertical: spacing.large }}
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

export default withTheme(HeaderExample)
