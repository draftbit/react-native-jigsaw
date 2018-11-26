/* @flow */

import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Picker, Divider, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

class PickerExample extends React.Component {
  state = {};

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
            Picker - Underline
          </Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.underlinePickerMake}
            onValueChange={underlinePickerMake =>
              this.setState({ underlinePickerMake })
            }
          />
          <Text style={{ marginVertical: spacing.large }}>
            Picker - Underline (Disabled)
          </Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.underlineDisabledPickerMake}
            onValueChange={underlineDisabledPickerMake =>
              this.setState({ underlineDisabledPickerMake })
            }
            disabled
          />
          <Text style={{ marginVertical: spacing.large }}>
            Picker - Underline (Error)
          </Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.underlineErrorPickerMake}
            onValueChange={underlineErrorPickerMake =>
              this.setState({ underlineErrorPickerMake })
            }
            error
          />
          <Text style={{ marginVertical: spacing.large }}>Picker - Solid</Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            type="solid"
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.solidPickerMake}
            onValueChange={solidPickerMake =>
              this.setState({ solidPickerMake })
            }
          />
          <Text style={{ marginVertical: spacing.large }}>
            Picker - Solid (Disabled)
          </Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            type="solid"
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.solidDisabledPickerMake}
            onValueChange={solidDisabledPickerMake =>
              this.setState({ solidDisabledPickerMake })
            }
            disabled
          />
          <Text style={{ marginVertical: spacing.large }}>
            Picker - Solid (Error)
          </Text>
          <Picker
            label="Make"
            placeholder="Select a make..."
            type="solid"
            options={[
              { value: "Audi", label: "Audi" },
              { value: "BMW", label: "BMW" },
              { value: "Cadillac", label: "Cadillac" },
              { value: "Dodge", label: "Dodge" }
            ]}
            selectedValue={this.state.solidErrorPickerMake}
            onValueChange={solidErrorPickerMake =>
              this.setState({ solidErrorPickerMake })
            }
            error
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

export default withTheme(PickerExample);
