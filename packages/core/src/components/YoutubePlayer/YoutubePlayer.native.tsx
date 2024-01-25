import React from "react";
import YoutubePlayerIFrame from "react-native-youtube-iframe";
import { extractStyles } from "../../utilities";
import { YoutubePlayerProps } from "./YoutubePlayerProps";

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId,
  playlist,
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
      webViewStyle={[
        viewStyles,
        {
          /**
           * Addresses a WebView and react-navigation bug that causes apps to crash
           * Alternate solution is set `androidLayerType` prop to `"software"`, but that leads to player playing without video
           * See:
           * https://lonelycpp.github.io/react-native-youtube-iframe/navigation-crash/#change-webview-opacity-to-099-issue-comment
           * https://github.com/LonelyCpp/react-native-youtube-iframe/issues/110#issuecomment-779848787
           * https://github.com/react-native-webview/react-native-webview/issues/811
           */
          opacity: viewStyles.opacity < 0.99 ? viewStyles.opacity : 0.99,
        },
      ]}
    />
  );
};

export default YoutubePlayer;
