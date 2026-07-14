import "@shopify/flash-list/jestSetup";

jest.mock("react-native-worklets", () =>
  require("react-native-worklets/lib/module/mock")
);

require("react-native-reanimated").setUpTests();

// Fixes reanimated jest bug: https://github.com/software-mansion/react-native-reanimated/issues/3125
global.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock("expo-constants", () => {
  const actual = jest.requireActual("expo-constants");
  return { ...actual, experienceUrl: null };
});

jest.mock("expo-asset", () => {
  const actual = jest.requireActual("expo-asset");
  class Asset extends actual.Asset {
    static fromModule() {
      return new actual.Asset({ name: "Name", type: "type", uri: "uri" });
    }
  }
  return { ...actual, Asset, getManifestBaseUrl: () => "" };
});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
  isLoading: jest.fn(() => false),
}));

jest.mock("expo-audio", () => ({
  useAudioPlayer: jest.fn(() => ({
    loop: false,
    volume: 1.0,
    playing: false,
    paused: true,
    muted: false,
    isLoaded: false,
    isBuffering: false,
    currentTime: 0,
    duration: 0,
    play: jest.fn(),
    pause: jest.fn(),
    seekTo: jest.fn(),
    replace: jest.fn(),
    addListener: jest.fn(() => ({ remove: jest.fn() })),
  })),
  setAudioModeAsync: jest.fn(() => Promise.resolve()),
}));

jest.mock("expo-video", () => ({
  useVideoPlayer: jest.fn(() => ({
    loop: false,
    muted: false,
    volume: 1.0,
    playbackRate: 1.0,
    playing: false,
    status: "idle",
    currentTime: 0,
    duration: 0,
    bufferedPosition: 0,
    play: jest.fn(),
    pause: jest.fn(),
    replace: jest.fn(),
    addListener: jest.fn(() => ({ remove: jest.fn() })),
  })),
  VideoView: "VideoView",
}));
