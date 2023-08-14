import React from "react";
import Section, { Container } from "./Section";
import { PinInput, CustomPinInputCell, CustomPinInputText } from "@draftbit/ui";

const PinInputExample: React.FC = () => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");

  return (
    <Container style={{}}>
      <Section title="PinInput (default cell)" style={{}}>
        <PinInput value={value1} onChangeText={setValue1} />
      </Section>
      <Section title="PinInput (default cell, customized)" style={{}}>
        <PinInput
          value={value1}
          onChangeText={setValue1}
          focusedBorderColor="green"
          focusedBackgroundColor="rgba(0,1,0,0.2)"
          focusedBorderWidth={5}
          focusedTextColor="green"
          style={{
            borderRadius: 35,
            fontWeight: "800",
            backgroundColor: "gray",
            borderWidth: 3,
          }}
        />
      </Section>
      <Section title="PinInput (custom cell)" style={{}}>
        <PinInput
          value={value1}
          onChangeText={setValue1}
          onInputFull={(value) => console.log("Input full", value)}
          renderItem={({ cellValue, isFocused }) => {
            return (
              <CustomPinInputCell
                style={{
                  width: 70,
                  height: 70,
                  shadowColor: "#000",
                  backgroundColor: "white",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 9,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomPinInputText
                  style={{ color: isFocused ? "green" : "black", fontSize: 20 }}
                  isFocused={isFocused}
                >
                  {cellValue}
                </CustomPinInputText>
              </CustomPinInputCell>
            );
          }}
        />
      </Section>
      <Section title="PinInput (more cells)" style={{}}>
        <PinInput cellCount={7} value={value2} onChangeText={setValue2} />
      </Section>
    </Container>
  );
};

export default PinInputExample;
