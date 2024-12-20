import React from "react";
import Section, { Container } from "./Section";
import { View, Text } from "react-native";
import {
  AudioPlayer,
  Button,
  DatePicker,
  Icon,
  IconButton,
  LinearProgress,
  Picker,
  PinInput,
  TextField,
  useTheme,
} from "@draftbit/ui";

const VideoPlayerExample: React.FC = () => {
  const theme = useTheme();
  return (
    <Container style={{}}>
      <Section style={{ gap: 20 }} title="Some Components">
        <AudioPlayer source={require("./assets/loop.wav")} />
        <IconButton onPress={() => {}} />
        <Button
          //@ts-ignore
          title="Button"
        />
        <DatePicker placeholder="DatePicker" />
        <Icon name="FontAwesome5/adjust" size={20} />
        <LinearProgress indeterminate />
        <Picker
          placeholder="Picker"
          onValueChange={() => {}}
          options={["Option 1", "Option 2"]}
        />
        <PinInput />
        <TextField
          placeholder="Text Field"
          numberOfLines={1}
          onChangeText={() => {}}
        />
      </Section>
      <Section style={{}} title="Platform Color">
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: theme.colors.background.platformTest,
          }}
        />
      </Section>
      <Section style={{}} title="Breakpoint Color">
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: theme.colors.background.breakpointTest,
          }}
        />
      </Section>
      <Section style={{}} title="Typography">
        <Text
          style={[theme.typography.body1, { color: theme.colors.text.strong }]}
        >
          This is a test of the typography system.
        </Text>
      </Section>
      <Section style={{}} title="Light/Dark Color">
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            backgroundColor: theme.colors.background.lightDarkTest,
          }}
        />
      </Section>
    </Container>
  );
};

export default VideoPlayerExample;
