import React from "react";
import { Image, Text } from "react-native";
import Section, { Container } from "./Section";
import { DeckSwiper, DeckSwiperCard } from "@draftbit/core";

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
    </Container>
  );
};

export default DeckSwiperExample;
