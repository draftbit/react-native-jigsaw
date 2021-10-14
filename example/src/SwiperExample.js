import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Swiper, SwiperItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

const style = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function SwiperExample({ theme }) {
  return (
    <Container>
      <Section title="Swiper Example">
        <Swiper
          vertical={false}
          loop={true}
          prevTitle="Previous"
          nextTitle="Next"
          style={{ width: "100%", height: 300 }}
          dotActiveColor="red"
        >
          <SwiperItem style={[style.item, { backgroundColor: "#fdd3d3" }]}>
            <Text>Test Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#d6d3fd" }]}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#c9fdd9" }]}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
        </Swiper>
      </Section>
      <Section title="Swiper Example">
        <Swiper vertical={true} style={{ width: "100%", height: 300 }}>
          <SwiperItem style={[style.item, { backgroundColor: "#fdd3d3" }]}>
            <Text>Test Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#d6d3fd" }]}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#c9fdd9" }]}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
        </Swiper>
      </Section>
    </Container>
  );
}

export default SwiperExample;
