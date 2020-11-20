import * as React from "react";
import renderer from "react-test-renderer";
import RowBodySwitch from "../RowBodySwitch";

it("renders row body switch", () => {
  const tree = renderer.create(<RowBodySwitch value={true} />).toJSON();

  expect(tree).toMatchSnapshot();
});
