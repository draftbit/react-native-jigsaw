import * as React from "react";
import { View } from "react-native";
import {
  StarRating,
  Surface,
  ScreenContainer,
  Divider,
  Center,
  Circle,
  withTheme,
} from "@draftbit/ui";
import Section from "./Section";

function Box({ width = 50, height = 50 }) {
  return (
    <View style={{ width, height, backgroundColor: "#5a4fff", margin: 2 }} />
  );
}

function LayoutExample({ theme }) {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Section title="StarRating">
        <StarRating rating={3.5} />
        <StarRating />
        <StarRating
          starSize={24}
          maxStars={10}
          style={{ backgroundColor: "orange", margin: 12 }}
        />
      </Section>
      <Divider />
      <Section title="Center">
        <Center>
          <Box />
          <Box />
          <Box />
        </Center>
      </Section>
      <Divider />
      <Divider />
      <Surface>
        <Section title="Circle">
          <Circle />
        </Section>
      </Surface>
    </ScreenContainer>
  );
}

export default withTheme(LayoutExample);
