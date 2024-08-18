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
          <Wrapper label="Default">
            <LottieAnimation
              source={{
                uri: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/test-edofwk/assets/ysca4wklife9/test.json",
              }}
            />
          </Wrapper>
          <Wrapper label="Resize width and style">
            <LottieAnimation
              source={{
                uri: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/test-edofwk/assets/ysca4wklife9/test.json",
              }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="No loop">
            <LottieAnimation
              source={{
                uri: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/test-edofwk/assets/ysca4wklife9/test.json",
              }}
              loop={false}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
          <Wrapper label="No autoplay">
            <LottieAnimation
              source={{
                uri: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/test-edofwk/assets/ysca4wklife9/test.json",
              }}
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
