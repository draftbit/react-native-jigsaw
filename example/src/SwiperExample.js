import * as React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { Swiper, SwiperItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

const style = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function SwiperExample({ theme }) {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://example-data.draftbit.com/properties?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (!data) {
    return <Text>"Loading..."</Text>;
  }

  return (
    <Container>
      <Section title="Horizontal Example">
        <Swiper
          vertical={false}
          loop={true}
          prevTitle="Previous"
          nextTitle="Next"
          style={{ width: "100%", height: 300 }}
          dotColor="green"
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
      <Section title="Vertical Example">
        <Swiper
          vertical={true}
          style={{ width: "100%", height: 300 }}
          dotColor="#86939e"
          dotActiveColor="#2089dc"
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
      <Section title="Data-Driven Example">
        <Swiper
          vertical={false}
          loop={true}
          prevTitle="Previous"
          nextTitle="Next"
          prevTitleColor="white"
          nextTitleColor="white"
          dotColor="white"
          dotActiveColor="black"
          style={{ width: "100%", height: 300 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SwiperItem style={[style.item, { backgroundColor: "#fdd3d3" }]}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={{ uri: item.image_url }}
                  resizeMode="cover"
                  style={{ position: "absolute", width: "100%", height: 300 }}
                />
                <Text style={{ color: "white" }}>{item.name}</Text>
              </View>
            </SwiperItem>
          )}
        />
      </Section>
    </Container>
  );
}

export default SwiperExample;
