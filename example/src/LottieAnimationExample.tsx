import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LottieAnimation, withTheme } from "@draftbit/ui";
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
const LottieAnimationExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section style={{}} title="Lottie Animation">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Default with uri">
            <LottieAnimation
              source={{
                uri: "https://lottie.host/55656a16-1441-43d6-a052-57b8e02d5c8f/SM1VujecK4.json",
              }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
          <Wrapper label="Static json data">
            <LottieAnimation
              source={require("./assets/lottie_animation_example.json")}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Resize and Styling">
            <LottieAnimation
              source={require("./assets/lottie_animation_example.json")}
              style={{
                width: 350,
                height: 350,
                backgroundColor: "black",
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="No loop">
            <LottieAnimation
              source={require("./assets/lottie_animation_example.json")}
              loop={false}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
          <Wrapper label="No autoplay">
            <LottieAnimation
              source={require("./assets/lottie_animation_example.json")}
              autoPlay={false}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
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

export default withTheme(LottieAnimationExample);
