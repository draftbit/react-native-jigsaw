/* @flow */
import * as React from 'react';
import { Switch as NativeSwitch, Platform } from 'react-native';
import { withTheme } from '../core/theming';
import type { Theme } from '../types';

type Props = {
  /**
   * Disable toggling the switch.
   */
  disabled?: boolean,
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  value?: boolean,
  /**
   * Custom color for switch.
   */
  color?: string,
  /**
   * Callback called with the new value when it changes.
   */
  onValueChange?: Function,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

class Switch extends React.Component<Props> {
  render() {
    const {
      value,
      disabled,
      onValueChange,
      color,
      theme,
      ...props
    } = this.props;
    let thumbColor = undefined
    let checkedColor = color || theme.colors.primary
    if (Platform.OS !== 'ios') {
      thumbColor = theme.colors.surface
    }
    return (
      <NativeSwitch
        {...props}
        value={value}
        disabled={disabled}
        trackColor={{false: null, true: checkedColor }}
        thumbColor={thumbColor}
        onValueChange={disabled ? undefined : onValueChange}
        style={{ opacity: (disabled && Platform.OS !== 'ios') ? 0.5 : 1 }}
      />
    );
  }
}

export default withTheme(Switch);