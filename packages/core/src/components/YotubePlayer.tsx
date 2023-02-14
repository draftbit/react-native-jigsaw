import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import YoutubePlayerComponent from "react-native-youtube-iframe";
import { extractStyles } from "../utilities";

interface YoutubePlayerProps {
  videoId?: string;
  playlist?: string;
  mute?: boolean;
  autoplay?: boolean;
  style?: StyleProp<ViewStyle>;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId,
  playlist,
  mute = false,
  autoplay = false,
  style,
}) => {
  const { viewStyles } = extractStyles(style);
  const { height, width } = viewStyles;

  return (
    <YoutubePlayerComponent
      height={height}
      width={width}
      play={autoplay}
      videoId={videoId}
      playList={playlist}
      mute={mute}
      webViewStyle={style}
    />
  );
};

export default YoutubePlayer;
