import React from "react";
import YoutubePlayerIFrame from "react-native-youtube-iframe";
import { extractStyles } from "../../utilities";
import { YoutubePlayerProps } from "./YoutubePlayerProps";

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId,
  playlist,
  mute = false,
  autoplay = false,
  style,
}) => {
  const { viewStyles } = extractStyles(style);
  const defaultVideoId = "nwMUpDESXrI";

  return (
    <YoutubePlayerIFrame
      width={viewStyles.width}
      height={viewStyles.height}
      play={autoplay}
      videoId={!videoId && !playlist ? defaultVideoId : videoId}
      playList={playlist}
      mute={mute}
      webViewStyle={viewStyles}
    />
  );
};

export default YoutubePlayer;
