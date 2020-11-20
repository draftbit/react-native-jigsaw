import * as React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import PortalHost from "../Portal/PortalHost";

it("renders portal host", () => {
  const tree = renderer.create(<PortalHost children={<View />} />).toJSON();

  expect(tree).toMatchSnapshot();
});
