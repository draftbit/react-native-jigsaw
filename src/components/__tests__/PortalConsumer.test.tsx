import * as React from "react";
import renderer from "react-test-renderer";
import PortalConsumer from "../Portal/PortalConsumer";

it("renders portal consumer", () => {
  const tree = renderer.create(<PortalConsumer />).toJSON();

  expect(tree).toMatchSnapshot();
});
