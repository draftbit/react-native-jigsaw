import * as React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import Portal from "../Portal/Portal";

it("renders portal", () => {
  const tree = renderer.create(<Portal children={<View />} />).toJSON();

  expect(tree).toMatchSnapshot();
});
