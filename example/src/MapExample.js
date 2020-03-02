import * as React from "react"
import { View, StyleSheet } from "react-native"
import { MapSimple, withTheme } from "@draftbit/ui"

class MapExample extends React.Component {
  render() {
    const { colors, spacing } = this.props.theme

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
            padding: spacing.large
          }
        ]}>
        <MapSimple
          initialLatitude={37.402184}
          initialLongitude={-122.121264}
          initialLatitudeDelta={0.2}
          initialLongitudeDelta={0.2}
          markers={[
            {
              latitude: 37.402184,
              longitude: -122.121264,
              title: "Home",
              description: "319 Lunada Court, Los Altos, CA, 94022"
            }
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withTheme(MapExample)
