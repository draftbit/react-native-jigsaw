import React from "react";
import { Text, View } from "react-native";
import Section, { Container } from "./Section";
import { Shadow } from "@draftbit/ui";

const ShadowExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Simple shadow" style={{ alignItems: "center" }}>
        <Shadow>
          <View style={{ padding: 100, backgroundColor: "white" }}>
            <Text>Shadow </Text>
          </View>
        </Shadow>
      </Section>

      <Section title="Customized shadow" style={{ alignItems: "center" }}>
        <Shadow
          showShadowSideEnd={false}
          showShadowCornerBottomEnd={false}
          startColor="rgba(0,0,255,0.5)"
          endColor="rgba(0,0,255,0.2)"
        >
          <View style={{ padding: 100, backgroundColor: "white" }}>
            <Text>Shadow </Text>
          </View>
        </Shadow>
      </Section>
    </Container>
  );
};

export default ShadowExample;
