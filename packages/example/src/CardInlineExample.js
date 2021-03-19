import * as React from "react";
import { View, FlatList } from "react-native";
import { CardInline, Spacer, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const getData = () => {
  return [
    {
      title: "Cars",
      subtitle: "New York City",
      imageUrl: "https://picsum.photos/id/130/1125",
    },
    {
      title: "Mountains",
      subtitle: "Santa Barbara",
      imageUrl: "https://picsum.photos/id/121/1125",
    },
    {
      title: "Oceans",
      subtitle: "Texas",
      imageUrl: "https://picsum.photos/id/131/1125",
    },
    {
      title: "Deserts",
      subtitle: "Egypt",
      imageUrl: "https://picsum.photos/id/141/1125",
    },
    {
      title: "Woods",
      subtitle: "Washington",
      imageUrl: "https://picsum.photos/id/161/1125",
    },
  ];
};

function CardInlineExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <FlatList
        horizontal
        data={getData()}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 200, marginRight: 8 }} key={item.key}>
              <CardInline
                title={item.title}
                description={item.subtitle}
                image={item.imageUrl}
                aspectRatio={5 / 3}
                titleCentered
              />
            </View>
          );
        }}
      />
      <FlatList
        data={getData()}
        numColumns={3}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => {
          return (
            <View key={item.key} style={{ flex: 1 / 3 }}>
              <Spacer all={4}>
                <CardInline
                  titleCentered
                  title={item.title}
                  image={item.imageUrl}
                  aspectRatio={1}
                />
              </Spacer>
            </View>
          );
        }}
      />
      <FlatList
        data={getData()}
        numColumns={2}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1 / 2 }} key={item.key}>
              <Spacer all={4}>
                <CardInline
                  title={item.title}
                  description={item.subtitle}
                  aspectRatio={3 / 2}
                  image={item.imageUrl}
                />
              </Spacer>
            </View>
          );
        }}
      />
      <FlatList
        data={getData()}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, padding: 4 }} key={item.key}>
              <CardInline
                title={item.title}
                description={item.subtitle}
                image={item.imageUrl}
                aspectRatio={5 / 3}
                titleCentered
              />
            </View>
          );
        }}
      />
    </Container>
  );
}

export default withTheme(CardInlineExample);
