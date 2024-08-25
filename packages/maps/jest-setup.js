// Needed for tests to run, fails otherwise
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-webview", () => ({
  default: () => jest.fn(), // or any mocked component instead of native view,
}));

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
