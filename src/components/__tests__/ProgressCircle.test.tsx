import * as React from "react";
import renderer from "react-test-renderer";
import ProgressCircle from "../ProgressCircle";

it("renders progress circle", () => {
  const tree = renderer.create(<ProgressCircle />).toJSON();

  expect(tree).toMatchSnapshot();
});
