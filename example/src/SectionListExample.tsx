import { SectionList, SectionHeader } from "@draftbit/ui";
import React from "react";
import Section, { Container } from "./Section";
import { Text, View } from "react-native";

type Food = { id: number; name: string; category: string };

const sampleData: Food[] = [
  {
    id: 5,
    name: "Onion Rings",
    category: "Side",
  },
  {
    id: 1,
    name: "Pizza",
    category: "Main Dish",
  },
  {
    id: 3,
    name: "Risotto",
    category: "Main Dish",
  },
  {
    id: 6,
    name: "Ice Cream",
    category: "Dessert",
  },
  {
    id: 4,
    name: "Fries",
    category: "Side",
  },
  {
    id: 7,
    name: "Churros",
    category: "Dessert",
  },
  {
    id: 2,
    name: "Burger",
    category: "Main Dish",
  },
];

const SwipeableViewExample: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Section style={{}} title="Section List (FlatList)">
        <View style={{ height: 150 }}>
          <SectionList
            listComponent="FlatList"
            data={sampleData}
            sectionKey="category"
            renderItem={({ item }) => (
              <View>
                <Text>{item?.id}</Text>
                <Text>{item?.name}</Text>
              </View>
            )}
          />
        </View>
      </Section>
      <Section style={{}} title="Section List (FlashList)">
        <View style={{ height: 150 }}>
          <SectionList
            listComponent="FlashList"
            data={sampleData}
            sectionKey="category"
            estimatedItemSize={40}
            renderItem={({ item }) => (
              <View>
                <Text>{item?.id}</Text>
                <Text>{item?.name}</Text>
              </View>
            )}
          />
        </View>
      </Section>
      <Section style={{}} title="Section List Custom Header">
        <View style={{ height: 150 }}>
          <SectionList
            data={sampleData}
            sectionKey="category"
            renderItem={({ item, section }) => (
              <>
                <SectionHeader>
                  <Text
                    style={{
                      padding: 10,
                      color: "green",
                      borderWidth: 2,
                      borderColor: "green",
                    }}
                  >
                    Custom Section: {section}
                  </Text>
                </SectionHeader>
                <View>
                  <Text>{item?.id}</Text>
                  <Text>{item?.name}</Text>
                </View>
              </>
            )}
          />
        </View>
      </Section>
    </Container>
  );
};

export default SwipeableViewExample;
