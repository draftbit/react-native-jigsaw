import * as React from "react";
import renderer from "react-test-renderer";
import StepIndicator from "../StepIndicator";

it("renders step indicator", () => {
  const tree = renderer.create(<StepIndicator />).toJSON();

  expect(tree).toMatchSnapshot();
});
