import * as React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { Swiper, SwiperItem, Button } from "@draftbit/ui";
import Section, { Container } from "./Section";

const style = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function SwiperExample() {
  const [data, setData] = React.useState();
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    fetch("https://example-data.draftbit.com/properties?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container style={undefined}>
      <Section title="Horizontal Example" style={undefined}>
        <Swiper
          vertical={false}
          loop={true}
          prevTitle="Previous"
          nextTitle="Next"
          style={{ width: "100%", height: 300 }}
          onSwipe={(index: number) => console.log("Swiped", index)}
          onSwipedNext={(index: number) => console.log("Swiped next", index)}
          onSwipedPrevious={(index: number) =>
            console.log("Swiped previous", index)
          }
          onIndexChanged={(index: number) =>
            console.log("onIndexChanged: ", index)
          }
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
      <Section title="Vertical Example" style={undefined}>
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
            <Text>Test Slide 3</Text>
          </SwiperItem>
        </Swiper>
      </Section>
      <Section title="Data-Driven Example" style={undefined}>
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
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: { item: any }) => (
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
      <Section title="Interaction Example" style={undefined}>
        <Swiper
          ref={swiperRef}
          vertical={false}
          loop={true}
          style={{ width: "100%", height: 300 }}
          onSwipe={(index: number) => console.log("Swiped", index)}
          onSwipedNext={(index: number) => console.log("Swiped next", index)}
          onSwipedPrevious={(index: number) =>
            console.log("Swiped previous", index)
          }
          onIndexChanged={(index: number) =>
            console.log("onIndexChanged: ", index)
          }
        >
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Button
            title="Swipe Prev"
            onPress={() => swiperRef.current?.swipePrev()}
          />
          <Button
            title="Swipe To 1"
            onPress={() => swiperRef.current?.swipeTo(1)}
          />
          <Button
            title="Swipe Next"
            onPress={() => swiperRef.current?.swipeNext()}
          />
        </View>
      </Section>
    </Container>
  );
}

export default SwiperExample;
