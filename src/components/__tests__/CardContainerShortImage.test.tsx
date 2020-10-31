import * as React from "react";
import renderer from "react-test-renderer";
import CardContainerShortImage from "../CardContainerShortImage";

it("renders card container short image", () => {
  const tree = renderer
    .create(<CardContainerShortImage onPress={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
