import * as React from "react";
import renderer from "react-test-renderer";
import Stepper from "../Stepper";

it("renders stepper", () => {
  const tree = renderer.create(<Stepper />).toJSON();

  expect(tree).toMatchSnapshot();
});
