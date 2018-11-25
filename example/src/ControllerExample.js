/* @flow */

import * as React from 'react';
import { View, ScrollView, StyleSheet  } from 'react-native';
import { Button, withTheme, Switch, Checkbox } from '@draftbit/ui';
import type { Theme } from '@draftbit/ui/types';

class ControllerExample extends React.Component {
  static title = "Controller";

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
    const { value, disabled } = this.state
    const { colors} = this.props.theme

    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.row}>
          <Button onPress={this.disable} type="text">{disabled ? 'Enable' : 'Disable'}</Button>
        </View>
        <View style={styles.row}>
          <Switch onValueChange={this.toggle} disabled={disabled} value={value}/>
        </View>
        <View style={styles.row}>
          <Checkbox status={value ? 'checked': 'unchecked'} disabled={disabled}  onPress={this.toggle}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    margin: 4, 
  }
});

export default withTheme(ControllerExample)
