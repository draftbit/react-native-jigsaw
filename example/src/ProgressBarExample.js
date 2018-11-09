/* @flow */

import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ProgressBar, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class ProgressBarExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <ProgressBar progress={0} style={styles.progressBar} />
        <ProgressBar progress={0.25} style={styles.progressBar} />
        <ProgressBar progress={0.5} style={styles.progressBar} />
        <ProgressBar progress={0.75} style={styles.progressBar} />
        <ProgressBar progress={1} style={styles.progressBar} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  progressBar: {
    marginVertical: 50
  }
});

export default withTheme(ProgressBarExample);
