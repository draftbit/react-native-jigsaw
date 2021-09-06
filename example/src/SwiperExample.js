import * as React from "react";
import { View, Text } from "react-native";
import { Swiper, SwiperItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SwiperExample({ theme }) {
  return (
    <Container>
      <Section title="Swiper Example" style={{ width: 300, height: 300 }}>
        <Swiper vertical={false} loop={true}>
          <SwiperItem style={{ backgroundColor: "#fdd3d3" }}>
            <Text>Test Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: "#d6d3fd" }}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: "#c9fdd9" }}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
        </Swiper>
      </Section>
      <Section title="Swiper Example" style={{ width: 300, height: 300 }}>
        <Swiper vertical={true}>
          <SwiperItem style={{ backgroundColor: "#fdd3d3" }}>
            <Text>Test Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: "#d6d3fd" }}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: "#c9fdd9" }}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
        </Swiper>
      </Section>
    </Container>
  );
}

export default SwiperExample;
