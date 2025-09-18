// Needed for tests to run, fails otherwise
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-webview", () => ({
  default: () => jest.fn(), // or any mocked component instead of native view,
}));

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

jest.mock("expo-av", () => {
  return {
    Audio: {
      setAudioModeAsync: jest.fn(),
    },
    Sound: {
      onPlaybackStatusUpdate: jest.fn(),
      createAsync: jest.fn(),
    },
  };
});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
