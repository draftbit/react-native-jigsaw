/* @flow */

import * as React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Button, withTheme, Switch  } from '@draftbit/ui';
import type { Theme } from '@draftbit/ui/types';

class ControllerExample extends React.Component {
  static title = "Button";

  state = {
    elevation: 2,
    disabled: false,
    value: false,
  }

  toggle = () => {
    this.setState({ value: !this.state.value })
  }

  disable = () => {
    this.setState({ disabled: !this.state.disabled })
  }

  render() {
    const { elevation, value, disabled } = this.state
    const { colors} = this.props.theme
    const buttonStyle = [styles.button]


    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.row}>
          <Button onPress={this.disable} type="text">{disabled ? 'Click to enabled' : 'Click to disable'}</Button>
        </View>
        <View style={styles.row}>
          <Switch style={buttonStyle} onValueChange={this.toggle} disabled={disabled} value={value}/>
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

export default withTheme(ControllerExample)
