import React from "react";
import { act, render, screen } from "@testing-library/react-native";
import {
  default as VideoPlayer,
  VideoPlayerRef,
} from "../../components/MediaPlayer/VideoPlayer";

const mockPlayAsync = jest.fn();
const mockPauseAsync = jest.fn();
const mockUnloadAsync = jest.fn();
const mockPresentFullscreenPlayer = jest.fn();
const mockDismissFullscreenPlayer = jest.fn();

jest.mock("expo-av", () => {
  const original = jest.requireActual("expo-av");
  const React = require("react");

  class Video extends React.Component {
    render(): React.ReactNode {
      return <></>;
    }
    playAsync = () => {
      this.props.onPlaybackStatusUpdate({ isLoaded: true, isPlaying: true });
      mockPlayAsync();
    };
    pauseAsync = mockPauseAsync;
    unloadAsync = mockUnloadAsync;
    setPositionAsync = (position: number) => {
      this.props.onPlaybackStatusUpdate({
        isLoaded: true,
        positionMillis: position,
      });
    };
    presentFullscreenPlayer = () => {
      this.props.onFullscreenUpdate({
        fullscreenUpdate: original.VideoFullscreenUpdate.PLAYER_DID_PRESENT,
      });
      mockPresentFullscreenPlayer();
    };
    dismissFullscreenPlayer = mockDismissFullscreenPlayer;
  }
  return { ...original, Video };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("VideoPlayer tests", () => {
  test("should togglePlayback play and pause video", async () => {
    const ref = React.createRef<VideoPlayerRef>();

    render(
      <VideoPlayer
        ref={ref}
        source={{
          uri: "video-uri",
        }}
      />
    );

    act(() => {
      ref.current?.togglePlayback();
    });
    expect(mockPlayAsync).toBeCalled();

    act(() => {
      ref.current?.togglePlayback();
    });
    expect(mockPauseAsync).toBeCalled();
  });

  test("should play() play the video", async () => {
    const ref = React.createRef<VideoPlayerRef>();

    render(
      <VideoPlayer
        ref={ref}
        source={{
          uri: "video-uri",
        }}
      />
    );

    act(() => {
      ref.current?.play();
    });
    expect(mockPlayAsync).toBeCalled();
  });

  test("should pause() pause the video", async () => {
    const ref = React.createRef<VideoPlayerRef>();

    render(
      <VideoPlayer
        ref={ref}
        source={{
          uri: "video-uri",
        }}
      />
    );

    act(() => {
      ref.current?.pause();
    });
    expect(mockPauseAsync).toBeCalled();
  });

  test("should video be cleaned up/unloaded when unmounting", async () => {
    render(
      <VideoPlayer
        source={{
          uri: "video-uri",
        }}
      />
    );
    screen.unmount();
    expect(mockUnloadAsync).toBeCalled();
  });

  test("should seekToPosition change video position", async () => {
    const ref = React.createRef<VideoPlayerRef>();
    const position = 30000;
    const onPlaybackStatusUpdate = jest.fn();
    render(
      <VideoPlayer
        ref={ref}
        source={{
          uri: "video-uri",
        }}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    );

    act(() => {
      ref.current?.seekToPosition(position);
    });
    expect(onPlaybackStatusUpdate).toBeCalledWith(
      expect.objectContaining({ currentPositionMillis: position })
    );
  });

  test("should toggleFullscreen open and dismiss full screen", async () => {
    const ref = React.createRef<VideoPlayerRef>();

    render(
      <VideoPlayer
        ref={ref}
        source={{
          uri: "video-uri",
        }}
      />
    );

    act(() => {
      ref.current?.toggleFullscreen();
    });
    expect(mockPresentFullscreenPlayer).toBeCalled();

    act(() => {
      ref.current?.toggleFullscreen();
    });
    expect(mockDismissFullscreenPlayer).toBeCalled();
  });
});
