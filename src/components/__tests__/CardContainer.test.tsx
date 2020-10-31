import * as React from "react";
import renderer from "react-test-renderer";
import CardContainer from "../CardContainer";

it("renders card container", () => {
  const tree = renderer
    .create(<CardContainer onPress={() => {}} textCentered />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
