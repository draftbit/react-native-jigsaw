import { Checkbox, CheckboxGroup, CheckboxRow, Row, withTheme } from "@draftbit/ui";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Section, { Container } from "./Section";


const SingleCheckboxWrapper = ({ label, children }) => (
  <View style={styles.checkboxWrapper}>
    <View style={styles.checkboxLabel}>
      <Text>{label}</Text>
    </View>
    <View>{children}</View>
  </View>
);

const CheckboxExample = ({
  theme
}) => {

  const [checked, setChecked] = React.useState(true);
  const [selectedValues, setSelectedValues] = React.useState([]);

  const handleValueSelected = (value, selected) => {
    console.log(value, selected)
    if (selected) {
      setSelectedValues(prevState => [...prevState, value])
    } else {
      setSelectedValues(prevState => prevState.filter(val => val !== value))
    }
  }

  const handlePress = () => setChecked(prevState => !prevState);

  return (
    <Container>
      <Section title="Single Checkbox">
        <Row>

          <SingleCheckboxWrapper label="Common">
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={handlePress}
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Custom colors">
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={handlePress}
              color={theme.colors.secondary}
              uncheckedColor={theme.colors.error}
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Custom icons">
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={handlePress}
              checkedIcon="Ionicons/notifications"
              uncheckedIcon="Ionicons/notifications-off"
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Indeterminate">
            <Checkbox
              status="indeterminate"
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Disabled">
            <Checkbox
              status="checked"
              disabled
            />
          </SingleCheckboxWrapper>
        </Row>
      </Section>

      <Section title="Checkbox Group (horizontal)">
        <CheckboxGroup values={selectedValues} onValueChange={handleValueSelected}>
          <CheckboxRow label="First" value="1" />
          <CheckboxRow label="Second" value="2" />
          <CheckboxRow label="Third" value="3" />
        </CheckboxGroup>
      </Section>

      <Section title="Checkbox Group (vertical)">
        <CheckboxGroup direction="vertical" values={selectedValues} onValueChange={handleValueSelected}>
          <CheckboxRow label="First" value="1" />
          <CheckboxRow label="Second" value="2" />
          <CheckboxRow direction="row-reverse" label="Third (reversed)" value="3" />
          <CheckboxRow label="Always selected" value="4" status="checked" />
          <CheckboxRow label="Disabled" disabled />
        </CheckboxGroup>
      </Section>
    </Container>
  )

}

const styles = StyleSheet.create({
  checkboxWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    margin: 10,
    flex: 1
  },
});

export default withTheme(CheckboxExample);