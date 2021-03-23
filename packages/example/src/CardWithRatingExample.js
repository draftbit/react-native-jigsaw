import * as React from "react";
import { View, FlatList } from "react-native";
import { CardWithRating, withTheme } from "@draftbit/ui";
import { Container } from "./Section";

const getData = () => {
  return [
    {
      title: "Funky City Pad",
      subtitle: "Washington, DC",
      price: "$1,675/mo",
      imageUrl: "https://picsum.photos/id/214/1125",
    },
    {
      title: "Beach-side Getaway",
      subtitle: "Sarasaota, FL",
      price: "$1,175/mo",
      imageUrl: "https://picsum.photos/id/193/1125",
    },
    {
      title: "Desert Tundra Lovers",
      subtitle: "Phoenix, AZ",
      price: "$695/mo",
      imageUrl: "https://picsum.photos/id/234/1125",
    },
    {
      title: "Urban Escape Haven",
      subtitle: "Chicago, IL",
      price: "$4,192",
      imageUrl: "https://picsum.photos/id/1029/1125",
    },
    {
      title: "Wooded Getaway",
      subtitle: "Eagle River, WS",
      price: "125/mo",
      imageUrl: "https://picsum.photos/id/190/1125",
    },
  ];
};

function CardWithRatingExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <FlatList
        style={{ padding: 8 }}
        horizontal
        data={getData()}
        keyExtractor={(_item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginRight: 8 }} key={item.key}>
              <CardWithRating
                title={item.title}
                leftDescription={item.subtitle}
                rightDescription={item.price}
                image={item.imageUrl}
                icon="MaterialCommunityIcons/heart"
                aspectRatio={2}
                rating={index + 1}
                textCentered
                style={{ width: 240 }}
              />
            </View>
          );
        }}
      />

      <FlatList
        data={getData()}
        numColumns={2}
        keyExtractor={(_item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View key={item.key} style={{ flex: 1 / 2 }}>
              <View style={{ padding: 4 }}>
                <CardWithRating
                  title={item.title}
                  image={item.imageUrl}
                  aspectRatio={1}
                  rating={index + 1}
                />
              </View>
            </View>
          );
        }}
      />
    </Container>
  );
}

export default withTheme(CardWithRatingExample);
