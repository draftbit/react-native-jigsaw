import * as React from "react";
import renderer from "react-test-renderer";
import RadioButtonFieldRow from "../RadioButtonFieldRow";

it("renders radio button field row", () => {
  const tree = renderer
    .create(<RadioButtonFieldRow label="Label" selected />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
