import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

interface WrapperProps {
  label: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ label, children }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.boxLabel}>
        <Text>{label}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const ImageExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Image Examples" style={{}}>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Basic remote image">
            <Image
              source={{
                uri: "https://picsum.photos/1100",
              }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
          <Wrapper label="Local image">
            <Image
              source={require("./assets/images/hamburger.png")}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="With aspectRatio">
            <Image
              source={{
                uri: "https://picsum.photos/1200",
              }}
              style={{
                width: 300,
                aspectRatio: 16 / 9,
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Content fit: contain">
            <Image
              source={{
                uri: "https://picsum.photos/1300",
              }}
              contentFit="contain"
              style={{
                width: 200,
                height: 200,
                backgroundColor: "#f0f0f0",
              }}
            />
          </Wrapper>
          <Wrapper label="With blur hash">
            <Image
              source={{
                uri: "https://picsum.photos/1400",
              }}
              placeholder={{
                blurhash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
              }}
              transition={1000}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
      </Section>
      <Section title="SVG Image" style={styles.wrapper}>
        <Wrapper label="Remote SVG Image">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg",
            }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Wrapper>
        <Wrapper label="Local SVG Image">
          <Image
            source={require("./assets/images/example.svg")}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Wrapper>
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxLabel: {
    margin: 10,
    flex: 1,
  },
});

export default withTheme(ImageExample);
