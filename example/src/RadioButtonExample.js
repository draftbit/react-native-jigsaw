import * as React from "react";
import {
  Icon,
  RadioButton,
  RadioButtonRow,
  RadioButtonGroup,
  RadioButtonFieldGroup,
  withTheme,
  ScreenContainer,
} from "@draftbit/ui";
import Section from "./Section";
import { Text, View, StyleSheet } from "react-native";

const SingleRadioButtonWrapper = ({ label, children }) => (
  <View style={styles.radioButtonWrapper}>
    <View style={styles.radioButtonLabel}>
      <Text>{label}</Text>
    </View>
    <View>{children}</View>
  </View>
);

const RadioButtonGroupExample = ({ theme }) => {
  const [selected, onSelect] = React.useState("1");
  const [selected2, onSelect2] = React.useState("1");
  const handleSelect = (value) => onSelect(value);
  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <Section title="Single Radio Buttons">
        <RadioButtonGroup
          direction="horizontal"
          onValueChange={handleSelect}
          value={selected}
        >
          <SingleRadioButtonWrapper>
            <RadioButton value="1" />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper>
            <RadioButton value="2" />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper label="Disabled">
            <RadioButton value="3" disabled />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper label="Custom color">
            <RadioButton value="4" color={theme.colors.error} />
          </SingleRadioButtonWrapper>
        </RadioButtonGroup>
      </Section>

      <Section title="RadioButtonGroup (horizontal)">
        <RadioButtonGroup
          direction="horizontal"
          onValueChange={handleSelect}
          value={selected}
        >
          <RadioButtonRow label="Zero" value={0} />
          <RadioButtonRow label="1st" value={1} />
          <RadioButtonRow label="2nd" value={2} />
          <RadioButtonRow label="3rd" value={3} />
        </RadioButtonGroup>
      </Section>

      <Section title="RadioButtonGroup (vertical)">
        <RadioButtonGroup
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}
        >
          <RadioButtonRow label="First" value="1" />
          <RadioButtonRow label="Second" value="2" />
          <RadioButtonRow
            direction="row-reverse"
            label="Third (reversed)"
            value="3"
          />
        </RadioButtonGroup>
      </Section>

      <Section title="Custom style radio buttons">
        <RadioButtonGroup
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginVertical: 15,
          }}
        >
          <RadioButtonRow
            label={<Icon size={35} name="file-download" />}
            value="1"
          />
          <RadioButtonRow
            label={<Icon size={35} name="FontAwesome5/adjust" />}
            value="2"
          />
          <RadioButtonRow
            label={<Icon size={35} name="Ionicons/moon" />}
            value="3"
          />
        </RadioButtonGroup>

        <Text>With custom selected/unselected icons</Text>

        <RadioButtonGroup
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}
          style={{
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <RadioButtonRow
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="First"
            value="1"
          />
          <RadioButtonRow
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="Second"
            value="2"
          />
          <RadioButtonRow
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="Third"
            value="3"
          />
        </RadioButtonGroup>
      </Section>

      <Section title="RadioButtonFieldGroup">
        <RadioButtonFieldGroup
          label="Select a value"
          onValueChange={handleSelect}
          value={selected}
        >
          <RadioButtonRow size={35} label="First" value="1" />
          <RadioButtonRow size={35} label="Second" value="2" />
          <RadioButtonRow size={35} label="Third" value="3" />
        </RadioButtonFieldGroup>
      </Section>

      <Section title="Single Radio Buttons with initial value">
        <RadioButtonGroup
          direction="horizontal"
          onValueChange={(v) => onSelect2(v)}
          value={selected2}
          defaultValue="2"
        >
          <SingleRadioButtonWrapper>
            <RadioButton value="1" />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper>
            <RadioButton value="2" />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper label="Disabled">
            <RadioButton value="3" disabled />
          </SingleRadioButtonWrapper>
          <SingleRadioButtonWrapper label="Custom color">
            <RadioButton value="4" color={theme.colors.error} />
          </SingleRadioButtonWrapper>
        </RadioButtonGroup>
      </Section>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  radioButtonWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonLabel: {
    marginBottom: 10,
  },
});

export default withTheme(RadioButtonGroupExample);
