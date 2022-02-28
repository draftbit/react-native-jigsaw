import * as React from "react";
import { Text, View, ImageBackground } from "react-native";
import { withTheme, Surface } from "@draftbit/ui";
import Section, { Container } from "./Section";

function SurfaceExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="overflow: 'hidden'">
        <Surface
          style={{
            aspectRatio: 2 / 3,
            height: 300,
            width: 200,
            justifyContent: "space-between",
            margin: 20,
            borderRadius: 20,
            overflow: "hidden",
          }}
          elevation={10}
        >
          <View>
            <ImageBackground
              source={require("./assets/images/icon.png")}
              style={{
                aspectRatio: 1 / 1,
                height: 200,
              }}
              resizeMode={"cover"}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={{ textAlign: "center" }}>Bro</Text>
          </View>
        </Surface>
      </Section>

      <Section title="overflow: 'visible'">
        <Surface
          style={{
            aspectRatio: 2 / 3,
            height: 300,
            width: 200,
            justifyContent: "space-between",
            margin: 20,
            borderRadius: 20,
            overflow: "visible",
          }}
          elevation={10}
        >
          <View>
            <ImageBackground
              source={require("./assets/images/icon.png")}
              style={{
                aspectRatio: 1 / 1,
                height: 200,
              }}
              resizeMode={"cover"}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={{ textAlign: "center" }}>Bro</Text>
          </View>
        </Surface>
      </Section>
    </Container>
  );
}

export default withTheme(SurfaceExample);
