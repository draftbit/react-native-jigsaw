/* @flow */

import * as React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Picker as NativePicker
} from "react-native";
import { withTheme } from "../../core/theming";
import type { Theme } from "../../types";
import Portal from "../Portal/Portal";
import Button from "../Button";
import TextField from "../TextField";
import Touchable from "../Touchable";

class Picker extends React.Component<Props> {
  state = {
    pickerVisible: false
  };

  constructor(props) {
    super(props);
    this.textField = React.createRef();
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ pickerVisible: !prevState.pickerVisible }));
    this.textField.current.toggleFocus();
  };

  render() {
    const {
      style,
      theme,
      options,
      placeholder,
      selectedValue,
      onValueChange,
      disabled,
      ...props
    } = this.props;
    const { colors } = theme;

    const { pickerVisible } = this.state;

    return (
      <View style={[styles.container, style]}>
        <Touchable disabled={disabled} onPress={this.toggleVisibility}>
          <TextField
            {...props}
            value={selectedValue}
            placeholder={placeholder}
            ref={this.textField}
            disabled={disabled}
            pointerEvents="none"
          />
        </Touchable>
        {pickerVisible && (
          <Portal>
            <View style={[styles.picker, { backgroundColor: colors.divider }]}>
              <SafeAreaView style={styles.pickerContainer}>
                <Button
                  type="text"
                  onPress={this.toggleVisibility}
                  style={styles.closeButton}
                >
                  Close
                </Button>
                <NativePicker
                  selectedValue={selectedValue}
                  onValueChange={onValueChange}
                >
                  {options.map(o => (
                    <NativePicker.Item
                      label={o.label}
                      value={o.value}
                      key={o.value}
                    />
                  ))}
                </NativePicker>
              </SafeAreaView>
            </View>
          </Portal>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end"
  }
});

export default withTheme(Picker);
