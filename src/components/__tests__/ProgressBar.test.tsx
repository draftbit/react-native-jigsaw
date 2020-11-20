import * as React from "react";
import renderer from "react-test-renderer";
import ProgressBar from "../ProgressBar";

it("renders progress bar", () => {
  const tree = renderer.create(<ProgressBar />).toJSON();

  expect(tree).toMatchSnapshot();
});
