import * as React from "react";
import renderer from "react-test-renderer";
import Divider from "../Divider";

it("renders divider", () => {
  const tree = renderer.create(<Divider />).toJSON();

  expect(tree).toMatchSnapshot();
});
