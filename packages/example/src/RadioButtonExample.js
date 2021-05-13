import * as React from "react";
import { Icon, RadioButton, Row, RadioButtonFieldGroup, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { Text, View, StyleSheet } from "react-native";

const LoneRadioButtonWrapper = ({
  label,
  children
}) => (
  <View style={styles.radioButtonWrapper}>
    <View style={styles.radioButtonLabel}>
      <Text>{label}</Text>
    </View>
    <View>
      {children}
    </View>

  </View>
)

const RadioButtonGroupExample = ({
  theme
}) => {
  const [selected, onSelect] = React.useState("1");
  const handleSelect = (value) => onSelect(value);
  return (
    <Container>

      <Section title="Lone radio buttons">
        <Row>
          <LoneRadioButtonWrapper label="Selected">
            <RadioButton selected />
          </LoneRadioButtonWrapper>
          <LoneRadioButtonWrapper label="Unselected">
            <RadioButton />
          </LoneRadioButtonWrapper>
          <LoneRadioButtonWrapper label="Disabled">
            <RadioButton selected disabled />
          </LoneRadioButtonWrapper>
          <LoneRadioButtonWrapper label="Custom color">
            <RadioButton
              selected
              color={theme.colors.error}
            />
          </LoneRadioButtonWrapper>
        </Row>
      </Section>

      <Section title="RadioButtonGroup (horizontal)">
        <RadioButton.Group
          direction="horizontal"
          onValueChange={handleSelect}
          value={selected}
        >
          <RadioButton.Row label="First" value="1" />
          <RadioButton.Row label="Second" value="2" />
          <RadioButton.Row label="Third" value="3" />
        </RadioButton.Group>
      </Section>

      <Section title="RadioButtonGroup (vertical)">
        <RadioButton.Group
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}>
          <RadioButton.Row label="First" value="1" />
          <RadioButton.Row label="Second" value="2" />
          <RadioButton.Row direction="row-reverse" label="Third (reversed)" value="3" />
        </RadioButton.Group>
      </Section>

      <Section title="Custom style radio buttons">
        <RadioButton.Group
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            marginVertical: 15
          }}>

          <RadioButton.Row label={
            <Icon size={35} name="file-download" />
          } value="1" />
          <RadioButton.Row label={
            <Icon size={35} name="FontAwesome5/adjust" />
          } value="2" />
          <RadioButton.Row label={
            <Icon size={35} name="Ionicons/moon" />
          } value="3" />
        </RadioButton.Group>

        <Text>With custom selected/unselected icons</Text>

        <RadioButton.Group
          direction="vertical"
          onValueChange={handleSelect}
          value={selected}
          style={{
            borderWidth: 1,
            borderColor: 'gray'
          }}>


          <RadioButton.Row
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="First"
            value="1" />
          <RadioButton.Row
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="Second"
            value="2" />
          <RadioButton.Row
            selectedIcon="AntDesign/checksquare"
            unselectedIcon="MaterialCommunityIcons/checkbox-blank-outline"
            label="Third"
            value="3" />

        </RadioButton.Group>
      </Section>

      <Section title="RadioButtonFieldGroup">
        <RadioButtonFieldGroup
          label="Select a value"
          onValueChange={handleSelect}
          value={selected}
        >
          <RadioButton.Row size={35} label="First" value="1" />
          <RadioButton.Row size={35} label="Second" value="2" />
          <RadioButton.Row size={35} label="Third" value="3" />
        </RadioButtonFieldGroup>

      </Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  radioButtonWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioButtonLabel: {
    marginBottom: 10
  }
})

export default withTheme(RadioButtonGroupExample)
