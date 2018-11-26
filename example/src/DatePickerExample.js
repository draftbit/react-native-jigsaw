/* @flow */

import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { DatePicker, Divider, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

class DatePickerExample extends React.Component {
  state = {
    underlinePickerDate: new Date(),
    solidPickerDate: new Date()
  };

  render() {
    const { colors, spacing } = this.props.theme;

    return (
      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
            paddingHorizontal: spacing.large
          }
        ]}
      >
        <View>
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Underline
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            date={this.state.underlinePickerDate}
            onDateChange={underlinePickerDate =>
              this.setState({ underlinePickerDate })
            }
          />
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Underline (Error)
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            date={this.state.underlinePickerDate}
            error
            onDateChange={underlinePickerDate =>
              this.setState({ underlinePickerDate })
            }
          />
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Underline (Disabled)
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            date={this.state.underlinePickerDate}
            disabled
            onDateChange={underlinePickerDate =>
              this.setState({ underlinePickerDate })
            }
          />
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Solid
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            type="solid"
            date={this.state.solidPickerDate}
            onDateChange={solidPickerDate => this.setState({ solidPickerDate })}
          />
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Solid (Error)
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            type="solid"
            date={this.state.solidPickerDate}
            error
            onDateChange={solidPickerDate => this.setState({ solidPickerDate })}
          />
          <Text style={{ marginVertical: spacing.large }}>
            Date Picker - Solid (Disabled)
          </Text>
          <DatePicker
            label="Date"
            placeholder="Select a date..."
            type="solid"
            date={this.state.solidPickerDate}
            disabled
            onDateChange={solidPickerDate => this.setState({ solidPickerDate })}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withTheme(DatePickerExample);
