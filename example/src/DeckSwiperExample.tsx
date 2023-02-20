import React from "react";
import { Image, Text } from "react-native";
import Section, { Container } from "./Section";
import { DeckSwiper, DeckSwiperCard } from "@draftbit/ui";

const sampleData = [
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

const DeckSwiperExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Simple swiper with text" style={{ paddingBottom: 30 }}>
        <DeckSwiper visibleCardCount={3}>
          <DeckSwiperCard>
            <Text>Card 1</Text>
          </DeckSwiperCard>
          <DeckSwiperCard>
            <Text>Card 2</Text>
          </DeckSwiperCard>
          <DeckSwiperCard>
            <Text>Card 3</Text>
          </DeckSwiperCard>
          <DeckSwiperCard>
            <Text>Card 4</Text>
          </DeckSwiperCard>
        </DeckSwiper>
      </Section>

      <Section title="Infinite swiper with images" style={{}}>
        <DeckSwiper infiniteSwiping visibleCardCount={2}>
          <DeckSwiperCard>
            <Image
              style={{ width: "100%", height: 300 }}
              source={{ uri: "https://picsum.photos/id/141/1125" }}
            />
          </DeckSwiperCard>
          <DeckSwiperCard>
            <Image
              style={{ width: "100%", height: 300 }}
              source={{ uri: "https://picsum.photos/id/141/1125" }}
            />
          </DeckSwiperCard>
          <DeckSwiperCard>
            <Image
              style={{ width: "100%", height: 300 }}
              source={{ uri: "https://picsum.photos/id/141/1125" }}
            />
          </DeckSwiperCard>
        </DeckSwiper>
      </Section>

      <Section title="Lazy Rendering (renderItem)" style={{}}>
        <DeckSwiper
          infiniteSwiping
          visibleCardCount={2}
          data={sampleData}
          renderItem={({ item }) => (
            <DeckSwiperCard>
              <Text>{item.fullName}</Text>
            </DeckSwiperCard>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Section>
    </Container>
  );
};

export default DeckSwiperExample;
