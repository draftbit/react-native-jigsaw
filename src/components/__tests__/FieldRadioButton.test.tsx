import * as React from "react";
import renderer from "react-test-renderer";
import FieldRadioButton from "../FieldRadioButton";

it("renders field radio button", () => {
  const tree = renderer
    .create(<FieldRadioButton color="blue" selected />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
