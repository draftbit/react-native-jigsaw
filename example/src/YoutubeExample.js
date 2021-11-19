import React from "react";
import Section, { Container } from "./Section";

import { Youtube } from "@draftbit/ui";

const YoutubeExample = () => {
  return (
    <Container>
      <Section title="Youtube">
        <Youtube videoId="nwMUpDESXrI" style={{ width: "100%", height: 250 }} />
      </Section>
      <Section title="Youtube Playlist">
        <Youtube
          playlist="PLUa6TiXzjIrwowt6P-uGCJm8ovm-9S1Ks"
          style={{ height: 250 }}
          mute={true}
          autoplay={true}
        />
      </Section>
    </Container>
  );
};

export default YoutubeExample;
