/* @flow */

import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { FieldSearchBarFull, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class FieldSearchBarFullExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: background, paddingVertical: spacing.large }
        ]}
      >
        <FieldSearchBarFull
          placeholder="Type something..."
          onSubmit={text => alert(`Executing search: ${text}`)}
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

export default withTheme(FieldSearchBarFullExample);
