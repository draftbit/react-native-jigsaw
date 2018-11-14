/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import Icon from './CheckboxIcon';
import Touchable from "./Touchable";
import { withTheme } from '../core/theming';
import type { Theme, $RemoveChildren } from '../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {|
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate',
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * Custom color for checkbox.
   */
  color?: string,
  /**
   * @optional
   */
  theme: Theme,
|};

class CheckboxIOS extends React.Component<Props> {
  static displayName = 'Checkbox.IOS';

  render() {
    const { status, disabled, onPress, theme, ...rest } = this.props;
    const checked = status === 'checked';
    const indeterminate = status === 'indeterminate';
    const checkedColor = this.props.color || theme.colors.primary;
    const icon = indeterminate ? 'remove' : 'done';

    return (
      <Touchable
        {...rest}
        onPress={onPress}
        borderless={false}
        disabled={disabled}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityStates={disabled ? ['disabled'] : undefined}
        accessibilityLiveRegion="polite"
        style={ checked ?
          { borderRadius: 2, width: 30, height: 30, backgroundColor: `${checkedColor}`, opacity: (disabled) ? `${theme.disabledOpacity}` : 1}
          : { borderRadius: 2, width: 30, height: 30, backgroundColor: `${theme.colors.surface}`, borderColor: `${theme.colors.light}`, borderWidth: 2, opacity: (disabled) ? `${theme.disabledOpacity}` : 1 }}>
        <View style={{ opacity: (indeterminate || disabled) ? `${theme.disabledOpacity}` : 1 }}>
          <Icon
            allowFontScaling={false}
            source={icon}
            size={29}
            color={theme.colors.surface}
          />
        </View>
      </Touchable>
    );
  }
}

export default withTheme(CheckboxIOS);