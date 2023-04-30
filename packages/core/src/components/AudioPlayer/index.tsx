import * as React from "react";

import {
  AudioPlayerInterfaceProps,
  HeadlessAudioPlayerProps,
  HeadlessAudioPlayerRef,
} from "./AudioPlayerCommon";
import HeadlessAudioPlayer from "./HeadlessAudioPlayer";
import AudioPlayerWithInterface from "./AudioPlayerWithInterface";

interface AudioPlayerProps {
  mode?: "interface" | "headless";
}

const AudioPlayer = React.forwardRef<
  HeadlessAudioPlayerRef,
  AudioPlayerProps & AudioPlayerInterfaceProps & HeadlessAudioPlayerProps
>(({ mode = "interface", ...rest }, ref) => {
  switch (mode) {
    case "headless":
      return <HeadlessAudioPlayer ref={ref} {...rest} />;
    case "interface":
      return <AudioPlayerWithInterface ref={ref} {...rest} />;
  }
});

export default AudioPlayer;

export { HeadlessAudioPlayerRef as AudioPlayerRef } from "./AudioPlayerCommon";
