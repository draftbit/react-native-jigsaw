import * as React from "react";
import renderer from "react-test-renderer";
import CardBlock from "../CardBlock";

it("renders card block", () => {
  const tree = renderer
    .create(<CardBlock onPress={() => {}} titleCentered={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
