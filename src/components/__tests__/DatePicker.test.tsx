import * as React from "react";
import renderer from "react-test-renderer";
import DatePicker from "../DatePicker/DatePicker";
import { SafeAreaProvider } from "react-native-safe-area-context";

it("renders date picker", () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <DatePicker />
      </SafeAreaProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
