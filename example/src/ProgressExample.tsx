import React from "react";
import Section, { Container } from "./Section";
import { LinearProgress, Button } from "@draftbit/ui";

const ProgressExample: React.FC = () => {
  const [value, setValue] = React.useState(50);
  return (
    <Container style={{}}>
      <Section title="Linear Progress (Default)" style={{}}>
        <LinearProgress value={value} />
      </Section>

      <Section title="Linear Progress (Different Styles)" style={{}}>
        <LinearProgress
          color="rgb(0,255,0)"
          trackColor="gray"
          thickness={20}
          trackThickness={30}
          value={value}
          lineCap="square"
        />
        <LinearProgress
          style={{ marginTop: 30 }}
          thickness={20}
          trackThickness={25}
          dashWidth={20}
          dashGap={30}
          trackDashWidth={20}
          trackDashGap={30}
          value={value}
        />
        <LinearProgress
          style={{ marginTop: 30 }}
          thickness={40}
          trackThickness={20}
          value={value}
        />
      </Section>
      <Button
        //@ts-ignore
        title="Randomize Progress"
        onPress={() => setValue(Math.random() * 101)}
      />
    </Container>
  );
};

export default ProgressExample;
