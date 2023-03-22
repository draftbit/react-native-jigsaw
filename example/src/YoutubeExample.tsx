import React from "react";
import Section, { Container } from "./Section";

import { YoutubePlayer } from "@draftbit/ui";

const YoutubeExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Youtube">
        <YoutubePlayer
          videoId="nwMUpDESXrI"
          style={{ width: "100%", height: 220 }}
        />
      </Section>
      <Section title="Youtube Playlist">
        <YoutubePlayer
          playlist="PLUa6TiXzjIrwowt6P-uGCJm8ovm-9S1Ks"
          style={{ height: 250 }}
          autoplay={true}
        />
      </Section>
    </Container>
  );
};

export default YoutubeExample;
