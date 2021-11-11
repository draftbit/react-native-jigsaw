import {
  Checkbox,
  CheckboxGroup,
  CheckboxRow,
  Switch,
  Row,
  withTheme,
  ScreenContainer,
} from "@draftbit/ui";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Section from "./Section";

const SingleCheckboxWrapper = ({ label, children }) => (
  <View style={styles.checkboxWrapper}>
    <View style={styles.checkboxLabel}>
      <Text>{label}</Text>
    </View>
    <View>{children}</View>
  </View>
);

const CheckboxExample = ({ theme }) => {
  const [checked, setChecked] = React.useState(true);
  const [airtableChecked, setAirtableChecked] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState([]);

  const handleValueSelected = (value, selected) => {
    if (selected) {
      setSelectedValues((prevState) => [...prevState, value]);
    } else {
      setSelectedValues((prevState) =>
        prevState.filter((val) => val !== value)
      );
    }
  };

  const handlePress = (value) => setChecked(value);
  const handleAirtablePress = (value) => {
    console.log("handling airtable press", value);
    if (value) {
      setAirtableChecked(true);
    } else {
      setAirtableChecked(undefined);
    }
  };

  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <Section title="Single Checkbox">
        <Row>
          <SingleCheckboxWrapper label="Common">
            <Checkbox status={checked} onPress={handlePress} />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Custom colors">
            <Checkbox
              status={checked}
              onPress={handlePress}
              color={theme.colors.secondary}
              uncheckedColor={theme.colors.error}
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Custom icons">
            <Checkbox
              status={checked}
              onPress={handlePress}
              checkedIcon="Ionicons/notifications"
              uncheckedIcon="Ionicons/notifications-off"
            />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Disabled">
            <Checkbox status={true} disabled />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Large">
            <Checkbox status={checked} onPress={handlePress} size={72} />
          </SingleCheckboxWrapper>
          <SingleCheckboxWrapper label="Initial value">
            <Checkbox defaultValue={false} />
          </SingleCheckboxWrapper>
        </Row>
      </Section>

      <Section title="Checkbox and Switch with Airtable-like API (false is undefined)">
        <Row>
          <Checkbox status={airtableChecked} onPress={handleAirtablePress} />
          <Checkbox status={airtableChecked} onPress={handleAirtablePress} />
          <Switch value={airtableChecked} onValueChange={handleAirtablePress} />
          <Switch value={airtableChecked} onValueChange={handleAirtablePress} />
        </Row>
      </Section>

      <Section title="Checkbox Group (horizontal)">
        <CheckboxGroup
          direction="horizontal"
          values={selectedValues}
          onValueChange={handleValueSelected}
        >
          <CheckboxRow label="First" value="1" style={{ fontSize: 32 }} />
          <CheckboxRow label="Second" value="2" />
          <CheckboxRow label="Third" value="3" />
        </CheckboxGroup>
      </Section>

      <Section title="Checkbox Group (vertical)">
        <CheckboxGroup
          direction="vertical"
          values={selectedValues}
          onValueChange={handleValueSelected}
        >
          <CheckboxRow label="First" value="1" />
          <CheckboxRow label="Second" value="2" />
          <CheckboxRow
            direction="row-reverse"
            label="Third (reversed)"
            value="3"
          />
          <CheckboxRow label="Always selected" value="4" status="checked" />
          <CheckboxRow label="Disabled" disabled />
        </CheckboxGroup>
      </Section>
    </ScreenContainer>
  );
};

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
    flex: 1,
  },
});

export default withTheme(CheckboxExample);
