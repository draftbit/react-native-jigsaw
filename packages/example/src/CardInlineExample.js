import * as React from "react";
import { View, FlatList } from "react-native";
import { CardInline, Spacer, withTheme } from "@draftbit/ui";
import { Container } from "./Section";

const getData = () => {
  return [
    {
      title: "Cars",
      subtitle: "New York City",
      description:
        "Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually.",
      imageUrl: "https://picsum.photos/id/130/1125",
    },
    {
      title: "Mountains",
      subtitle: "Santa Barbara",
      description:
        "Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually.",
      imageUrl: "https://picsum.photos/id/121/1125",
    },
    {
      title: "Oceans",
      subtitle: "Texas",
      description:
        "Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually.",
      imageUrl: "https://picsum.photos/id/131/1125",
    },
    {
      title: "Deserts",
      subtitle: "Egypt",
      description:
        "Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually.",
      imageUrl: "https://picsum.photos/id/141/1125",
    },
    {
      title: "Woods",
      subtitle: "Washington",
      description:
        "Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually.",
      imageUrl: "https://picsum.photos/id/161/1125",
    },
  ];
};

function CardInlineExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <FlatList
        horizontal
        style={{ padding: 4 }}
        data={getData()}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 240, marginRight: 8 }} key={item.key}>
              <CardInline
                icon="MaterialCommunityIcons/heart"
                title={item.title}
                image={item.imageUrl}
                aspectRatio={5 / 3}
              />
            </View>
          );
        }}
      />
      <Spacer top={16} />

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
                subtitle={item.subtitle}
                image={item.imageUrl}
                aspectRatio={3}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </View>
          );
        }}
      />
    </Container>
  );
}

export default withTheme(CardInlineExample);
