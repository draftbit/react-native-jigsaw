import * as React from "react";
import renderer from "react-test-renderer";
import FieldCheckbox from "../FieldCheckbox";

it("renders field checkbox", () => {
  const tree = renderer
    .create(<FieldCheckbox color="red" status="checked" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
