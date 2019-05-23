/* @flow */

import * as React from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { Carousel, withTheme } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

type Props = {
  theme: Theme
}

const IMAGES = [
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/b23d4319-96fc-4ab5-813a-4538a84a6fd6",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/9eb80357-b96b-4c49-be91-7e46629a0955",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/be668ad0-f62d-4b43-8261-023c9406b27d",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/96c42572-3a34-47a5-95b0-0c332f9505ef"
]

class CarouselExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props

    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text style={{ padding: spacing.large }}>Carousel</Text>
        <Carousel images={IMAGES} dotColor={background} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withTheme(CarouselExample)
