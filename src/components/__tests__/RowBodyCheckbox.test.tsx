import * as React from "react";
import renderer from "react-test-renderer";
import RowBodyCheckbox from "../RowBodyCheckbox";

it("renders row body checkbox", () => {
  const tree = renderer.create(<RowBodyCheckbox />).toJSON();

  expect(tree).toMatchSnapshot();
});
