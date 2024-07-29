import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Loading, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { LoadingType } from "@draftbit/core/lib/typescript/src/components/Loading";

interface WrapperProps {
  label: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ label, children }) => {
  return (
    <View style={styles.checkboxWrapper}>
      <View style={styles.checkboxLabel}>
        <Text>{label}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const LoadingExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Default">
            <Loading />
          </Wrapper>
          <Wrapper label="Plane">
            <Loading type={LoadingType.plane} />
          </Wrapper>
          <Wrapper label="Chase">
            <Loading type={LoadingType.chase} />
          </Wrapper>
          <Wrapper label="Bounce">
            <Loading type={LoadingType.bounce} />
          </Wrapper>
          <Wrapper label="Wave">
            <Loading type={LoadingType.wave} />
          </Wrapper>
          <Wrapper label="Pulse">
            <Loading type={LoadingType.pulse} />
          </Wrapper>
        </View>
      </Section>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Flow">
            <Loading type={LoadingType.flow} />
          </Wrapper>
          <Wrapper label="Swing">
            <Loading type={LoadingType.swing} />
          </Wrapper>
          <Wrapper label="Circle">
            <Loading type={LoadingType.circle} />
          </Wrapper>
          <Wrapper label="Circle Fade">
            <Loading type={LoadingType.circleFade} />
          </Wrapper>
          <Wrapper label="Grid">
            <Loading type={LoadingType.grid} />
          </Wrapper>
          <Wrapper label="Fold">
            <Loading type={LoadingType.fold} />
          </Wrapper>
          <Wrapper label="Wander">
            <Loading type={LoadingType.wander} />
          </Wrapper>
        </View>
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  checkboxWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    margin: 10,
    flex: 1,
  },
});

export default withTheme(LoadingExample);
