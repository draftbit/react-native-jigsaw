import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react-native";
import {
  default as AudioPlayer,
  AudioPlayerRef,
} from "../../components/MediaPlayer/AudioPlayer";

const mockAudioSource = {
  uri: "audio-uri",
};

const mockPlayAsync = jest.fn();
const mockPauseAsync = jest.fn();
const mockUnloadAsync = jest.fn();

// To ignore the warning: 'When testing, code that causes React state updates should be wrapped into act'
// This is caused because state is updated in the useEffect, this is intentional and not an issue, so we can ignore it
console.error = jest.fn();

jest.mock("expo-av", () => {
  const original = jest.requireActual("expo-av");

  class Audio {
    static setAudioModeAsync = () => {};
    static Sound = {
      onPlaybackStatusUpdate: (_) => {},
      createAsync: function () {
        return {
          sound: {
            setOnPlaybackStatusUpdate: (callback) =>
              (this.onPlaybackStatusUpdate = callback),
            playAsync: () => {
              this.onPlaybackStatusUpdate({
                isLoaded: true,
                isPlaying: true,
              });
              mockPlayAsync();
            },
            pauseAsync: mockPauseAsync,
            unloadAsync: mockUnloadAsync,
            setPositionAsync: (position: number) => {
              this.onPlaybackStatusUpdate({
                isLoaded: true,
                positionMillis: position,
              });
            },
          },
        };
      },
    };
  }

  return { ...original, Audio };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("AudioPlayer tests", () => {
  test("should render an interface when in 'interface' mode", () => {
    render(<AudioPlayer mode="interface" source={mockAudioSource} />);

    const playerInterface = screen.queryByTestId("audio-player-interface");
    expect(playerInterface).toBeTruthy();
  });

  test("should not render an interface when in 'headless' mode", () => {
    render(<AudioPlayer mode="headless" source={mockAudioSource} />);

    const playerInterface = screen.queryByTestId("audio-player-interface");
    () => expect(playerInterface).toBeFalsy();
  });

  test("should render playback icon when hidePlaybackIcon is false", () => {
    render(<AudioPlayer source={mockAudioSource} hidePlaybackIcon={false} />);

    const playbackIcon = screen.queryByTestId("audio-player-playback-icon");
    () => expect(playbackIcon).toBeTruthy();
  });

  test("should not render playback icon when hidePlaybackIcon is true", () => {
    render(<AudioPlayer source={mockAudioSource} hidePlaybackIcon={true} />);

    const playbackIcon = screen.queryByTestId("audio-player-playback-icon");
    () => expect(playbackIcon).toBeFalsy();
  });

  test("should render duration when hideDuration is false", () => {
    render(<AudioPlayer source={mockAudioSource} hideDuration={false} />);

    const duration = screen.queryByTestId("audio-player-duration");
    () => expect(duration).toBeTruthy();
  });

  test("should not render duration when hideDuration is true", () => {
    render(<AudioPlayer source={mockAudioSource} hideDuration={true} />);

    const duration = screen.queryByTestId("audio-player-duration");
    () => expect(duration).toBeFalsy();
  });

  test("should render slider when hideSlider is false", () => {
    render(<AudioPlayer source={mockAudioSource} hideSlider={false} />);

    const slider = screen.queryByTestId("audio-player-slider");
    () => expect(slider).toBeTruthy();
  });

  test("should not render slider when hideSlider is true", () => {
    render(<AudioPlayer source={mockAudioSource} hideSlider={true} />);

    const slider = screen.queryByTestId("audio-player-slider");
    () => expect(slider).toBeFalsy();
  });

  test("should play and pause audio when clicking playback icon", async () => {
    const ref = React.createRef<AudioPlayerRef>();

    render(<AudioPlayer ref={ref} source={mockAudioSource} />);

    await waitForSoundToLoad();

    const playbackIcon = await screen.findByTestId(
      "audio-player-playback-icon"
    );

    act(() => {
      fireEvent.press(playbackIcon);
    });
    expect(mockPlayAsync).toBeCalled();

    act(() => {
      fireEvent.press(playbackIcon);
    });
    expect(mockPauseAsync).toBeCalled();
  });

  test("should togglePlayback play and pause audio", async () => {
    const ref = React.createRef<AudioPlayerRef>();

    render(<AudioPlayer ref={ref} source={mockAudioSource} />);

    await act(async () => {
      await waitForSoundToLoad();
      ref.current?.togglePlayback();
    });
    expect(mockPlayAsync).toBeCalled();

    act(() => {
      ref.current?.togglePlayback();
    });
    expect(mockPauseAsync).toBeCalled();
  });

  test("should audio be cleaned up/unloaded when unmounting", async () => {
    render(<AudioPlayer source={mockAudioSource} />);

    await waitForSoundToLoad();
    screen.unmount();
    expect(mockUnloadAsync).toBeCalled();
  });

  test("should seekToPosition change audio position", async () => {
    const ref = React.createRef<AudioPlayerRef>();
    const position = 30000;
    const onPlaybackStatusUpdate = jest.fn();
    render(
      <AudioPlayer
        ref={ref}
        source={mockAudioSource}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    );

    await act(async () => {
      await waitForSoundToLoad();
      ref.current?.seekToPosition(position);
    });
    expect(onPlaybackStatusUpdate).toBeCalledWith(
      expect.objectContaining({ currentPositionMillis: position })
    );
  });
});

async function waitForSoundToLoad() {
  /**
   * The sound/media object/reference is not instantly loaded in the Audio Player
   * This delay is enough to make sure it is loaded
   *
   * This is the simplest way to do it since mocks are being used and nothing is actually being 'loaded', just prevents it from being instant
   */
  await new Promise((r) => setTimeout(r, 500));
}
