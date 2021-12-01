import * as React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import { Swiper, SwiperItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

const style = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function SwiperExample({ theme }) {
  const renderItem = (item) => <Item title={item.title} />;

  return (
    <Container>
      <Section title="Swiper Example">
        <Swiper
          vertical={true}
          loop={false}
          showsButtons={false}
          showsPagination={true}
          style={{ width: "100%", height: 300 }}
          autoplay={true}
          autoplayTimeout={5}
          autoplayDirection={false}
        >
          <FlatList
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            data={DATA}
          />
        </Swiper>
      </Section>
      <Section title="Swiper Example">
        <Swiper vertical={false} style={{ width: "100%", height: 300 }}>
          <SwiperItem style={[style.item, { backgroundColor: "#fdd3d3" }]}>
            <Text>Test Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#d6d3fd" }]}>
            <Text>Test Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={[style.item, { backgroundColor: "#c9fdd9" }]}>
            <Text>Test Slide 3</Text>
          </SwiperItem>
        </Swiper>
      </Section>
    </Container>
  );
}

export default SwiperExample;
