import "@shopify/flash-list/jestSetup";
import { setUpTests as setupReaanimatedTests } from "react-native-reanimated/lib/reanimated2/jestUtils";
setupReaanimatedTests();

// Fixes reanimated jest bug: https://github.com/software-mansion/react-native-reanimated/issues/3125
global.ReanimatedDataMock = {
  now: () => 0,
};
