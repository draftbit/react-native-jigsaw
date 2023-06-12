import React from "react";
import Section, { Container } from "./Section";
import { CodeInput, CodeInputCell, CodeInputText } from "@draftbit/ui";

const CodeInputExample: React.FC = () => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");

  return (
    <Container style={{}}>
      <Section title="CodeInput (default cell)" style={{}}>
        <CodeInput value={value1} onChangeText={setValue1} />
      </Section>
      <Section title="CodeInput (custom cell)" style={{}}>
        <CodeInput
          value={value1}
          onChangeText={setValue1}
          onInputFull={(value) => console.log("Input full", value)}
          renderItem={({ cellValue, isFocused }) => {
            return (
              <CodeInputCell
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
                <CodeInputText
                  style={{ color: isFocused ? "green" : "black", fontSize: 20 }}
                  isFocused={isFocused}
                >
                  {cellValue}
                </CodeInputText>
              </CodeInputCell>
            );
          }}
        />
      </Section>
      <Section title="CodeInput (more cells)" style={{}}>
        <CodeInput cellCount={7} value={value2} onChangeText={setValue2} />
      </Section>
    </Container>
  );
};

export default CodeInputExample;
