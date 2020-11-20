import * as React from "react";
import renderer from "react-test-renderer";
import Elevation from "../Elevation";

it("renders elevation", () => {
  const tree = renderer.create(<Elevation />).toJSON();

  expect(tree).toMatchSnapshot();
});
