import {
  Checkbox,
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
  const [airtableChecked, setAirtableChecked] = React.useState(undefined);

  const handlePress = (value) => setChecked(value);
  // An example to simulate how Airtable returns boolean values: `true` or `undefined`
  const handleAirtablePress = (value) => {
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
          <Checkbox
            defaultValue={airtableChecked}
            onPress={handleAirtablePress}
          />
          <Checkbox
            defaultValue={airtableChecked}
            onPress={handleAirtablePress}
          />
          <Switch
            defaultValue={airtableChecked}
            onValueChange={handleAirtablePress}
          />
          <Switch
            defaultValue={airtableChecked}
            onValueChange={handleAirtablePress}
          />
        </Row>
      </Section>

      <Section title="CheckboxRow">
        <CheckboxRow
          label="First"
          direction="row"
          style={{ fontSize: 32 }}
          onPress={setChecked}
          status={checked}
          size={72}
          checkedIcon="Ionicons/notifications"
          uncheckedIcon="Ionicons/notifications-off"
          uncheckedColor={"dodgerblue"}
          color={"hotpink"}
        />

        <CheckboxRow
          label="Second"
          direction="row-reverse"
          style={{ fontSize: 32 }}
          onPress={(value) => {
            console.log("I'm", value);
            setChecked(value);
          }}
          onCheck={() => console.log("I'm checked!!!")}
          onUncheck={() => console.log("I'm unchecked!!!")}
          status={checked}
        />
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
