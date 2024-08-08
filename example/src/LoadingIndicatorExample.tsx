import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LoadingIndicator, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { LoadingIndicatorType } from "@draftbit/core/lib/typescript/src/components/LoadingIndicator";

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

const LoadingIndicatorExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Plane">
            <LoadingIndicator type={LoadingIndicatorType.plane} />
          </Wrapper>
          <Wrapper label="Chase">
            <LoadingIndicator type={LoadingIndicatorType.chase} />
          </Wrapper>
          <Wrapper label="Bounce">
            <LoadingIndicator type={LoadingIndicatorType.bounce} />
          </Wrapper>
          <Wrapper label="Wave">
            <LoadingIndicator type={LoadingIndicatorType.wave} />
          </Wrapper>
          <Wrapper label="Pulse">
            <LoadingIndicator type={LoadingIndicatorType.pulse} />
          </Wrapper>
          <Wrapper label="Flow">
            <LoadingIndicator type={LoadingIndicatorType.flow} />
          </Wrapper>
        </View>
      </Section>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Swing">
            <LoadingIndicator type={LoadingIndicatorType.swing} />
          </Wrapper>
          <Wrapper label="Circle">
            <LoadingIndicator type={LoadingIndicatorType.circle} />
          </Wrapper>
          <Wrapper label="Circle Fade">
            <LoadingIndicator type={LoadingIndicatorType.circleFade} />
          </Wrapper>
          <Wrapper label="Grid">
            <LoadingIndicator type={LoadingIndicatorType.grid} />
          </Wrapper>
          <Wrapper label="Fold">
            <LoadingIndicator type={LoadingIndicatorType.fold} />
          </Wrapper>
          <Wrapper label="Wander">
            <LoadingIndicator type={LoadingIndicatorType.wander} />
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

export default withTheme(LoadingIndicatorExample);
