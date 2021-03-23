import * as React from "react";
import { View, FlatList } from "react-native";
import { withTheme, SimpleRow, InputRow } from "@draftbit/ui";
import Section, { Container } from "./Section";

const data = [
  {
    email: "301 W Grand Ave",
    status: "Chicago, IL 60654",
    icon: "Ionicons/home",
  },
  {
    email: "444 N Michigan Ave",
    status: "Chicago, IL 60654",
    icon: "Ionicons/briefcase-sharp",
  },
  {
    email: "6502 Cedarhill",
    status: "unverified",
    icon: "Ionicons/location-sharp",
  },
];

const Divider = () => <View style={{ height: 1, backgroundColor: "#eee" }} />;

function LayoutExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="All data">
        <FlatList
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={({ item, index }) => {
            return (
              <SimpleRow
                key={index}
                title={item.email}
                subtitle={item.status}
                icon={item.icon}
                onPress={() => {
                  console.log("pressed");
                }}
              />
            );
          }}
        />
      </Section>
      <Section title="Just title">
        <FlatList
          data={[
            {
              title: "Rentals",
            },
            {
              title: "Profile and account",
            },
            {
              title: "Rewards programs",
            },
          ]}
          ItemSeparatorComponent={Divider}
          renderItem={({ item, index }) => {
            return (
              <SimpleRow
                key={index}
                title={item.title}
                onPress={() => {
                  console.log("pressed");
                }}
              />
            );
          }}
        />
      </Section>
      <Section title="Forms">
        <InputRow title="Email" />
        <InputRow title="Password" />
      </Section>
    </Container>
  );
}

export default withTheme(LayoutExample);
