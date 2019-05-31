/* @flow */

import * as React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Avatar, AvatarEdit, withTheme } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

class AvatarExample extends React.Component {
  static title = "Avatar"

  render() {
    const { colors } = this.props.theme

    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.column}>
          <Avatar size={60} style={styles.space} />
          <Avatar size={60} style={styles.space} image="https://picsum.photos/180/180/?random" />
          <Avatar size={60} style={styles.space} image="https://picsum.photos/180/180/?random" />
        </View>
        <View style={styles.column}>
          <AvatarEdit size={60} style={styles.space} />
          <AvatarEdit
            size={60}
            style={styles.space}
            image="https://picsum.photos/180/180/?random"
          />
          <AvatarEdit
            size={60}
            style={styles.space}
            image="https://picsum.photos/180/180/?random"
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
  space: {
    margin: 4
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    alignItems: "center"
  }
})

export default withTheme(AvatarExample)
