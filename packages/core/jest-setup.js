import "@shopify/flash-list/jestSetup";
import { setUpTests as setupReaanimatedTests } from "react-native-reanimated/src/reanimated2/jestUtils";
setupReaanimatedTests();

// Fixes reanimated jest bug: https://github.com/software-mansion/react-native-reanimated/issues/3125
global.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
