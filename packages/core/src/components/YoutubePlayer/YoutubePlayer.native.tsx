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
      /**
       * Addresses issue where webview is locked by aspect ratio and refuses to
       * change height according to provided style props.
       * See:
       * https://github.com/LonelyCpp/react-native-youtube-iframe/issues/13#issuecomment-611753123
       */
      webViewProps={{
        injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `,
      }}
    />
  );
};

export default YoutubePlayer;
