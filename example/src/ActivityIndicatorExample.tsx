import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { ActivityIndicatorType } from "@draftbit/core/lib/typescript/src/components/ActivityIndicator";

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

const ActivityIndicatorExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section style={{}} title="Default">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Small">
            <ActivityIndicator size="small" />
          </Wrapper>
          <Wrapper label="Large">
            <ActivityIndicator size="large" />
          </Wrapper>
          <Wrapper label="Size">
            <ActivityIndicator size={80} />
          </Wrapper>
        </View>
      </Section>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Default">
            <ActivityIndicator />
          </Wrapper>
          <Wrapper label="Plane">
            <ActivityIndicator type={ActivityIndicatorType.plane} />
          </Wrapper>
          <Wrapper label="Chase">
            <ActivityIndicator type={ActivityIndicatorType.chase} />
          </Wrapper>
          <Wrapper label="Bounce">
            <ActivityIndicator type={ActivityIndicatorType.bounce} />
          </Wrapper>
          <Wrapper label="Wave">
            <ActivityIndicator type={ActivityIndicatorType.wave} />
          </Wrapper>
          <Wrapper label="Pulse">
            <ActivityIndicator type={ActivityIndicatorType.pulse} />
          </Wrapper>
        </View>
      </Section>
      <Section style={{}} title="Loading">
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Flow">
            <ActivityIndicator type={ActivityIndicatorType.flow} />
          </Wrapper>
          <Wrapper label="Swing">
            <ActivityIndicator type={ActivityIndicatorType.swing} />
          </Wrapper>
          <Wrapper label="Circle">
            <ActivityIndicator type={ActivityIndicatorType.circle} />
          </Wrapper>
          <Wrapper label="Circle Fade">
            <ActivityIndicator type={ActivityIndicatorType.circleFade} />
          </Wrapper>
          <Wrapper label="Grid">
            <ActivityIndicator type={ActivityIndicatorType.grid} />
          </Wrapper>
          <Wrapper label="Fold">
            <ActivityIndicator type={ActivityIndicatorType.fold} />
          </Wrapper>
          <Wrapper label="Wander">
            <ActivityIndicator type={ActivityIndicatorType.wander} />
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

export default withTheme(ActivityIndicatorExample);
