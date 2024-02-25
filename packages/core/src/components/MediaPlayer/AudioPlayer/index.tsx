import * as React from "react";
import { withTheme } from "../../../theming";
import {
  AudioPlayerInterfaceProps,
  HeadlessAudioPlayerProps,
} from "./AudioPlayerCommon";
import HeadlessAudioPlayer from "./HeadlessAudioPlayer";
import AudioPlayerWithInterface from "./AudioPlayerWithInterface";
import type { MediaPlayerRef } from "../MediaPlayerCommon";

interface AudioPlayerProps {
  mode?: "interface" | "headless";
}

const AudioPlayer = React.forwardRef<
  MediaPlayerRef,
  AudioPlayerProps & AudioPlayerInterfaceProps & HeadlessAudioPlayerProps
>(({ mode = "interface", ...rest }, ref) => {
  switch (mode) {
    case "headless":
      return <HeadlessAudioPlayer ref={ref} {...rest} />;
    case "interface":
      //@ts-ignore Typescript unable to handle nested passing of theme
      return <AudioPlayerWithInterface ref={ref} {...rest} />;
  }
});

export default withTheme(AudioPlayer);

export type { MediaPlayerRef as AudioPlayerRef } from "../MediaPlayerCommon";
