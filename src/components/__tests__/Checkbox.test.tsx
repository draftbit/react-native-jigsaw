import * as React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../Checkbox";

it("renders checkbox", () => {
  const tree = renderer.create(<Checkbox />).toJSON();

  expect(tree).toMatchSnapshot();
});
