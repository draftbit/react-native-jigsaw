import * as React from "react";
import renderer from "react-test-renderer";
import CardContainerRating from "../CardContainerRating";

it("renders avatar", () => {
  const tree = renderer
    .create(<CardContainerRating textCentered onPress={() => {}} rating={10} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
