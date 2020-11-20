import * as React from "react";
import renderer from "react-test-renderer";
import StarRating from "../StarRating";

it("renders star rating", () => {
  const tree = renderer.create(<StarRating />).toJSON();

  expect(tree).toMatchSnapshot();
});
