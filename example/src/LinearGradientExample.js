import * as React from "react";
import { Text } from "react-native";
import { ScreenContainer, withTheme, LinearGradient } from "@draftbit/ui";
import Section from "./Section";

function LinearGradientExample() {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Section title="Linear Gradient">
        <LinearGradient
          color1="red"
          color2="transparent"
          style={{ height: 300, width: 300 }}
        >
          <Text>Test</Text>
        </LinearGradient>
      </Section>
      <Section title="Row">
        <LinearGradient
          color1="green"
          color2="blue"
          color3="red"
          endY={0}
          style={{ height: 300, width: 300 }}
        >
          <Text>Test</Text>
        </LinearGradient>
      </Section>
    </ScreenContainer>
  );
}

export default withTheme(LinearGradientExample);
