/* @flow */

import * as React from "react"
import { View, ScrollView, StyleSheet, Alert } from "react-native"
import { Button, withTheme, FAB } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

class FABExample extends React.Component {
  static title = "FAB (Floating Action Button)"

  state = {
    elevation: 0
  }

  _onPress = () => Alert.alert("Pressed")

  render() {
    const { elevation } = this.state
    const { colors } = this.props.theme

    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.row}>
          <FAB style={styles.button} type="standard" icon="add" onPress={this._onPress} />
          <FAB style={styles.button} type="standard" icon="add" disabled onPress={this._onPress} />
          <FAB style={styles.button} type="standard" icon="add" loading onPress={this._onPress} />
        </View>
        <View style={styles.row}>
          <FAB style={styles.button} type="outline" icon="add" onPress={this._onPress} />
          <FAB style={styles.button} type="outline" icon="add" disabled onPress={this._onPress} />
          <FAB style={styles.button} type="outline" icon="add" loading onPress={this._onPress} />
        </View>
        <View style={styles.column}>
          <FAB style={styles.button} type="extended" label="Extended FAB" onPress={this._onPress} />
          <FAB
            style={styles.button}
            type="extended"
            icon="add"
            label="Extended FAB"
            onPress={this._onPress}
          />
          <FAB
            style={styles.button}
            type="extended"
            icon="add"
            label="Extended Disabled FAB"
            disabled
            onPress={this._onPress}
          />
          <FAB
            style={styles.button}
            type="extended"
            icon="add"
            label="Extended Loading FAB"
            loading
            onPress={this._onPress}
          />
        </View>
        <View style={styles.column}>
          <FAB style={styles.button} type="fixed" label="Fixed FAB" onPress={this._onPress} />
          <FAB
            style={styles.button}
            type="fixed"
            icon="alarm"
            label="Fixed FAB"
            onPress={this._onPress}
          />
          <FAB
            style={styles.button}
            type="fixed"
            icon="alarm"
            label="Fixed Disabled FAB"
            disabled
            onPress={this._onPress}
          />
          <FAB
            style={styles.button}
            type="fixed"
            icon="alarm"
            label="Fixed Loading FAB"
            loading
            onPress={this._onPress}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginVertical: 4
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  column: {
    alignItems: "center"
  }
})

export default withTheme(FABExample)
