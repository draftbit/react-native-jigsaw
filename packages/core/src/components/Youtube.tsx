import {
  COMPONENT_TYPES,
  createBoolProp,
  createTextProp,
} from "@draftbit/types";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { extractStyles } from "../utilities";

type Props = {
  videoId: string;
  playlist: string;
  style: StyleProp<ViewStyle>;
  mute: boolean;
  autoplay: boolean;
};

const Youtube = ({ videoId, playlist, style, mute, autoplay }: Props) => {
  const {
    viewStyles: { height, width },
  } = extractStyles(style);

  return (
    <YoutubePlayer
      height={height}
      width={width}
      play={autoplay}
      videoId={videoId}
      playList={playlist}
      mute={mute}
    />
  );
};

export default Youtube;

export const SEED_DATA = {
  name: "Youtube",
  tag: "Youtube",
  description: "Youtube Component",
  category: COMPONENT_TYPES.media,
  layout: {
    width: "100%",
  },
  props: {
    videoId: createTextProp({
      label: "VideoId",
      description: "Youtube Video ID",
    }),
    playlist: createTextProp({
      label: "PlayList",
      description: "Playlist ID",
    }),
    mute: createBoolProp({
      label: "Mute",
      description: "Whether to mute video",
      defaultValue: false,
    }),
    autoplay: createBoolProp({
      label: "Autoplay",
      description: "Whether to Autoplay video",
      defaultValue: false,
    }),
  },
};
