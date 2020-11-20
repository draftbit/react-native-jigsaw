import * as React from "react";
import renderer from "react-test-renderer";
import TextField from "../TextField";

it("renders textfield", () => {
  const tree = renderer.create(<TextField />).toJSON();

  expect(tree).toMatchSnapshot();
});
