import "@shopify/flash-list/jestSetup";
import { setUpTests as setupReaanimatedTests } from "react-native-reanimated/src/reanimated2/jestUtils";
setupReaanimatedTests();

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
