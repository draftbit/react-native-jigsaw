import React from "react";
import Section, { Container } from "./Section";
import { CircularProgress, Button } from "@draftbit/ui";
import { Text } from "react-native";

const ProgressExample: React.FC = () => {
  const [value, setValue] = React.useState(50);

  return (
    <Container style={{}}>
      <Section title="Circular Progress (Default)" style={{ width: 200 }}>
        <CircularProgress value={value} />
      </Section>

      <Section title="Circular Progress (Different Styles)" style={{}}>
        <CircularProgress
          style={{ width: 200 }}
          thickness={40}
          trackThickness={20}
          value={value}
        />
        <CircularProgress
          style={{ marginTop: 30, width: 200 }}
          color="rgb(0,255,0)"
          trackColor="gray"
          thickness={20}
          trackThickness={30}
          value={value}
          lineCap="square"
        />
        <CircularProgress
          style={{ marginTop: 30, width: 200 }}
          thickness={20}
          trackThickness={25}
          dashWidth={20}
          dashGap={30}
          value={value}
        />
      </Section>

      <Section title="Circular Progress (Indeterminate)" style={{}}>
        <CircularProgress style={{ width: 200 }} indeterminate />
      </Section>

      <Text>Current: {value}</Text>
      <Button
        //@ts-ignore
        title="Randomize Progress"
        onPress={() => setValue(Math.random() * 101)}
      />
    </Container>
  );
};

export default ProgressExample;
