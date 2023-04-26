import {
  SwipeableList,
  SwipeableItem,
  SwipeableItemButton,
} from "@draftbit/ui";
import React from "react";
import Section, { Container } from "./Section";
import { Text, View } from "react-native";

type User = { id: number; fullName: string };

const sampleData: User[] = [
  {
    id: 1,
    fullName: "Susan Williamson",
  },
  {
    id: 2,
    fullName: "Henrietta Wagner",
  },
  {
    id: 3,
    fullName: "Lydia Snyder",
  },
  {
    id: 4,
    fullName: "Harold Herrera",
  },
  {
    id: 5,
    fullName: "Richard Garrett",
  },
];

const SwipeableViewExample: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Section style={{}} title="Swipeable List (FlatList)">
        <SwipeableList
          listComponent="FlatList"
          style={{ height: 150 }}
          data={sampleData}
          renderItem={({ item }: { item: User }) => (
            <SwipeableItem
              rightSwipeTitle="Swipe Me Right"
              rightSwipeIcon="check"
              onSwipedRight={() => {
                console.log("Swiped");
              }}
            >
              <Text>{item.fullName}</Text>
              <SwipeableItemButton
                onPress={() => {
                  console.log("Pressed");
                }}
                title="Click Me (Left Swipe)"
                icon="check"
                revealSwipeDirection="left"
              />
            </SwipeableItem>
          )}
        />
      </Section>
      <Section style={{}} title="Swipeable List (FlashList)">
        <View style={{ height: 150 }}>
          <SwipeableList
            listComponent="FlashList"
            data={[...sampleData, ...sampleData]}
            estimatedItemSize={50}
            renderItem={({ item }: { item: User }) => (
              <SwipeableItem>
                <Text>{item.fullName}</Text>
                <SwipeableItemButton
                  title="Click Me (Left Swipe)"
                  icon="check"
                  revealSwipeDirection="left"
                />
                <SwipeableItemButton
                  title="Click Me (Right Swipe)"
                  icon="check"
                  revealSwipeDirection="right"
                />
              </SwipeableItem>
            )}
          />
        </View>
      </Section>
      <Section style={{}} title="Swipeable Item without List">
        <SwipeableItem
          rightSwipeTitle="Swipe Me Right"
          rightSwipeIcon="check"
          onSwipedRight={() => {
            console.log("Swiped");
          }}
          leftSwipeTitle="Swipe Me Left"
          leftSwipeIcon="check"
          onSwipedLeft={() => {
            console.log("Swiped");
          }}
        >
          <Text>Some text</Text>
        </SwipeableItem>
      </Section>
    </Container>
  );
};

export default SwipeableViewExample;
