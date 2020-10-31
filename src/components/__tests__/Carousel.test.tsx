import * as React from "react";
import renderer from "react-test-renderer";
import Carousel from "../Carousel";

it("renders carousel", () => {
  const tree = renderer
    .create(
      <Carousel
        images={[
          require("../../assets/bg.png"),
          require("../../assets/bg.png"),
        ]}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
