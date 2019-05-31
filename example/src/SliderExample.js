/* @flow */

import * as React from "react"
import { StyleSheet, Text, ScrollView } from "react-native"
import { Slider, FieldSlider, withTheme } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

type Props = {
  theme: Theme
}

class SliderExample extends React.Component<Props> {
  state = { sliderValue: 5, disabledSliderValue: 5, fieldSliderValue: 5 }

  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props

    const { sliderValue, disabledSliderValue, fieldSliderValue } = this.state

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: background, paddingHorizontal: spacing.large }
        ]}>
        <Text style={{ marginVertical: spacing.large }}>Slider</Text>
        <Slider
          style={{ width: 300, height: 30 }}
          minimumTrackTintColor="#5a45ff"
          maximumTrackTintColor="#536070"
          thumbTintColor="#3BC9EA"
          thumbBorderRadius={20}
          trackBorderRadius={20}
          thumbSize={20}
          thumbTouchSize={20}
          value={sliderValue}
          onValueChange={sliderValue => {
            this.setState({ sliderValue })
          }}
          minimumValue={0}
          maximumValue={10}
          step={0.02}
        />
        <Text style={{ marginVertical: spacing.large }}>Slider (Disabled)</Text>
        <Slider
          disabled={true}
          style={{ width: 300, height: 30 }}
          minimumTrackTintColor="#5a45ff"
          maximumTrackTintColor="#536070"
          thumbTintColor="#00FF00"
          disabledThumbTintColor="#000000"
          thumbBorderRadius={20}
          thumbSize={20}
          value={disabledSliderValue}
          onValueChange={sliderValue => {
            this.setState({ sliderValue })
          }}
          minimumValue={0}
          maximumValue={10}
          step={0.02}
        />
        <Text style={{ marginVertical: spacing.large }}>FieldSlider</Text>
        <FieldSlider
          title="Title"
          minimumLabel="0"
          maximumLabel="10"
          value={fieldSliderValue}
          onValueChange={fieldSliderValue => {
            this.setState({ fieldSliderValue })
          }}
          style={{ width: 300, height: 30 }}
          minimumTrackTintColor="#5a45ff"
          maximumTrackTintColor="#536070"
          thumbTintColor="#3BC9EA"
          thumbBorderRadius={10}
          trackBorderRadius={10}
          thumbSize={20}
          thumbTouchSize={20}
          value={sliderValue}
          onValueChange={sliderValue => {
            this.setState({ sliderValue })
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
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

export default withTheme(SliderExample)
