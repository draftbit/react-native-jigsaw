import React from "react";
import { View } from "react-native";
import { extractStyles } from "../../utilities";
import { YoutubePlayerProps } from "./YoutubePlayerProps";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId,
  playlist,
  autoplay = false,
  style,
}) => {
  const { viewStyles } = extractStyles(style);
  const defaultVideoId = "nwMUpDESXrI";

  const options: YouTubeProps["opts"] = {
    width: viewStyles.width,
    height: viewStyles.height,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      list: playlist,
      listType: "playlist",
    },
  };

  return (
    <View style={viewStyles}>
      <YouTube
        videoId={!videoId && !playlist ? defaultVideoId : videoId}
        opts={options}
      />
    </View>
  );
};

export default YoutubePlayer;
