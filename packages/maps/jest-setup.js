// Needed for tests to run, fails otherwise
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-webview", () => ({
  default: () => jest.fn(), // or any mocked component instead of native view,
}));
