import * as React from "react";
import renderer from "react-test-renderer";
import PortalManager from "../Portal/PortalManager";

it("renders portal manager", () => {
  const tree = renderer.create(<PortalManager />).toJSON();

  expect(tree).toMatchSnapshot();
});
