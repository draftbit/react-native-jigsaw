import * as React from "react";
import renderer from "react-test-renderer";
import CardInline from "../CardInline";

it("renders card inline", () => {
  const tree = renderer
    .create(<CardInline onPress={() => {}} textCentered />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
