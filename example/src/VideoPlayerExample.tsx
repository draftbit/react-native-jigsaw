import React from "react";
import Section, { Container } from "./Section";
import { Text } from "react-native";
import { VideoPlayer, VideoPlayerRef, Button } from "@draftbit/ui";

const VideoPlayerExample: React.FC = () => {
  const videoPlayerRef = React.useRef<VideoPlayerRef>(null);
  const [playeState, setPlayerState] = React.useState<object>();

  return (
    <Container style={{}}>
      <Section style={{}} title="VideoPlayer (Default with native controls)">
        <VideoPlayer
          style={{ width: 350, height: 250 }}
          source={{
            uri: "http://static.draftbit.com/videos/intro-to-draftbit.mp4",
          }}
          useNativeControls
          resizeMode="cover"
        />
      </Section>
      <Section style={{}} title="VideoPlayer (Poster and custom controls)">
        <VideoPlayer
          ref={videoPlayerRef}
          style={{ width: 350, height: 250 }}
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          useNativeControls={false}
          posterSource={{
            uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          }}
          usePoster
          onPlaybackStatusUpdate={(status) => setPlayerState(status)}
          onPlaybackFinish={() => console.log("Finished playback")}
          playsInSilentModeIOS={true}
        />
        <Button
          //@ts-ignore
          title="Toggle playback"
          onPress={() => {
            videoPlayerRef?.current?.togglePlayback();
          }}
        />
        <Button
          //@ts-ignore
          title="Seek player to 10 second mark"
          onPress={() => {
            videoPlayerRef?.current?.seekToPosition(10000);
          }}
        />
        <Button
          //@ts-ignore
          title="Toggle player full screen"
          onPress={() => {
            videoPlayerRef?.current?.toggleFullscreen();
          }}
        />
        <Text>{`Current player state: ${JSON.stringify(playeState)}`}</Text>
      </Section>
    </Container>
  );
};

export default VideoPlayerExample;
