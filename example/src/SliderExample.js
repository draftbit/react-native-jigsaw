/* @flow */

import * as React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Slider, FieldSlider, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class SliderExample extends React.Component<Props> {
  state = { sliderValue: 5, disabledSliderValue: 5, fieldSliderValue: 5 };

  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    const { sliderValue, disabledSliderValue, fieldSliderValue } = this.state;

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: background, paddingHorizontal: spacing.large }
        ]}
      >
        <Text style={{ marginVertical: spacing.large }}>Slider</Text>
        <Slider
          value={sliderValue}
          onValueChange={sliderValue => {
            this.setState({ sliderValue });
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
        />
        <Text style={{ marginVertical: spacing.large }}>Slider (Disabled)</Text>
        <Slider
          value={disabledSliderValue}
          onValueChange={disabledSliderValue => {
            this.setState({ disabledSliderValue });
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          disabled
        />
        <Text style={{ marginVertical: spacing.large }}>FieldSlider</Text>
        <FieldSlider
          title="Title"
          minimumLabel="0"
          maximumLabel="10"
          value={fieldSliderValue}
          onValueChange={fieldSliderValue => {
            this.setState({ fieldSliderValue });
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
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

export default withTheme(SliderExample);
