import * as React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dateFormat from "dateformat";
import { withTheme } from "../core/theming";

import Portal from "./Portal/Portal";
import Button from "./Button";
import TextField from "./TextField";
import Touchable from "./Touchable";

class Picker extends React.Component {
  static defaultProps = {
    type: "underline",
    mode: "date",
    disabled: false,
    error: false,
    date: new Date(),
    onDateChange: () => {},
  };

  state = {
    pickerVisible: false,
  };

  constructor(props) {
    super(props);
    this.textField = React.createRef();
  }

  formatDate = () => {
    const { date, mode, format } = this.props;

    if (format) return dateFormat(date, format);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (mode === "time") {
      return `${date.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${date.toLocaleString()}`;
    }

    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  toggleVisibility = async () => {
    this.setState((prevState) => ({ pickerVisible: !prevState.pickerVisible }));
    this.textField.current.toggleFocus();
  };

  render() {
    const {
      style,
      theme,
      options,
      initialDate,
      locale,
      minuteInterval,
      timeZoneOffsetInMinutes,
      date,
      onDateChange,
      disabled,
      mode,
      ...props
    } = this.props;

    const { colors } = theme;
    const { pickerVisible } = this.state;

    return (
      <View style={[styles.container, style]}>
        <Touchable disabled={disabled} onPress={this.toggleVisibility}>
          <View pointerEvents="none">
            <TextField
              {...props}
              value={this.formatDate(date)}
              ref={this.textField}
              disabled={disabled}
            />
          </View>
        </Touchable>
        {pickerVisible && (
          <Portal>
            <View
              style={[
                styles.picker,
                {
                  backgroundColor: colors.divider,
                },
              ]}
            >
              <SafeAreaView style={styles.pickerContainer}>
                <Button
                  type="text"
                  onPress={this.toggleVisibility}
                  style={styles.closeButton}
                >
                  Close
                </Button>
                <DateTimePicker
                  value={date}
                  onChange={(_event, newDate) => onDateChange(newDate)}
                  mode={mode}
                />
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
    alignSelf: "stretch",
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default withTheme(Picker);
