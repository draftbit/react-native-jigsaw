import * as React from "react";
import renderer from "react-test-renderer";
import Touchable from "../Touchable";

it("renders touachable", () => {
  const tree = renderer.create(<Touchable />).toJSON();

  expect(tree).toMatchSnapshot();
});
