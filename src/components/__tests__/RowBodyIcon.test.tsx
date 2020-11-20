import * as React from "react";
import renderer from "react-test-renderer";
import RowBodyIcon from "../RowBodyIcon";

it("renders divider", () => {
  const tree = renderer.create(<RowBodyIcon icon="arrow" />).toJSON();

  expect(tree).toMatchSnapshot();
});
