import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { Button, Timer } from "@draftbit/core";

const TimerExample: React.FC = () => {
  const timerRef = React.useRef<any>(null);
  const [countDirection, setCountDirection] = React.useState<"up" | "down">(
    "up"
  );

  const handleStart = () => timerRef.current?.start();
  const handleStop = () => timerRef.current?.stop();
  const handleReset = () => timerRef.current?.reset();
  const handleResetToCustomTime = () => timerRef.current?.reset(5000);

  const handleDirectionToggle = () =>
    setCountDirection((prev) => (prev === "up" ? "down" : "up"));
  return (
    <Container style={{}}>
      <Section style={{}} title="Default">
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Timer
            ref={timerRef}
            initialTime={60000}
            timerEndTime={70000}
            updateInterval={1000}
            format="mm:ss"
            countDirection={countDirection}
            onTimerChange={(value: number) => {
              console.log("onTimerChange : ", value);
            }}
            onTimerEnd={() => {
              console.log("onTimerEnd");

              alert("onTimerEnd");
            }}
            style={{
              fontSize: 50,
              fontWeight: "bold",
            }}
          />
          <Text style={styles.directionText}>
            Count direction : {countDirection}
          </Text>
          <View style={styles.buttonsContainer}>
            <Button title="Start Timer" onPress={handleStart} />
            <Button title="Stop Timer" onPress={handleStop} />
            <Button title="Reset Timer" onPress={handleReset} />
            <Button title="Reset to 5s" onPress={handleResetToCustomTime} />
            <Button
              title={`Toggle Direction`}
              onPress={handleDirectionToggle}
            />
          </View>
        </View>
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 20,
    gap: 10,
  },
  directionText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 15,
  },
});

export default withTheme(TimerExample);
