import {
  SwipeableView,
  SwipeableViewButton,
  SwipeableViewSwipeHandler,
} from "@draftbit/ui";
import React from "react";
import { Text } from "react-native";
import Section, { Container } from "./Section";

const DeckSwiperExample: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Section title="Swipeable View" style={{ flex: 1 }}>
        <SwipeableView>
          <Text>Some Content</Text>

          <SwipeableViewButton
            onPress={null}
            side="left"
            title="Button"
            icon="add"
          />
          <SwipeableViewButton
            onPress={null}
            side="left"
            title="Button"
            icon="add"
          />
          <SwipeableViewSwipeHandler
            onSwipe={null}
            side="right"
            title="Swipe"
            icon="add"
            backgroundColor="red"
          />
        </SwipeableView>
      </Section>
    </Container>
  );
};

export default DeckSwiperExample;
