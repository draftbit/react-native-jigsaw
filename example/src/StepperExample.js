/* @flow */

import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Stepper, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class StepperExample extends React.Component<Props> {
  state = {
    value: 0
  };

  onMinus = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  onPlus = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    const { value } = this.state;

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: background, padding: spacing.large }
        ]}
      >
        <Stepper
          value={value}
          onMinus={this.onMinus}
          onPlus={this.onPlus}
          style={styles.stepper}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stepper: {
    alignSelf: "center"
  }
});

export default withTheme(StepperExample);
