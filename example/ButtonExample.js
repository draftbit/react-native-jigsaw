/* @flow */

import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, withTheme } from '@draftbit/ui';
import type { Theme } from '@draftbit/ui/types';

class ButtonExample extends React.Component {
  static title = "Button";

  state = {
    elevation: 2,
  }

  render() {
    const { elevation } = this.state
    const { colors} = this.props.theme

    const buttonStyle = [styles.button]

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={styles.row}>
            <Button style={buttonStyle}>Solid Button</Button>
            <Button style={buttonStyle} loading>Solid Loading</Button>
            <Button style={buttonStyle} icon="file-download">Solid Icon</Button>
            <Button style={buttonStyle} icon="file-download" disabled>Solid Disabled</Button>
        </View>
        <View style={styles.row}>
            <Button style={buttonStyle} type="outline">Outline Button</Button>
            <Button style={buttonStyle} type="outline" icon="file-download">Outline Icon</Button>
            <Button style={buttonStyle} type="outline" loading>Outline Loading</Button>
            <Button style={buttonStyle} type="outline" disabled>Outline Disabled</Button>
        </View>
        <View style={styles.row}>
            <Button style={buttonStyle} type="text">Text Button</Button>
            <Button style={buttonStyle} type="text" loading>Text Loading</Button>
            <Button style={buttonStyle} type="text" icon="file-download">Text Icon</Button>
            <Button style={buttonStyle} type="text" disabled>Text Disabled</Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 4,
  },
  row: {
    alignItems: 'center'
  }
});

export default withTheme(ButtonExample)
