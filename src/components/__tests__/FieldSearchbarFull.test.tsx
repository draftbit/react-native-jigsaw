import * as React from "react";
import renderer from "react-test-renderer";
import FieldSearchBarFull from "../FieldSearchBarFull";

it("renders field search bar full", () => {
  const tree = renderer
    .create(<FieldSearchBarFull onChange={() => {}} value="Test Value" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
